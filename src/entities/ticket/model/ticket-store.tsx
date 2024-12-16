import { create } from 'zustand'
import type { Ticket } from './types'
import { fetchTickets } from '@/entities/ticket/api'
import { ticketsAdapter } from './tickets-adapter'
import { convertCurrency } from '../lib'

type Currency = "RU" | "USD" | "EUR"


interface TicketState {
  tickets: Ticket[]
  ticketsNormalized: Record<string, Ticket>
  filteredTickets: Ticket[]
  selectedTransfer: number[]
  isAllTransfersSelected: boolean
  error: boolean
  currency: Currency
  toggleCurrency: (currency: Currency) => void
  loadTickets: () => Promise<void>
  toggleTransfer: (value: number) => void
  toggleAllTransfers: () => void
}

export const useTicketStore = create<TicketState>((set) => ({
  tickets: [],
  ticketsNormalized: {},
  filteredTickets: [],
  selectedTransfer: [],
  isAllTransfersSelected: true,
  error: false,
  currency: "RU",

  toggleCurrency: (currency: Currency) => set(state => {
    return {
      currency,
      filteredTickets: state.filteredTickets.map(t => {
        const priceInRub = state.ticketsNormalized[t.id].price
        return {
          ...t,
          price: convertCurrency(priceInRub, currency)
        }
      })
    }

  }),

  toggleTransfer: (value) => set((state) => {
    if (value < 0 || value > 3) return state

    const isSelected = state.selectedTransfer.includes(value)

    if (isSelected) {
      const transfers = state.selectedTransfer.filter(option => option !== value)
      return {
        selectedTransfer: transfers,
        isAllTransfersSelected: false,
        filteredTickets: transfers.length > 0 ? state.tickets.filter(t => transfers.includes(t.stops)) : state.tickets
      }
    } else {
      const transfers = [...state.selectedTransfer, value]
      return {
        selectedTransfer: transfers,
        isAllTransfersSelected: false,
        filteredTickets: state.tickets.filter(t => transfers.includes(t.stops))
      }
    }
  }),

  toggleAllTransfers: () => set(state => ({
    isAllTransfersSelected: true,
    selectedTransfer: [],
    filteredTickets: state.tickets
  })),

  loadTickets: async () => {
    try {
      const response = await fetchTickets()
      const tickets = response.tickets.map(ticket => ticketsAdapter(ticket)).sort((a, b) => a.price - b.price)
      const normalized = tickets.reduce((acc, t) => {
        acc[t.id] = t
        return acc
      }, {} as Record<string, Ticket>)
      set({ tickets, filteredTickets: tickets, error: false, ticketsNormalized: normalized })
    } catch {
      set({ tickets: [], filteredTickets: [], ticketsNormalized: {}, error: true })
    }
  }
}))