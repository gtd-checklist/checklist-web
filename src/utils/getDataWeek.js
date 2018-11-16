const getWeekDay = (currentDay, firstDay, indx) => {
  const weekDay = new Date(currentDay.setDate(firstDay + indx));
  return weekDay.getDate();
};

export const getCurrentDayNumber = () => {
  const currentDay = new Date();
  return (currentDay.getDay() - 1);
};

export const getDataWeek = () => {
  const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const currentDay = new Date();
  const firstDay = (currentDay.getDate() - currentDay.getDay()) + 1;
  const weekData = week.map((item, indx) => (
    { name: item, date: getWeekDay(currentDay, firstDay, indx) }));
  return weekData;
};
