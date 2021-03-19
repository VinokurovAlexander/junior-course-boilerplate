import styled from 'styled-components';
import { Component as Link } from  '../Link/style';

const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;

  ${Link} {
    margin-left: 2px;
    margin-right: 2px;
  }


  ${Link}:first-child {
    margin-right: 16px;
  }

  ${Link}:last-child {
    margin-left: 16px;
  }
`;


export { Component };
