import dayjs from 'dayjs';

const START_DATE_FORMAT = 'YYYY-MM-DD 00:00:00.000';
const END_DATE_FORMAT = 'YYYY-MM-DD 23:59:59.000';

export class DateTimeHelper {
  static getStartOfTheWeek(): string {
    const startOfTheCurrentWeek = dayjs().day(0).format(START_DATE_FORMAT);
    return startOfTheCurrentWeek;
  }

  static getEndOfTheWeek(): string {
    const endOfTheCurrentWeek = dayjs().day(6).format(END_DATE_FORMAT);
    return endOfTheCurrentWeek;
  }

  static getStartOfTheMonth(): string {
    const startOfTheCurrentMonth = dayjs().startOf('month').format(START_DATE_FORMAT);
    return startOfTheCurrentMonth;
  }
  static getEndOfTheMonth(): string {
    const endOfTheCurrentMonth = dayjs().endOf('month').format(END_DATE_FORMAT);
    return endOfTheCurrentMonth;
  }
}
