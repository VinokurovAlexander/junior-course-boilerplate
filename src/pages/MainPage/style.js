import styled from 'styled-components';
import { Component as Form } from '../../components/Form/style';
import { Component as Cart } from '../../components/Cart/style';
import { Component as Title } from '../../components/Title/style';

const Component = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 1346px;
  margin: 0 auto;
  margin-top: 30px;
  padding-left: 30px;
  padding-right: 30px;

  ${Form} {
    width: 256px;
    margin-right: 48px;
  }

  ${Cart} {
    width: 256px;
    margin-left: 48px;
  }

  ${Title} {
    margin-bottom: 56px;
  }
`

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  width: 100%;
`

const ListWrapper = styled.div`
  width: 736px;
`

export { Component, Content, ListWrapper }
