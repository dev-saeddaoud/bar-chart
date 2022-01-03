import * as actionTypes from '../constants/barChartConstants';

export const deleteBar = (item: PopulationItem) => {
  const action: PopulationAction = {
    type: actionTypes.DELETE_BAR,
    payload: item,
  };
  return action;
};

export const addBar = (item: PopulationItem) => {
  const action: PopulationAction = {
    type: actionTypes.ADD_BAR,
    payload: item,
  };
  return action;
};

export const arrangeBars = () => {
  const action: PopulationAction = {
    type: actionTypes.ARRANGE_BARS,
  };
  return action;
};
