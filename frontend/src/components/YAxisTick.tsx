import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type YAxisTickProps = {
  yTrasnlate: number;
  yTick: number;
};

const G = styled(motion.g)``;
const Line = styled.line``;
const Text = styled.text`
  font-size: 14px;
`;

const YAxisTick: React.FC<YAxisTickProps> = ({ yTrasnlate, yTick }) => {
  const yTranslateRef = useRef(0);

  useEffect(() => {
    yTranslateRef.current = yTrasnlate;
  }, [yTrasnlate]);
  return (
    <G
      initial={{ translateY: yTranslateRef.current, opacity: 0 }}
      animate={{ translateY: yTrasnlate, opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      <Line x2='-10' stroke='black' />
      <Text x='-50' dominantBaseline='middle'>
        {yTick}M
      </Text>
    </G>
  );
};

export default YAxisTick;
