import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Container = styled.div`
  position: relative;
  width: 200;
  margin: 10vh auto;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 0;
  left: calc(50% - 200px);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};

function AnimatePresece() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);

  return (
    <Container>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
            transition={{ duration: 0.5 }}
          />
        ) : null}
      </AnimatePresence>
    </Container>
  );
}

export default AnimatePresece;
