import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { splitEvery } from 'csssr-school-utils';
import Products from '../Products';
import Navigation from '../Navigation';
import Stub from '../Stub';
import { Component } from './style';
import products from '../../products.json';
const queryString = require('query-string');

const DEFAULT_ACTIVE_PAGE_INDEX = 1;
const DEFAULT_CHECKED_CATEGORIES = [];
const PRODUCTS_ON_PAGE_COUNT = 6;

const isMatchesCategory = (product, checkedCategories) =>
  checkedCategories.length === 0 ? true : checkedCategories.includes(product.category);

export const getProductsByPage = (checkedCategories, productsByPrice) => {
  const productsByCategories = products.filter(product => isMatchesCategory(product, checkedCategories));
  const productsByFilters = productsByCategories.filter(product => productsByPrice.includes(product))

  return splitEvery(PRODUCTS_ON_PAGE_COUNT, productsByFilters)
}

const List = ({ productsByPrice, location }) => {
  const query = queryString.parse(location.search,
    {
      arrayFormat: 'comma',
      parseNumbers: true
    }
  );
  const pageIndex = query.page || DEFAULT_ACTIVE_PAGE_INDEX;
  const checkedCategories = query.categories ||  DEFAULT_CHECKED_CATEGORIES;
  const productsByPage = getProductsByPage(checkedCategories, productsByPrice);
  const currentProductsOnPage = productsByPage[pageIndex - 1];

  const renderProducts = () => {
    const pagesCount = productsByPage.length;
    const isRenderNavigation = currentProductsOnPage.length !== 0;

    return (
      <>
        <Products products={currentProductsOnPage}/>
        {isRenderNavigation && (
          <Navigation pagesCount={pagesCount} activePageIndex={pageIndex}/>
        )}
      </>
    )
  }

  return (
    <Component>
      {currentProductsOnPage ? renderProducts() : <Stub />}
    </Component>
  )
};

List.propTypes = {
  productsByPrice: PropTypes.array.isRequired
}

export default withRouter(List);
