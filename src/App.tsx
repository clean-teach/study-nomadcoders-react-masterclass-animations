import styled from 'styled-components';
import AnimatePresece from './components/AnimatePresece';
import BasicAnimations from './components/BasicAnimations';
import Drag from './components/Drag';
import Gestures from './components/Gestures';
import MotionValues from './components/MotionValues';
import Slider from './components/Slider';
import SVGAnimation from './components/SVGAnimation';
import Variants from './components/Variants';

const Wrapper = styled.div`
  display: flex;
  height: 200vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & > * {
    margin: 1rem;
  }
`;

function App() {
  return (
    <Wrapper>
      <BasicAnimations />
      <Variants />
      <Gestures />
      <Drag />
      <MotionValues />
      <SVGAnimation />
      <AnimatePresece />
      <Slider />
    </Wrapper>
  );
}

export default App;
