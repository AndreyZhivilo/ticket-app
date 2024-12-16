const USD_COURSE = 0.009668;
const EUR_COURSE = 0.009173;

export function convertCurrency(
  priceInRub: number,
  currency: 'RU' | 'EUR' | 'USD'
) {
  if (currency === 'USD') return priceInRub * USD_COURSE;
  if (currency === 'EUR') return priceInRub * EUR_COURSE;
  return priceInRub;
}
