import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
  font-size: 1.5rem;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  border-radius: 25px;
  height: 50px;
  width: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Layout() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Container onClick={toggleClicked}>
      <h2>layout animation</h2>
      <Box
        style={{
          justifyContent: clicked ? 'center' : 'flex-start',
          alignItems: clicked ? 'center' : 'flex-start',
        }}
      >
        <Circle layout />
      </Box>
    </Container>
  );
}

export default Layout;
