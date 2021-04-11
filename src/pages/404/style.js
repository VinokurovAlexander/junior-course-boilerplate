import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;

  height: 100vh;
`

const Title = styled.h1`
  margin: 0;

  font-size: 100px;
  font-weight: 300;
`

const Image = styled.img`
  margin-top: 100px;
  margin-bottom: 50px;
`;

export { Component, Title, Image };
