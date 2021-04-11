import React from 'react';
import PropTypes from 'prop-types';
import { Component, TextWrapper, Title, Value, Icon, Text } from './style';
import Button from '../Button';
import IconOk from './icon-ok.svg';
import IconError from './icon-error.svg';

const Cart = ({ value, saveCart, clearCart, items, isSaved, isLoading, isError }) => {
  const handleButtonClick = () => {
    if (isError) {
      saveCart(items);
      return
    }

    isSaved ? clearCart() : saveCart(items);
  }

  return (
    <Component>
      <TextWrapper>
        <Title>Корзина</Title>
        <Value>{value}</Value>
        {isSaved && <Icon src={IconOk} />}
        {isError && <Icon src={IconError} />}
      </TextWrapper>
      <Button clickHandler={handleButtonClick} isLoading={isLoading}>
        {isError ? 'Повторить попытку' : isSaved ? 'Очистить корзину' : 'Сохранить корзину'}
      </Button>
      {isError && <Text>Возникла ошибка при сохранении корзины</Text>}
    </Component>
  )
}

Cart.propTypes = {
  value: PropTypes.number,
  saveCart: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.number),
  isSaved: PropTypes.bool,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool
}

export default Cart;
