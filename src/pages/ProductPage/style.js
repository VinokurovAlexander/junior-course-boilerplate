import styled from 'styled-components';
import { Component as Title } from '../../components/BackLink/style';

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 80px);
  padding-top: 80px;

  ${Title} {
    margin-bottom: 56px;
  }
`;

export { Component };
