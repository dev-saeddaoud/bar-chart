import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type XAxisTickProps = {
  xTranslate: number;
  item: string;
};

const G = styled(motion.g)``;
const Line = styled.line``;
const Text = styled.text`
  font-size: 14px;
`;

const XAxisTick: React.FC<XAxisTickProps> = ({ xTranslate, item }) => {
  const xTranslateRef = useRef(0);

  useEffect(() => {
    xTranslateRef.current = xTranslate;
  }, [xTranslate]);

  return (
    <G
      initial={{ translateX: xTranslateRef.current, opacity: 0 }}
      animate={{ translateX: xTranslate, opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      <Line y2='10' stroke='black' />
      <Text textAnchor='end' transform='rotate(-45)' y='20' x='-10'>
        {item}
      </Text>
    </G>
  );
};

export default XAxisTick;
