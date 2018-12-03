import { week } from './week';

const getWeekDay = (firstDay, indx) => {
  const currentDay = new Date();
  const weekDay = new Date(currentDay.setDate(firstDay + indx));
  return weekDay.getDate();
};

export const getCurrentDayNumber = () => {
  const currentDay = new Date();
  const dayNumber = currentDay.getDay();
  const currentDayNumber = dayNumber === 0 ? 6 : (dayNumber - 1);
  return (currentDayNumber);
};

export const getDataWeek = () => {
  const currentDay = new Date();
  const firstDay = (currentDay.getDate() - getCurrentDayNumber());
  const weekDate = week.map((item, indx) => (
    { name: item, date: getWeekDay(firstDay, indx) }));
  return weekDate;
};

export const getMonth = () => {
  const currentDay = new Date();
  const month = currentDay.toLocaleString('ru', { month: 'long' });
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
