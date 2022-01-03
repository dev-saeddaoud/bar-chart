import styled from 'styled-components';
import XAxisTick from './XAxisTick';

type XAxisProps = {
  innerHeight: number;
  innerWidth: number;
  xScale: d3.ScaleBand<string>;
  countries: string[];
};

const G = styled.g``;
const Path = styled.path``;

const XAxis = ({ innerHeight, innerWidth, xScale, countries }: XAxisProps) => {
  return (
    <G transform={`translate(0, ${innerHeight})`}>
      <Path d={`M -10 0 H ${innerWidth + 20}`} stroke='black' />
      {countries.map((item) => (
        <XAxisTick
          key={item}
          xTranslate={xScale(item)! + xScale.bandwidth() / 2}
          item={item}
        />
      ))}
    </G>
  );
};

export default XAxis;
