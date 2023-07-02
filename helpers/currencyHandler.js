export function convertCurrency(from, to, amount) {
  const rateAEDtoUSD = 0.27

  if (from === to) {
    return `${amount.toString()} AED`
  }

  if (from === 'AED' && to === 'USD') {
    const result = amount * rateAEDtoUSD
    return `$ ${result.toFixed(2).toString()}`
  }

  if (from === 'USD' && to === 'AED') {
    const result = amount / rateAEDtoUSD
    return `${result.toFixed(2).toString()} AED`
  }
  throw new Error('Unsupported currency conversion.')
}
