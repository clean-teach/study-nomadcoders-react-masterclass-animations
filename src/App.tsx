import styled from 'styled-components';
import BasicAnimations from './components/BasicAnimations';
import Drag from './components/Drag';
import Gestures from './components/Gestures';
import MotionValues from './components/MotionValues';
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
    </Wrapper>
  );
}

export default App;
