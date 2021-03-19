import React from 'react';
import { Component, Content } from './style';
import Title from '../../components/Title';
import Sidebar from '../../containers/Sidebar';
import List from '../../containers/List';

const MainPage = () => (
  <Component>
    <Title text='Список товаров' />
    <Content>
      <Sidebar />
      <List />
    </Content>
  </Component>
)

export default MainPage;
