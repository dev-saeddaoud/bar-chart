import * as d3 from 'd3';
import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';

import BarEl from './BarEl';
import XAxis from './XAxis';
import YAxis from './YAxis';

const SVG = styled.svg``;
const G = styled.g``;

const BarChart: React.FC = () => {
  const data = useAppSelector((state) => state.barChart.data);

  // const data = useSelector(
  //   (state: { barChart: PopulationState }) => state.barChart.data
  // );

  const svgWidth = 600;
  const svgHeight = 400;
  const margins = { top: 50, right: 50, bottom: 100, left: 100 };
  const innerWidth = svgWidth - margins.left - margins.right;
  const innerHeight = svgHeight - margins.top - margins.bottom;

  const maxPopulation = d3.max(data, (item) => item.population) || 0;
  const countries = data.map((item) => item.country);

  const xScale = d3
    .scaleBand()
    .domain(countries)
    .range([0, innerWidth])
    .padding(0.15);

  const yScale = d3
    .scaleLinear()
    .domain([0, maxPopulation])
    .range([innerHeight, 0]);
  return (
    <SVG width={svgWidth} height={svgHeight}>
      <G transform={`translate(${margins.left}, ${margins.top})`}>
        {data.map((item) => {
          return (
            <BarEl
              key={item.id}
              x={xScale(item.country)!}
              y={yScale(item.population)}
              width={xScale.bandwidth()}
              height={innerHeight - yScale(item.population)}
              innerHeight={innerHeight}
              item={item}
            />
          );
        })}
        {/* x-axis */}
        <XAxis
          innerHeight={innerHeight}
          innerWidth={innerWidth}
          xScale={xScale}
          countries={countries}
        />
        {/* y-axis */}
        <YAxis innerHeight={innerHeight} yScale={yScale} />
      </G>
    </SVG>
  );
};

export default BarChart;
