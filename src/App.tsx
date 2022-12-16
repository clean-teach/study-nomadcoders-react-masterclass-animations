import styled from 'styled-components';
import BasicAnimations from './components/BasicAnimations';
import Gestures from './components/Gestures';
import Variants from './components/Variants';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
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
    </Wrapper>
  );
}

export default App;
