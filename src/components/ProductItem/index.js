import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Component, InStock, Image, Title, Rating, Price, ContentWrapper } from './style';
import RatingItem from '../Rating';
import PriceItem from '../Price';

const range = to => [...Array(to).keys()].map(i => i + 1)

const ProductItem = ({
  isDetailPage,
  isInStock,
  img,
  title,
  price,
  discount,
  maxRating = 5,
  rating,
  id
}) =>
    <Component isInStock={isInStock} isDetailPage={isDetailPage}>
      <InStock isInStock={isInStock}>
        {isInStock ? 'В наличии' : 'Недоступен'}
      </InStock>
      <Image src={img} alt='Изображение товара' />
      <ContentWrapper>
        {id ? (
          <Link to={`products/${id}`}>
            <Title>{title}</Title>
          </Link>
          ) : <Title>{title}</Title>
        }
        <Rating>
          {range(maxRating).map(i => <RatingItem isFilled={i <= rating} key={i}/>)}
        </Rating>
        <Price>
          <PriceItem value={price} />
          <PriceItem isSmall value={price - price * (discount / 100) } />
        </Price>
      </ContentWrapper>
    </Component>

ProductItem.propTypes = {
  isDetailPage: PropTypes.bool,
  isInStock: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
  rating: PropTypes.number.isRequired,
}

export default ProductItem;
