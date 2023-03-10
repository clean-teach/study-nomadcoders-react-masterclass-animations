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

const Svg = styled.svg`
  width: 500px;
  height: 500px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  start: { pathLength: 0, fill: 'rgba(255, 255, 255, 0)' },
  end: {
    fill: 'rgba(255, 255, 255, 1)',
    pathLength: 1,
  },
};

function SVGAnimation() {
  return (
    <Container>
      <h2>SVG Animation</h2>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 560">
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 5 },
            fill: { duration: 1, delay: 3 },
          }}
          d="M476.5,8.75c-151.703,0-267.75,115.172-267.75,266.875c0,121.297,76.344,225.094,185.391,261.625
          c14,2.516,18.922-6.125,18.922-13.234c0-6.781-0.328-44.188-0.328-67.156c0,0-76.563,16.406-92.641-32.594
          c0,0-12.469-31.828-30.406-40.031c0,0-25.047-17.172,1.75-16.844c0,0,27.234,2.188,42.219,28.219
          c23.953,42.219,64.094,30.078,79.734,22.859c2.516-17.5,9.625-29.641,17.5-36.859c-61.141-6.781-122.828-15.641-122.828-120.859
          c0-30.078,8.313-45.172,25.813-64.422c-2.844-7.109-12.141-36.422,2.844-74.266c22.859-7.109,75.469,29.531,75.469,29.531
          c21.875-6.125,45.391-9.297,68.688-9.297s46.813,3.172,68.688,9.297c0,0,52.609-36.75,75.469-29.531
          c14.984,37.953,5.688,67.156,2.844,74.266c17.5,19.359,28.219,34.453,28.219,64.422c0,105.547-64.422,113.969-125.563,120.859
          c10.063,8.641,18.594,25.047,18.594,50.75c0,36.859-0.328,82.469-0.328,91.438c0,7.109,5.031,15.75,18.922,13.234
          C677.094,500.719,751.25,396.922,751.25,275.625C751.25,123.922,628.203,8.75,476.5,8.75z"
        />
      </Svg>
    </Container>
  );
}

export default SVGAnimation;
