import React from 'react';
import Checkbox from '../Checkbox';
import Input from '../Input';

import styles from './index.module.css';

export default class Form extends React.PureComponent {
  renderCategoryButtons = (categories, checkedCategories) =>
    categories.map((category, index) => {
      const isCategoryChecked = checkedCategories.includes(category);

      return <Checkbox text={category} onChange={this.props.handleCategoryChange} checked={isCategoryChecked} key={index}/>
    })

  render() {
    const { price, categories, checkedCategories, handlePriceChange, handleResetFilter } = this.props;

    return (
      <form className={styles.form}>
        <h2>Цена</h2>
        <label className={`${styles.label} ${styles.price}`}>
          <span>от</span>
          <Input name="min" value={price.min} onChange={handlePriceChange} />
        </label>
        <label className={`${styles.label} ${styles.price}`}>
          <span>до</span>
          <Input name="max" value={price.max} onChange={handlePriceChange} />
        </label>
        <h2>Скидка</h2>
        <label className={styles.label}>
          <span>от</span>
          <Input name="discount" value={price.discount} onChange={handlePriceChange} />
          <span>%</span>
        </label>
        <h2>Категории</h2>
        <div className={styles.filters}>
          {this.renderCategoryButtons(categories, checkedCategories)}
        </div>
        <button onClick={handleResetFilter} type="button">Cбросить фильтры</button>
      </form>
    );
  }
}
