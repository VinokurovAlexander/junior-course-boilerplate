import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-shrink: 0;

  width: 256px;
  margin-right: 48px;
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

const Button = styled.a`
  display: inline-block;

  box-sizing: border-box;
  width: 100%;
  margin-top: 24px;
  padding: 9px 15px;

  border: 1px solid #323c48;
  background-color: transparent;
  color: #323c48;
  text-align: center;
  cursor: pointer;
  transition: opacity ease-in 0.3s;
  outline: none;

  &:hover {
    opacity: 0.7;
  }
`

export { Container, Title, Label, Button };
