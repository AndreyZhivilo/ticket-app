import { Ticket, Company } from './types';
import { TicketDTO } from '@/entities/ticket/api';
import { nanoid } from 'nanoid';

export function ticketsAdapter(t: TicketDTO): Ticket {
  return {
    id: nanoid(),
    company: t.carrier as Company,
    price: t.price,
    departureTime: t.departure_time,
    origin: t.origin,
    originName: t.origin_name,
    departureDate: t.departure_date,
    destination: t.destination,
    arrivalName: t.destination_name,
    arrivalTime: t.arrival_time,
    arrivalDate: t.arrival_date,
    stops: t.stops,
  };
}
