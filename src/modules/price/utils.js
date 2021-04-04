const isMoreThanMinPrice = (product, price) => product.price >= price.min
const isLessThanMaxPrice = (product, price) => product.price <= price.max;
const isRelevantDiscount = (product, price) => product.discount === price.discount;

export const isMatchesPrice = (product, currentPrice) =>
    isMoreThanMinPrice(product, currentPrice)
    && isLessThanMaxPrice(product, currentPrice)
    && isRelevantDiscount(product, currentPrice)
