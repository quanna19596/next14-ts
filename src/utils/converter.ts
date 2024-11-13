export const convertNumberToVietnameseCurrency = (n: number, separator?: string, hideUnit?: boolean): string => {
  return n
    .toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    .replace('VND', hideUnit ? '' : 'đ')
    .replaceAll('.', `${separator || '.'}`)
    .trim();
};
