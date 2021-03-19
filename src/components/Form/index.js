import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Title, Label, Button } from './styles';
import Input from '../Input';
import Categories from '../Categories';

const Form = ({
  price: { max, min, discount },
  handlePriceChange,
}) => (
  <Container>
    <Title>Цена</Title>
    <Label isShort>
      <span>от</span>
      <Input name="min" value={min} onChange={handlePriceChange}/>
    </Label>
    <Label isShort>
      <span>до</span>
      <Input name="max" value={max} onChange={handlePriceChange}/>
    </Label>
    <Title>Скидка</Title>
    <Label>
      <span>от</span>
      <Input name="discount" value={discount} onChange={handlePriceChange}/>
      <span>%</span>
    </Label>
    <Title>Категории</Title>
    <Categories />
    <Link to='/' component={Button}>
      Cбросить фильтры
    </Link>
  </Container>
);

Form.propTypes = {
  price: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired
  }).isRequired,
  handlePriceChange: PropTypes.func,
}

export default Form;
