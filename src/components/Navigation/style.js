import styled from 'styled-components';
import { Component as PageLink } from  '../PageLink/style';

const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;

  ${PageLink} {
    margin-left: 2px;
    margin-right: 2px;
  }


  ${PageLink}:first-child {
    margin-right: 16px;
  }

  ${PageLink}:last-child {
    margin-left: 16px;
  }
`;


export { Component };
