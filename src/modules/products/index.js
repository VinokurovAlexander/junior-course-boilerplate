import {createSelector} from 'reselect';

const initialState = {
  items: [],
  isLoading: false,
  isError: false
}

// Actions

const START_LOADING = 'my-app/products/START_LOADING';
const SUCCESS_LOADING = 'my-app/products/SUCCESS_LOADING'
const ERROR_LOADING = 'my-app/products/ERROR_LOADING';

// Reducer

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUCCESS_LOADING: {
      const { response } = payload;

      return {
        ...state,
        items: response.products,
        isLoading: false,
        isError: false
      }
    }

    case START_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }

    case ERROR_LOADING: {
      return {
        ...state,
        isError: true,
        isLoading: false
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;

// Actions Creators

const setSuccessLoading = response => ({
  type: SUCCESS_LOADING,
  payload: { response }
})

const setStartLoading = () => ({
  type: START_LOADING
})

const setErrorLoading = () => ({
  type: ERROR_LOADING
})

export const fetchProducts = () => dispatch => {
  dispatch(setStartLoading());

  fetch('https://course-api.school.csssr.com/products')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('something went wrong')
      }
    })
    .then(data => {
      dispatch(setSuccessLoading(data))
    })
    .catch(() => dispatch(setErrorLoading()))
}

// Selectors

export const getProducts = state => state.products.items;

export const getLoadingStatus = state => state.products.isLoading;

export const getResponseStatus = state => state.products.isError;

const getIdFromProps = (state, props) => props.id;

export const getProductById = createSelector(
  getProducts,
  getIdFromProps,
  (products, id) => {
    const result = products.filter(product => product.id === id);
    const [product] = result;

    return product;
  }
);



