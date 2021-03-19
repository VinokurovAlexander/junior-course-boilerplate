import styled from 'styled-components';
import { Component as RatingItem } from '../Rating/style.js';
import { Component as PriceItem } from '../Price/style';

const Color = {
  DISABLED: '#7E8FA4'
}

const Image = styled.img`
  max-width: 100%;
  height: 200px;
  margin-bottom: 16px;

  object-fit: cover;
  object-position: center;
`

const Component = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props => props.isDetailPage ? 'row' : 'column'};
  color: ${props => props.isInStock ? '#323c48' : Color.DISABLED};

  ${Image} {
    margin-right: ${props => props.isDetailPage ? '32px' : '0'};
  }

  a {
    color: inherit;
    transition: opacity ease-in 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }
`

const InStock = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  padding-top: 15px;
  padding-right: 11px;
  padding-bottom: 15px;
  padding-left: 12px;

  color: ${props => props.isInStock ? '#41CE7F' : Color.DISABLED};
  font-size: 12px;
  background-color: #fff;
  border-bottom-right-radius: 15px;
`

const Title = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 16px;
`

const Rating = styled.div`
  display: flex;
  margin-bottom: 10px;

  ${RatingItem} {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`

const Price = styled.div`
  display: flex;
  align-items: flex-end;

  ${PriceItem}:first-child {
    margin-right: 10px;
  }
`

export { Component, InStock, Image, Title, Rating, Price };
