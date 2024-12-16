import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/shared/ui/toggle-group"

import { FilterCheckbox } from "@/shared/ui/filter-checkbox"
import { useTicketStore } from "@/entities/ticket/model";

const transferOptions = [
  { label: 'Без пересадок', value: 0 },
  { label: '1 пересадка', value: 1 },
  { label: '2 пересадки', value: 2 },
  { label: '3 пересадки', value: 3 }
];


export function TicketFilter() {
  const {
    selectedTransfer,
    toggleTransfer,
    toggleAllTransfers,
    isAllTransfersSelected,
    toggleCurrency
  } = useTicketStore()
  return (
    <div className="bg-white rounded-md flex lg:flex-col p-4">
      <div className="lg:mb-6 lg:mr-0 mr-6">
        <h2 className="text-lg font-bold mb-4">Валюта</h2>
        <ToggleGroup
          type="single"
          className="justify-stretch"
          variant="outline"
          onValueChange={toggleCurrency}
        >
          <ToggleGroupItem value="RUB" aria-label="Toggle bold">
            RUB
          </ToggleGroupItem>
          <ToggleGroupItem value="USD" aria-label="Toggle italic">
            USD
          </ToggleGroupItem>
          <ToggleGroupItem value="EUR" aria-label="Toggle strikethrough">
            EUR
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">Количество пересадок</h2>
        <div className="flex flex-col gap-y-2">
          <FilterCheckbox
            id='transfer-all'
            checked={isAllTransfersSelected}
            label="Все"
            onCheckedChange={toggleAllTransfers}
          />
          {transferOptions.map(option => {
            return (
              <FilterCheckbox
                key={option.value}
                id={`transfer-${option.value}`}
                checked={selectedTransfer.includes(option.value)}
                label={option.label}
                onCheckedChange={() => toggleTransfer(option.value)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}