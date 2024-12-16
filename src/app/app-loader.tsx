import { useTicketStore } from '@/entities/ticket/model';
import { ReactNode, useEffect, useState } from 'react';

export function AppLoader({ children }: { children?: ReactNode }) {
  const loadTickets = useTicketStore((s) => s.loadTickets);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    loadTickets().finally(() => {
      setIsLoading(false);
    });
  }, [loadTickets]);

  if (isLoading) {
    return <span>Загружаем билеты...</span>;
  }

  return <>{children}</>;
}
