import styled from 'styled-components';
import { Component as Products} from '../../components/Products/style';
import { Component as Cart } from '../../components/Cart/style';

const Content = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  max-width: 1346px;
  padding-left: 30px;
  padding-right: 30px;

  ${Products} {
    width: 736px;
  }

  ${Cart} {
    width: 256px;
    margin-left: 48px;
  }
`

export { Content };
