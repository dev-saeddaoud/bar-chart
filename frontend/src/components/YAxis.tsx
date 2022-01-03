import styled from 'styled-components';
import YAxisTick from './YAxisTick';

type YAxisProps = {
  innerHeight: number;
  yScale: d3.ScaleLinear<number, number, never>;
};

const G = styled.g``;
const Path = styled.path``;

const YAxis = ({ innerHeight, yScale }: YAxisProps) => {
  return (
    <G>
      <Path d={`M 0 -10 V ${innerHeight + 20}`} stroke='black' />
      {yScale.ticks().map((item) => (
        <YAxisTick yTrasnlate={yScale(item)} yTick={item} key={item} />
      ))}
    </G>
  );
};

export default YAxis;
