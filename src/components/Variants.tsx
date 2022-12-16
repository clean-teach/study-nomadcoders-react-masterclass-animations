import styled from 'styled-components';
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: 'spring',
      delay: 2,
      bounce: 0.5,
      delayChildren: 2.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function Variants() {
  return (
    <Box variants={boxVariants} initial="start" animate="end">
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
    </Box>
  );
}

export default Variants;
