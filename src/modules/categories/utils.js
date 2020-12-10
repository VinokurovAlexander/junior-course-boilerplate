import products from '../../products.json';

export const getAllCategories = () => {
  const allProductsCategories = products.map(product => product.category);

  return Array.from(new Set(allProductsCategories));
}

export const isMatchesCategory = (product, checkedCategories) =>
  checkedCategories.length === 0 ? true : checkedCategories.includes(product.category);
