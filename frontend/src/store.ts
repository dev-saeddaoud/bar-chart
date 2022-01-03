import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import barChartReducer from './reducers/barChartReducer';

const middleware = [thunk];

const reducer = combineReducers({
  barChart: barChartReducer,
});

const store: Store<
  {
    barChart: PopulationState;
  },
  PopulationAction
> = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
