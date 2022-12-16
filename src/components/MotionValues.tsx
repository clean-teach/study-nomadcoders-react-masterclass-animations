import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

function MotionValues() {
  const y = useMotionValue(0);
  const transValue = useTransform(y, [-400, 0, 400], [2, 1, 0.1]);
  useEffect(() => {
    return y.onChange(() => console.log(y.get()));
  }, [y]);
  return (
    <>
      <button onClick={() => y.set(200)}>click</button>
      <Box style={{ y, scale: transValue }} drag="y" dragSnapToOrigin>
        Motion Value
      </Box>
    </>
  );
}

export default MotionValues;
