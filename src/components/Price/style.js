import styled from 'styled-components';

const Component = styled.div`
  font-size: ${props => props.isSmall ? '12px' : '20px'};
  line-height: ${props => props.isSmall ? '18px' : '24px'};
`

const Value = styled.span`
  font-weight: 600;
`

export { Component, Value };
