import { createSelector } from 'reselect';
import { getDefaultMinPrice, getDefaultMaxPrice, isMatchesPrice } from './utils';
import { DEFAULT_DISCOUNT_SIZE } from './constants';
import products from '../../products.json';

const initialState = {
  min: getDefaultMinPrice(),
  max: getDefaultMaxPrice(),
  discount: DEFAULT_DISCOUNT_SIZE
}

// Actions

const SET_PRICE = 'my-app/price/SET_PRICE';

// Reducer

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_PRICE: {
      const { inputName, changedValue } = payload;

      return {
        ...state,
        [inputName]: changedValue,
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;

// Actions Creators

export const setPrice = (inputName, changedValue) => ({
  type: SET_PRICE,
  payload: { inputName, changedValue }
})

// Selectors

export const getPrice = state => state.price;
export const getProductsByPrice  = createSelector(
  getPrice,
  currentPrice => products.filter(product => isMatchesPrice(product, currentPrice))
);
