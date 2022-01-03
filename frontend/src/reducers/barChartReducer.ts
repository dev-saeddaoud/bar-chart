import {
  ADD_BAR,
  ARRANGE_BARS,
  DELETE_BAR,
} from '../constants/barChartConstants';

import { v4 as uuidv4 } from 'uuid';

const initialState: PopulationState = {
  data: [
    { id: uuidv4(), country: 'Germany', population: 85 },
    { id: uuidv4(), country: 'Russia', population: 145 },
    { id: uuidv4(), country: 'USA', population: 350 },
  ],
};

const barChartReducer = (
  state = initialState,
  action: PopulationAction
): PopulationState => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BAR:
      return {
        ...state,
        data: [payload!, ...state.data],
      };
    case DELETE_BAR:
      return {
        ...state,
        data: [...state.data.filter((item) => item.id !== payload!.id)],
      };
    case ARRANGE_BARS:
      return {
        ...state,
        data: [
          ...state.data.sort((a, b) => {
            if (a.population > b.population) {
              return -1;
            } else if (a.population < b.population) {
              return 1;
            } else {
              return 0;
            }
          }),
        ],
      };
    default:
      return state;
  }
};

export default barChartReducer;
