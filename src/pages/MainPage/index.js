import React from 'react';
import { withRouter } from 'react-router-dom';
import { splitEvery } from 'csssr-school-utils';
import PropTypes from 'prop-types';
import { Component, Content, ListWrapper } from './style';
import Title from '../../components/Title';
import Sidebar from '../../containers/Sidebar';
import List from '../../components/List';
import ProductsGhost from '../../components/ProductsGhost';
import ErrorBackground from '../../components/ErrorBackground';
import { PRODUCTS_ON_PAGE_COUNT } from '../../constants';
import { getQueryParams } from '../../utils';

export const getProductsByPage = (checkedCategories, productsByPrice, products) => {
  const isMatchesCategory = (product, checkedCategories) =>
    checkedCategories.length === 0 ? true : checkedCategories.includes(product.category);

  const productsByCategories = products.filter(product => isMatchesCategory(product, checkedCategories));
  const productsByFilters = productsByCategories.filter(product => productsByPrice.includes(product))

  return splitEvery(PRODUCTS_ON_PAGE_COUNT, productsByFilters)
}

const MainPage = ({ isLoading, isErrorInResponse, products, location, productsByPrice }) => {
  const { checkedCategories, pageIndex } = getQueryParams(location)
  const productsByPage = getProductsByPage(checkedCategories, productsByPrice, products);
  const pagesCount = productsByPage.length;
  const currentProductsOnPage = productsByPage[pageIndex - 1];

  const isNoProductsAvailable = (products || []).length === 0 || !currentProductsOnPage;

  const renderMainContent = () => (
    <Content>
      <Sidebar />
      <ListWrapper>
        <List products={currentProductsOnPage} pagesCount={pagesCount} />
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
      {isErrorInResponse ? <ErrorBackground /> :
        isLoading ? renderGhostProducts() :
          isNoProductsAvailable ? <ErrorBackground /> : renderMainContent()}
    </Component>
  )
}

MainPage.propTypes = {
  isLoading: PropTypes.bool,
  isErrorInResponse: PropTypes.bool,
  products: PropTypes.array,
  productsByPrice: PropTypes.array
}

export default withRouter(MainPage);
