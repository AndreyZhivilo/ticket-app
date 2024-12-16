import { Button } from "@/shared/ui/button"
import { FlightInfo } from "./flight-info"
import { formatTransfers } from '@/shared/lib'
import { carriersMap } from '../lib'
import { routes } from '@/shared/config'
import type { Ticket } from '@/entities/ticket/model'
import { useTicketStore } from "@/entities/ticket/model";
import { getCurrencyLogo } from '@/entities/ticket/lib'

interface TicketCardProps extends Ticket {
  onClick: (id: string) => void
}

export function TicketCard({
  id,
  company,
  price,
  departureTime,
  origin,
  originName,
  departureDate,
  destination,
  arrivalName,
  arrivalTime,
  arrivalDate,
  stops,
  onClick,
}: TicketCardProps) {
  const currency = useTicketStore(s => s.currency)
  const currencyLogo = getCurrencyLogo(currency)
  return (
    <div className="grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-[1fr_2fr] bg-white rounded-md">
      <div className="flex flex-col row-start-2 sm:row-start-1 items-center gap-y-4 border-r-[1px] border-slate-100 p-5">
        <div className="flex items-center gap-x-1">
          <span className="text-[#283480] text-lg sm:text-2xl font-bold text-center">
            {carriersMap[company].name.toUpperCase()}
          </span>
          <img src={routes.asset(carriersMap[company].logo)} width={40} height={40} className="w-[40px] h-[40px] object-contain" />
        </div>
        <Button className="flex flex-col h-auto gap-y-0 text-md self-stretch" onClick={() => onClick(id)}>
          Купить за <span>{price.toLocaleString('ru-RU')} {currencyLogo}</span>
        </Button>
      </div>
      <div className="grid md:grid-cols-[auto_1fr_auto] grid-cols-2 grid-rows-[auto_auto] gap-y-2 gap-x-2 p-5">
        <FlightInfo
          time={departureTime}
          code={origin}
          name={originName}
          date={departureDate}
        />
        <div
          className="col-start-1 col-end-3 row-start-1 md:col-start-2 md:col-end-2 text-lg md:text-xl flex justify-center border-b-2 border-slate-200 self-start py-1 opacity-65"
        >
          {formatTransfers(stops)}
        </div>
        <FlightInfo
          time={arrivalTime}
          code={destination}
          name={arrivalName}
          date={arrivalDate}
        />
      </div>
    </div>
  )
}