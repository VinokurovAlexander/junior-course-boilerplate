import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Component, InStock, Image, Title, Rating, Price } from './style';
import RatingItem from '../Rating';
import PriceItem from '../Price';
import defaultImage from './image.jpg';

const range = to => [...Array(to).keys()].map(i => i + 1)

const ProductItem = ({ isDetailPage, isInStock, img, title, price, subPriceContent, maxRating, rating, id }) =>
    <Component isInStock={isInStock} isDetailPage={isDetailPage}>
      <InStock isInStock={isInStock}>
        {isInStock ? 'В наличии' : 'Недоступен'}
      </InStock>
      <Image src={img} alt='Изображение товара' />
      <div>
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
          <PriceItem isSmall value={subPriceContent} />
        </Price>
      </div>
    </Component>

ProductItem.propTypes = {
  isDetailPage: PropTypes.bool,
  isInStock: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  subPriceContent: PropTypes.number.isRequired,
  maxRating: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
}

ProductItem.defaultProps = {
  isDetailPage: false,
  isInStock: true,
  img: defaultImage,
  title: 'Название первого товара',
  price: '23 000',
  subPriceContent: '23 000',
  maxRating: 5,
  rating: 4,
}

export default ProductItem;
