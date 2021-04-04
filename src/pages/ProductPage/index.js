import React from 'react';
import toInt from 'csssr-school-utils/lib/toInt';
import { withRouter } from 'react-router-dom';
import { Component } from './style';
import BackLink from '../../components/BackLink';
import ProductItem from '../../components/ProductItem';
import Background from '../../components/Background';

const getProductById = (id, products) => products.filter(product => product.id === id);

const ProductPage = ({ location: { pathname }, products }) => {
  const id = toInt(pathname);
  const [product] = getProductById(id, products);

  const renderPage = product => {
    const { name, status, img, price, stars, discount } = product;

    return (
      <>
        <ProductItem
          isInStock={status === 'IN_STOCK'}
          img={img}
          title={name}
          price={price}
          discount={discount}
          rating={stars}
          isDetailPage
        />
      </>
    )
  }

  return (
    <Component>
      <BackLink text={product ? product.name : 'Товар не найден'} />
      {product ? renderPage(product) : <Background />}
    </Component>
  )
}

export default withRouter(ProductPage);
