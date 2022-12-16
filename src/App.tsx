import styled from 'styled-components';
import BasicAnimations from './components/BasicAnimations';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <BasicAnimations />
    </Wrapper>
  );
}

export default App;
