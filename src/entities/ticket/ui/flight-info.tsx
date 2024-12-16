import { formatDate } from "@/shared/lib"

export function FlightInfo({
  time,
  code,
  name,
  date
}: {
  time: string
  code: string
  name: string
  date: string
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-5xl font-semibold mb-2">{time}</span>
      <span>{code} - {name}</span>
      <span className="opacity-65">{formatDate(date)}</span>
    </div>
  )
}