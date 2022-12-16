import styled from 'styled-components';
import AnimatePresece from './components/AnimatePresece';
import BasicAnimations from './components/BasicAnimations';
import Drag from './components/Drag';
import Gestures from './components/Gestures';
import Layout from './components/Layout';
import LayoutId from './components/LayoutId';
import MotionValues from './components/MotionValues';
import ShareLayoutCard from './components/ShareLayoutCard';
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
  h2 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
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
      <Layout />
      <LayoutId />
      <ShareLayoutCard />
    </Wrapper>
  );
}

export default App;
