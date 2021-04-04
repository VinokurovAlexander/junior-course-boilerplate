import styled from 'styled-components';

const Component = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  min-height: 640px;
  margin: 0;
  padding: 0;

  list-style: none;
`

const ListItem = styled.li`
  width: calc(33% - 18px);
  margin-right: 30px;
  margin-bottom: 56px;

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:nth-child(n + 3) {
    margin-bottom: 0;
  }
`

export { Component, ListItem };
