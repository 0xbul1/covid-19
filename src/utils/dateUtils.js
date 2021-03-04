import dayjs from 'dayjs'
export const DEFAULT_FORMAT = 'yyyy-MM-dd';
export const FORMAT_DATETIME = 'yyyy-MM-dd HH:mm:ss';
export const FORMAT_STARTDATE = 'yyyy-MM-dd 00:00:00';
export const FORMAT_ONHOUR = 'yyyy-MM-dd HH:00:00';
export const FORMAT_ENDDATE = 'yyyy-MM-dd 23:59:59';
export const FORMAT_FULL_DATETIME = 'YYYY年MM月DD日 HH时mm分ss秒';
export const FORMAT_FULL_DATE = 'yyyy年MM月dd日';
export const FORMAT_MONTH_DAY = 'MM月dd日';
export const DEFAULT_FORMAT_DOT = 'yyyy.MM.dd';

export function formatFullDateTime(date, format = FORMAT_FULL_DATETIME) {
  return dayjs(date).format(format);
}