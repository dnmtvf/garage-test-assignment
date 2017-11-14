const getDateMonthName = (dateIn) => {
  const numDate = new Date(dateIn);
  const monthNames = ['января', 'февраля', 'марта', 'апреля',
    'мая', 'июня', 'июля', 'августа',
    'сентября', 'октября', 'ноября', 'декабря'];

  return `${numDate.getDate()} ${monthNames[numDate.getMonth()]} ${numDate.getFullYear()}`;
};

export default getDateMonthName;
