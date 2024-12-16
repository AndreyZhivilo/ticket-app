export type Ticket = {
  id: string;
  company: Company;
  price: number;
  departureTime: string;
  origin: string;
  originName: string;
  departureDate: string;
  destination: string;
  arrivalName: string;
  arrivalTime: string;
  arrivalDate: string;
  stops: number;
};

export type Company = 'TK' | 'S7' | 'SU' | 'BA';
