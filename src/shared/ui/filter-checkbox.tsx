import { Checkbox } from "./checkbox";


export function FilterCheckbox({
  id,
  label,
  checked = false,
  onCheckedChange,
}: {
  id: string
  label: string
  checked: boolean
  onCheckedChange: (isChecked: boolean) => void
}) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        // className="data-\[state\=checked\]\:bg-[#2196f3]"
        className="data-[state=checked]:bg-[#2196f3] border-[#2196f3]"
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        {label}
      </label>
    </div>
  )
}