import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Products from '../Products';
import Navigation from '../Navigation';
import {getQueryParams} from '../../utils';

const List = ({ products, pagesCount, location }) => {
  const isRenderNavigation = products.length !== 0;
  const { pageIndex } = getQueryParams(location);

  return (
    <div>
      <Products products={products} />
      {isRenderNavigation && (
        <Navigation pagesCount={pagesCount} activePageIndex={pageIndex} />
      )}
    </div>
  )
};

List.propTypes = {
  products: PropTypes.array.isRequired,
  pagesCount: PropTypes.number.isRequired,
}

export default withRouter(List);
