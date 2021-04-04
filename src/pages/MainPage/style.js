import styled from 'styled-components';
import { Component as Form } from '../../components/Form/styles';

const Component = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 1346px;
  margin: 0 auto;
  margin-top: 5%;
  padding-left: 30px;
  padding-right: 30px;

  ${Form} {
    align-self: flex-start;
  }
`

const Content = styled.div`
  display: flex;
`

const ListWrapper = styled.div`
  width: 736px;
  margin: 0 auto;
`

export { Component, Content, ListWrapper }
