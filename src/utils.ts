export const formatCurrency = (value: number | string) => {
  const numberValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numberValue)) {
    return '';
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(numberValue);
};
