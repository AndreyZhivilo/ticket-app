export function formatTransfers(count: number): string {
  if (count === 0) return 'Без пересадок';
  if (count % 10 === 1 && count % 100 !== 11) {
    return `${count} пересадка`;
  } else if (
    [2, 3, 4].includes(count % 10) &&
    ![12, 13, 14].includes(count % 100)
  ) {
    return `${count} пересадки`;
  } else {
    return `${count} пересадок`;
  }
}
