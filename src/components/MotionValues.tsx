import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
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
  color: #df5660;
`;

function MotionValues() {
  const y = useMotionValue(0);
  const transValue = useTransform(y, [-400, 0, 400], [2, 1, 0.1]);
  const rotateZ = useTransform(y, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    y,
    [-800, 800],
    [
      'linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))',
      'linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))',
    ],
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  //   useEffect(() => {
  //     return y.onChange(() => console.log(y.get()));
  //   }, [y]);
  return (
    <>
      <motion.button
        onClick={() => y.set(200)}
        style={{
          background: gradient,
          width: '100px',
          height: '100px',
          scale,
          position: 'fixed',
          transformOrigin: 'top left',
          top: 0,
          left: 0,
        }}
      >
        click
      </motion.button>
      <Box style={{ y, scale: transValue, rotateZ }} drag="y" dragSnapToOrigin>
        {`Motion Value ${y.get()}`}
      </Box>
    </>
  );
}

export default MotionValues;
