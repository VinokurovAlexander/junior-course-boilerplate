import React from 'react';
import { withRouter } from 'react-router-dom';
import { Component } from './style';
import CategoryButton from '../CategoryButton';
import products from '../../products.json';
const queryString = require('query-string');

const getAllCategories = () => {
  const allProductsCategories = products.map(product => product.category);

  return Array.from(new Set(allProductsCategories));
}

const categories = getAllCategories();

const Categories = ({ location }) => {
  const renderCategoryButtons = () => {
    const query = queryString.parse(location.search,
      {
        arrayFormat: 'comma',
        parseNumbers: true
      }
    );
    const checkedCategories = query.categories || [];

    return categories.map((category, index) => {
      const isCategoryChecked = checkedCategories.includes(category);

      return <CategoryButton text={category} checked={isCategoryChecked} key={index} />
    })
  }

  return (
    <Component>
      {renderCategoryButtons()}
    </Component>
  )
}

export default withRouter(Categories);
