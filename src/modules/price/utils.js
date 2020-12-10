import { maxBy, minBy } from 'csssr-school-utils';
import products from '../../products.json';

export const getDefaultMinPrice = () => minBy(obj => obj.price, products).price;
export const getDefaultMaxPrice = () => maxBy(obj => obj.price, products).price;

const isMoreThanMinPrice = (product, price) => product.price >= price.min
const isLessThanMaxPrice = (product, price) => product.price <= price.max;
const isRelevantDiscount = (product, price) =>
  product.price === (product.subPriceContent - product.subPriceContent * (price.discount / 100));

export const isMatchesPrice = (product, currentPrice) =>
    isMoreThanMinPrice(product, currentPrice)
    && isLessThanMaxPrice(product, currentPrice)
    && isRelevantDiscount(product, currentPrice)
