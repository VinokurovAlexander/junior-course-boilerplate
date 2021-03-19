import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Label, Button, Filters } from './styles';
import Checkbox from '../Checkbox';
import Input from '../Input';

class Form extends React.PureComponent {
  renderCategoryButtons = (categories, checkedCategories) =>
    categories.map((category, index) => {
      const isCategoryChecked = checkedCategories.includes(category);

      return <Checkbox text={category} onChange={this.props.handleCategoryChange} checked={isCategoryChecked} key={index} />
    })

  render() {
    const {
      price: { max, min, discount },
      categories,
      checkedCategories,
      handlePriceChange,
      handleResetFilter
    } = this.props;

    return (
      <Container>
        <Title>Цена</Title>
        <Label isShort>
          <span>от</span>
          <Input name="min" value={min} onChange={handlePriceChange} />
        </Label>
        <Label isShort>
          <span>до</span>
          <Input name="max" value={max} onChange={handlePriceChange} />
        </Label>
        <Title>Скидка</Title>
        <Label>
          <span>от</span>
          <Input name="discount" value={discount} onChange={handlePriceChange} />
          <span>%</span>
        </Label>
        <Title>Категории</Title>
        <Filters>
          {this.renderCategoryButtons(categories, checkedCategories)}
        </Filters>
        <Button onClick={handleResetFilter} type="button">Cбросить фильтры</Button>
      </Container>
    );
  }
}

Form.propTypes = {
  price: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired
  }).isRequired,
  categories: PropTypes.array.isRequired,
  checkedCategories: PropTypes.array.isRequired,
  handlePriceChange: PropTypes.func,
  handleResetFilter: PropTypes.func,
}

export default Form;
