const getWeekDay = (currentDay, firstDay, indx) => {
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
  const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const currentDay = new Date();
  const firstDay = (currentDay.getDate() - getCurrentDayNumber());
  const weekData = week.map((item, indx) => (
    { name: item, date: getWeekDay(currentDay, firstDay, indx) }));
  return weekData;
};

export const getMonth = () => {
  const day = new Date();
  const month = day.toLocaleString('ru', { month: 'long' });
  return month;
};

export const getYear = () => {
  const day = new Date();
  const year = day.getFullYear();
  return year.toString();
};
