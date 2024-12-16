export function formatDate(dateString: string): string {
  const months: string[] = [
    'янв',
    'фев',
    'мар',
    'апр',
    'мая',
    'июня',
    'июля',
    'авг',
    'сент',
    'окт',
    'ноя',
    'дек',
  ];

  const days: string[] = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  const [day, month, year] = dateString.split('.');
  const date: Date = new Date(
    2000 + Number(year),
    Number(month) - 1,
    Number(day)
  );

  const formattedDay: string = day;
  const formattedMonth: string = months[date.getMonth()];
  const formattedYear: number = date.getFullYear();
  const dayOfWeek: string = days[date.getDay()];

  return `${formattedDay} ${formattedMonth} ${formattedYear}, ${dayOfWeek}`;
}
