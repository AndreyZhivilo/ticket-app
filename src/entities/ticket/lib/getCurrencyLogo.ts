export function getCurrencyLogo(currency: 'RU' | 'USD' | 'EUR') {
  if (currency === 'USD') return '$';
  if (currency === 'EUR') return '€';
  return '₽';
}
