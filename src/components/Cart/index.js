import React from 'react';
import PropTypes from 'prop-types';
import { Component, TextWrapper, Title, Value, Icon, Text, CartLink, Info } from './style';
import IconOk from './icon-ok.svg';
import IconError from './icon-error.svg';
import { Link } from 'react-router-dom';
import Price from '../Price';
import Button from '../Button';

const Cart = ({ value, saveCart, clearCart, items, isSaved, isLoading, isError, isFullInfo, itemsCoast }) => {
  const handleButtonClick = () => {
    if (isError) {
      saveCart(items);
      return
    }

    isSaved ? clearCart() : saveCart(items);
  }

  const handleClearCartBtnClick = () => {
    clearCart();
  }

  const handleSaveCartBtnClick = () => {
    saveCart();
  }

  return (
    <Component>
      <TextWrapper>
        <Title>Корзина</Title>
        {!isFullInfo && <Value>{value}</Value>}
        {isSaved && <Icon src={IconOk} />}
        {isError && <Icon src={IconError} />}
      </TextWrapper>
      {isFullInfo && (
        <Info>
          <Text>Товаров <Value>{value}</Value></Text>
          <Text>Всего <Price value={itemsCoast} /> </Text>
        </Info>
      )}
      {!isFullInfo && (
        <>
          <Button clickHandler={handleButtonClick} isLoading={isLoading}>
            {isError ? 'Повторить попытку' : isSaved ? 'Очистить корзину' : 'Сохранить корзину'}
          </Button>
          <CartLink to={'/cart'} as={isLoading ? 'button' : Link} disabled={isLoading}>Перейти в корзину</CartLink>
        </>
      )}
      {isFullInfo && (
        <>
          <Button clickHandler={handleClearCartBtnClick} isDisabled={isLoading}>
            Очистить корзину
          </Button>
          <Button clickHandler={handleSaveCartBtnClick} isLoading={isLoading} isDisabled={isSaved}>
            Сохранить корзину
          </Button>
        </>
      )}
      {isError && <Text>Возникла ошибка при сохранении корзины</Text>}
    </Component>
  )
}

Cart.defaultProps = {
  isSaved: false,
  isLoading: false,
  isError: false,
  isFullInfo: false
}

Cart.propTypes = {
  value: PropTypes.number,
  saveCart: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.number),
  isSaved: PropTypes.bool,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  isFullInfo: PropTypes.bool,
}

export default Cart;
