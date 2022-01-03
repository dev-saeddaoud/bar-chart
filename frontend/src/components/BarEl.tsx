import styled from 'styled-components';
import { motion, animate } from 'framer-motion';
import { deleteBar } from '../actions/barChartActions';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../app/hooks';

type BarProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  innerHeight: number;
  item: PopulationItem;
};

const RECT = styled(motion.rect)`
  fill: var(--bar-color);
`;
const TEXT = styled(motion.text)`
  fill: var(--text-color);
  font-size: 14px;
`;

const BarEl = ({ x, y, width, height, innerHeight, item }: BarProps) => {
  const [popValue, setPopValue] = useState('0');

  const barXRef = useRef(x);
  const barYRef = useRef(innerHeight);
  const barWidthRef = useRef(width);
  const barHeightRef = useRef(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    barHeightRef.current = height;
    barWidthRef.current = width;
    barXRef.current = x;
    barYRef.current = y;
  }, [x, y, width, height]);

  useEffect(() => {
    const controls = animate(0, item.population, {
      duration: 1,
      onUpdate(value) {
        setPopValue(value.toFixed(0));
      },
    });
    return () => controls.stop();
  }, [item.population]);

  const handleDelete = () => {
    dispatch(deleteBar(item));
  };

  return (
    <>
      <RECT
        initial={{
          y: barYRef.current,
          height: barHeightRef.current,
          x: barXRef.current,
          width: barWidthRef.current,
        }}
        animate={{ y, height, x, width }}
        transition={{ duration: 1 }}
        stroke='black'
        strokeWidth='2'
        onClick={handleDelete}
      />
      <TEXT
        textAnchor='middle'
        initial={{
          y: barYRef.current + 20,
          height: barHeightRef.current,
          x: barXRef.current + barWidthRef.current / 2,
          width: barWidthRef.current,
        }}
        animate={{ y: y + 20, height, x: x + width / 2, width }}
        transition={{ duration: 1 }}
      >
        {popValue}M
      </TEXT>
    </>
  );
};

export default BarEl;
