import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;

  margin-right: 15px;
  padding: 8px 16px;

  background-color: ${props => props.checked ? '#323c48' : '#fff'};
  color: ${props => props.checked ? '#fff' : '#7e8fa4'};
  font-size: 14px;
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid #7e8fa4;
  transition: opacity ease-in 0.3s;


  &:hover {
    opacity: 0.5;
  }
`

const Input = styled.input`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
`

const Text = styled.p`
  margin: 0;

  &:first-letter {
    text-transform: uppercase;
  }
`

export { Label, Input, Text }
