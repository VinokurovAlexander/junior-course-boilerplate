import { createSelector } from 'reselect';
import { getProductIdFromProps } from '../products';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  isSaved: false
};

// Actions

const ADD_TO_CART = 'my-app/cart/ADD_TO_CART';
const DELETE_FROM_CART = 'my-app/cart/DELETE_FROM_CART';
const SAVE_CART_SUCCESS = 'my-app/cart/SAVE_CART_SUCCESS';
const SAVE_CART_ERROR = 'my-app/cart/SAVE_CART_ERROR';
const START_LOADING = 'my-app/cart/START_LOADING';
const CLEAR_CART = 'my-app/cart/CLEAR_CART';

// Reducer

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const { id } = payload;
      const items = state.items.slice();
      items.push(id)

      return {
        ...state,
        items,
        isSaved: false
      }
    }

    case DELETE_FROM_CART: {
      const { id } = payload;
      const items = state.items.filter(itemId => itemId !== id);

      return {
        ...state,
        items,
        isSaved: false
      }
    }

    case START_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }

    case SAVE_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSaved: true,
      }
    }

    case CLEAR_CART: {
      return {
        ...state,
        items: [],
        isSaved: false,
      }
    }

    case SAVE_CART_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false
      }
    }

    default: {
      return state
    }
  }
}

export default reducer;

// Actions Creators

export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: { id }
})

export const deleteFromCart = id => ({
  type: DELETE_FROM_CART,
  payload: { id }
})

const setStartLoading = () => ({
  type: START_LOADING
})

const setSuccessSave = () => ({
  type: SAVE_CART_SUCCESS
})

export const clearCart = () => ({
  type: CLEAR_CART
})

const setError = () => ({
  type: SAVE_CART_ERROR
})

export const saveCart = items => dispatch => {
  dispatch(setStartLoading());

  fetch('https://course-api.school.csssr.com/save', {
    method: 'POST',
    body: JSON.stringify(items),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('something went wrong')
    }
  })
  .then(data => {
    if (data.result === 'OK') {
      dispatch(setSuccessSave())
    } else {
      throw new Error('something went wrong')
    }
  })
  .catch(() => {
    dispatch(setError())
  })
}

// Selectors

export const getItems = state => state.cart.items;

export const getItemsCount = state => state.cart.items.length;

export const isInCart = createSelector(
  getItems,
  getProductIdFromProps,
  (items, id) => items.some(itemId => itemId === id)
)

export const getLoadingStatus = state => state.cart.isLoading;

export const getSavedStatus = state => state.cart.isSaved;

export const getErrorStatus = state => state.cart.isError;
