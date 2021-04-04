import React from 'react';
import { Component, Content, ListWrapper } from './style';
import Title from '../../components/Title';
import Sidebar from '../../containers/Sidebar';
import List from '../../containers/List';
import ProductsGhost from '../../components/ProductsGhost';
import Background from '../../components/Background';

const MainPage = ({ isLoading, responseStatus, products }) => {
  const isErrorInResponse = responseStatus === 'ERROR';
  const isNoProductsAvailable = (products || []).length === 0;

  const renderMainContent = () => (
    <Content>
      <Sidebar />
      <ListWrapper>
        <List />
      </ListWrapper>
    </Content>
  )

  const renderGhostProducts = () => <ListWrapper><ProductsGhost /></ListWrapper>;

  const renderTitleText = () => {
    switch (true) {
      case isErrorInResponse: {
        return 'Возникла ошибка при загрузке данных'
      }

      case isLoading: {
        return 'Список товаров'
      }

      case isNoProductsAvailable: {
        return 'Товары не найдены'
      }

      default: {
        return 'Список товаров'
      }
    }
  }

  return (
    <Component>
      <Title text={renderTitleText()} />
      {isErrorInResponse ? <Background /> : isLoading ? renderGhostProducts() : renderMainContent()}
    </Component>
  )
}

export default MainPage;
