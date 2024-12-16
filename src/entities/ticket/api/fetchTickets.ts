import { TicketsDTO } from './tickets-dto';

export async function fetchTickets(): Promise<TicketsDTO> {
  const response = await fetch('/mock-tickets.json');
  const data = await response.json();
  return data;
}
