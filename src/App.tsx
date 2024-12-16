import { MainLayout } from '@/app/layouts'
import { TicketFilter } from '@/features/ticket-filter'
import { TicketCard } from '@/entities/ticket/ui/ticket-card'
import { useTicketStore } from '@/entities/ticket/model'

function App() {
  const tickets = useTicketStore(s => s.filteredTickets)
  const error = useTicketStore(s => s.error)

  if (error) return <span>Произошла ошибка. Но, мы скоро все починим :)</span>

  return (
    <MainLayout className='py-8'>
      <MainLayout.Sidebar>
        <TicketFilter />
      </MainLayout.Sidebar>
      <MainLayout.Main>
        <div className='flex flex-col gap-y-4'>
          {tickets.length === 0 && <span>Не нашлось ни одного рейса (</span>}
          {tickets.map(t => {
            return (
              <TicketCard
                key={t.id}
                id={t.id}
                company={t.company}
                price={t.price}
                departureTime={t.departureTime}
                arrivalTime={t.arrivalTime}
                origin={t.origin}
                originName={t.originName}
                departureDate={t.departureDate}
                arrivalDate={t.arrivalDate}
                arrivalName={t.arrivalName}
                destination={t.destination}
                stops={t.stops}
                onClick={(id) => console.log(`Вы купили билет номер ${id}`)}
              />
            )
          })}
        </div>
      </MainLayout.Main>
    </MainLayout>
  )
}

export default App
