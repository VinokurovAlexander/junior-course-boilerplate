import React from 'react';
import toInt from 'csssr-school-utils/lib/toInt';
import { withRouter } from 'react-router-dom';
import { Component } from './style';
import BackLink from '../../components/BackLink';
import ProductItem from '../../components/ProductItem';
import EmptyPage from '../../components/EmptyPage';
import products from '../../products.json';

const getProductById = id => products.filter(product => product.id === id);

const ProductPage = ({ location: { pathname }}) => {
  const id = toInt(pathname);
  const [product] = getProductById(id);

  const renderPage = product => {
    const { title, isInStock, img, price, subPriceContent, maxRating, rating } = product;

    return (
      <>
        <ProductItem
          isInStock={isInStock}
          img={img}
          title={title}
          price={price}
          subPriceContent={subPriceContent}
          maxRating={maxRating}
          rating={rating}
          isDetailPage
        />
      </>
    )
  }

  return (
    <Component>
      <BackLink text={product ? product.name : 'Товар не найден'} />
      {product ? renderPage(product) : <EmptyPage />}
    </Component>
  )
}

export default withRouter(ProductPage);
