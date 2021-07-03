import dayjs from 'dayjs';

export class DateTimeHelper {
  static getStartOfTheWeek(): string {
    const startOfTheCurrentWeek = dayjs().day(0).format('YYYY-MM-DD 00:00:000');
    return startOfTheCurrentWeek;
  }
  static getEndOfTheWeek(): string {
    const endOfTheCurrentWeek = dayjs().day(6).format('YYYY-MM-DD 23:59:999');
    return endOfTheCurrentWeek;
  }
}
