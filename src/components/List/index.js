import React from 'react';
import PropTypes from 'prop-types';
import Products from '../Products';
import Navigation from '../Navigation';
import Stub from '../Stub';
import { Component } from './style';

const List = ({ activePageIndex, productsByPage }) => {
  const currentProductsOnPage = productsByPage[activePageIndex - 1];

  const renderProducts = () => {
    const pagesCount = productsByPage.length;
    const isRenderNavigation = currentProductsOnPage.length !== 0;

    return (
      <>
        <Products products={currentProductsOnPage}/>
        {isRenderNavigation && (
          <Navigation pagesCount={pagesCount} activePageIndex={activePageIndex}/>
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
  activePageIndex: PropTypes.number.isRequired,
  productsByPage: PropTypes.array.isRequired
}

export default List;
