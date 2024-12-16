import { Company } from '@/entities/ticket/model';

export const carriersMap: Record<Company, { logo: string; name: string }> = {
  S7: { logo: 's7.png', name: 'S7' },
  SU: { logo: 'SU.jpg', name: 'Аэрофлот' },
  BA: { logo: 'ba.jpg', name: 'Baltic Air' },
  TK: { logo: 'tk.jpg', name: 'Turkish Airlane' },
};
