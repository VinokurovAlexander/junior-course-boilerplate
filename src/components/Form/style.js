import styled from 'styled-components';
import { Button as BaseButton } from '../../style';

const Component = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-shrink: 0;
`

const Title = styled.h2`
  width: 100%;
  margin-top: 0;

  font-size: 20px;
  font-weight: 600;
`

const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  width: ${props => props.isShort ? '47%' : '100%'};
  margin-bottom: 15px;

  font-weight: 600;
  cursor: pointer;
`

const Button = styled(BaseButton)`
  margin-top: 24px;
`

export { Component, Title, Label, Button };
