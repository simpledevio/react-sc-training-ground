import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

function HelloWorld() {
  return (
    <Title>
      Hello World!
    </Title>
);
}

export default HelloWorld;
