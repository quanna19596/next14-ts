export const getHHMMSSFromSeconds = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(remainingSeconds).padStart(2, '0');

  return `${hh}:${mm}:${ss}`;
};

export const getISODateByTimezone = (date?: Date | null): string => {
  const dateObj = date || new Date();
  const tzoffset = dateObj.getTimezoneOffset() * 60000; //offset in milliseconds
  const localISOTime = new Date(dateObj.getTime() - tzoffset).toISOString().slice(0, -1);
  return localISOTime;
};

export const getFormattedDate = (
  type: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY/MM/DD' | 'YYYY/DD/MM' = 'DD/MM/YYYY',
  dateObj: Date,
  formatTime?: boolean,
  breakLine?: boolean
): string => {
  const date = dateObj || new Date();
  let dateNumber: string | number = date.getDate();
  if (isNaN(dateNumber)) return '';
  let month: string | number = date.getMonth() + 1;
  const year = date.getFullYear();
  if (dateNumber < 10) {
    dateNumber = `0${dateNumber}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  switch (type) {
    case 'DD/MM/YYYY':
      return `${dateNumber}/${month}/${year}${breakLine ? '\n' : ''}${formatTime ? `${breakLine ? '' : ' - '}${time}` : ''}`;
    case 'MM/DD/YYYY':
      return `${month}/${dateNumber}/${year}${breakLine ? '\n' : ''}${formatTime ? `${breakLine ? '' : ' - '}${time}` : ''}`;
    case 'YYYY/DD/MM':
      return `${year}/${dateNumber}/${month}${breakLine ? '\n' : ''}${formatTime ? `${breakLine ? '' : ' - '}${time}` : ''}`;
    case 'YYYY/MM/DD':
      return `${year}/${month}/${dateNumber}${breakLine ? '\n' : ''}${formatTime ? `${breakLine ? '' : ' - '}${time}` : ''}`;
    default:
      return `${dateNumber}/${month}/${year}${breakLine ? '\n' : ''}${formatTime ? `${breakLine ? '' : ' - '}${time}` : ''}`;
  }
};
