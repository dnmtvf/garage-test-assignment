export const resetFilter = () => {
  return {
    type: 'RESET_FILTER',
  };
};

export const changeFilter = (filter) => {
  return {
    type: 'CHANGE_FILTER',
    filter,
  };
};
