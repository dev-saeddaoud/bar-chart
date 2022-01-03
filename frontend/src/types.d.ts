interface PopulationItem {
  id: string;
  country: string;
  population: number;
}

interface XAxisTicks {
  [key: string]: { xTranslate: number };
}

interface BarCoords {
  [key: string]: { x: number; y: number; width: number; height: number };
}

type XAxisTicksState = {
  xAxisTicksCoords: XAxisTicks;
};

type BarCoordsState = {
  barCoords: BarCoords;
};

type XAXisTicksAction = {
  type: string;
  payload: any;
};

type BarCoordsAction = {
  type: string;
  payload: any;
};

type PopulationState = {
  data: PopulationItem[];
};

type PopulationAction = {
  type: string;
  payload?: PopulationItem;
};

type PopulationDispatch = (args: PopulationAction) => PopulationAction;

type AnimateObj = {
  [key: string]: number;
};
