import React from 'react';
import PropTypes from 'prop-types';
import { Component, ItemWrapper } from './style';
import BackLink from '../../components/BackLink';
import ProductItem from '../../components/ProductItem';
import ErrorBackground from '../../components/ErrorBackground';
import ProductItemGhost from '../../components/ProductItemGhost';
import Title from '../../components/Title';

const ProductPage = ({ product, isLoading, isErrorInResponse }) => {
  const isNeedRenderBackLink = !isLoading && !isErrorInResponse;
  const TitleElement = isNeedRenderBackLink ? BackLink : Title;

  const renderPage = () => {
    const { name, status, img, price, stars, discount } = product;

    return (
      <ItemWrapper>
        <ProductItem
          isInStock={status === 'IN_STOCK'}
          img={img}
          title={name}
          price={price}
          discount={discount}
          rating={stars}
          isDetailPage
        />
      </ItemWrapper>
    )
  }

  const renderTitle = () => {
    switch (true) {
      case isLoading: {
        return 'Пожалуйста, подождите'
      }

      case isErrorInResponse: {
        return 'Произошла ошибка при загрузке данных'
      }

      case !product: {
        return 'Товар не найден'
      }

      default: {
        return product.name
      }
    }
  }

  const renderGhostItem = () => <ItemWrapper><ProductItemGhost isDetailPage /></ItemWrapper>;

  return (
    <Component>
      <TitleElement text={renderTitle()} />
      {isErrorInResponse ? <ErrorBackground /> :
        isLoading ? renderGhostItem() :
          product ? renderPage() : <ErrorBackground />}
    </Component>
  )
}

ProductPage.propTypes = {
  product: PropTypes.object,
  isLoading: PropTypes.bool,
  isErrorInResponse: PropTypes.bool
}

export default ProductPage;
