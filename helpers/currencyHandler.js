export function convertCurrency(from, to, amount) {
  const rateAEDtoUSD = 0.27

  if (from === to) {
    return `د.إ ${amount.toString()}`
  }

  if (from === 'AED' && to === 'USD') {
    const result = amount * rateAEDtoUSD
    return `$ ${result.toFixed(2).toString()}`
  }

  if (from === 'USD' && to === 'AED') {
    const result = amount / rateAEDtoUSD
    return `د.إ ${result.toFixed(2).toString()}`
  }
  throw new Error('Unsupported currency conversion.')
}
