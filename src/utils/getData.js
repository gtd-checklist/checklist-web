import { week } from './week';

const getWeekDay = (firstDay, indx) => {
  const currentDay = new Date();
  const weekDay = new Date(currentDay.setDate(firstDay + indx));
  return weekDay;
};

export const getCurrentDayNumber = () => {
  const currentDay = new Date();
  const dayNumber = currentDay.getDay();
  const currentDayNumber = dayNumber === 0 ? 6 : (dayNumber - 1);
  return (currentDayNumber);
};

export const getWeekDate = (day) => {
  const currentDay = day ? new Date(day) : new Date();
  const firstDay = day ? currentDay.getDate() : (currentDay.getDate() - getCurrentDayNumber());
  const weekDate = week.map((item, indx) => {
    const weekDay = getWeekDay(firstDay, indx);
    return { name: item, date: weekDay.getDate(), fullDate: weekDay };
  });
  return weekDate;
};

export const getWeekNumber = (day) => {
  const currentDay = new Date(day);
  const weekNumber = Math.floor(currentDay.getDate() / 7) + 1;
  return weekNumber;
};

export const getMonth = (type) => {
  const currentDay = new Date();
  const month = type === 'number' ? (currentDay.getMonth() + 1) : currentDay.toLocaleString('ru', { month: 'long' });
  return month;
};

export const getYear = () => {
  const currentDay = new Date();
  const year = currentDay.getFullYear();
  return year.toString();
};

export const getFullDate = (date) => {
  const currentDate = new Date(date);
  return currentDate.toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' });
};
