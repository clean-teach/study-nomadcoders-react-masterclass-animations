import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  position: relative;
  width: 50%;
  margin: auto;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

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

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: '100px' },
  drag: { backgroundColor: 'rgb(46, 204, 113)', transition: { duration: 10 } },
};

function Gestures() {
  return (
    <Container>
      <h2>Gestures</h2>
      <Box
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
        whileDrag="drag"
        drag
      >
        Gestures
      </Box>
    </Container>
  );
}

export default Gestures;
