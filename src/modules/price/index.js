import { createSelector } from 'reselect';
import { isMatchesPrice } from './utils';
import { getProducts } from '../products';

const initialState = {
  min: 0,
  max: 2000,
  discount: 10
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
  getProducts,
  (currentPrice, products) => products.filter(product => isMatchesPrice(product, currentPrice))
);
