const initialState = {
  response: { result: 'OK', products: []},
  isLoading: false
}

// Actions

const SET_RESPONSE = 'my-app/products/SET_RESPONSE';
const SET_LOADING = 'my-app/products/SET_LOADING'

// Reducer

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RESPONSE: {
      const { response } = payload;

      return {
        ...state,
        response,
        isLoading: false
      }
    }

    case SET_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;

// Actions Creators

const setResponse = response => ({
  type: SET_RESPONSE,
  payload: { response }
})

const setLoading = () => ({
  type: SET_LOADING
})

export const fetchProducts = () => dispatch => {
  dispatch(setLoading());

  fetch('https://course-api.school.csssr.com/products')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('something went wrong')
      }
    })
    .then(data => {
      setTimeout(() => {
        dispatch(setResponse(data))
      }, 1500)
    })
    .catch(() => dispatch(setResponse({ result: 'ERROR', message: 'Возникла непредвиденная ошибка' })))
}

// Selectors

export const getProducts = state => state.products.response.products;

export const getLoadingStatus = state => state.products.isLoading;

export const getResponseStatus = state => state.products.response.result;
