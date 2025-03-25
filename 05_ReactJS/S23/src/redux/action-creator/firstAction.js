export const firstActionCreator = (data) => {
  return {
    type: "FIRST",
    payload: data,
  };
};

export const cityActionCreator = (citydata) => {
  return {
    type: "CITY",
    payload: citydata,
  };
};
