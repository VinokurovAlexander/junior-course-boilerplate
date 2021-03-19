import { createSelector } from 'reselect';
import { splitEvery } from 'csssr-school-utils';
import { PRODUCTS_ON_PAGE_COUNT, DEFAULT_ACTIVE_PAGE_INDEX } from './constants';
import { getProductsByCategories } from '../categories';
import { getProductsByPrice } from '../price';

const initialState = {
  activePageIndex: DEFAULT_ACTIVE_PAGE_INDEX
}

// Actions

const SET_PAGE = 'my-app/pagination/SET_PAGE';

// Reducer

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case (SET_PAGE): {
      const { page } = payload;

      return {
        ...state,
        activePageIndex: page
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;

// Actions Creators

export const setPage = page => ({
  type: SET_PAGE,
  payload: { page }
})

// Selectors

export const getActivePageIndex = state => state.pagination.activePageIndex

const getProductsByFilters = createSelector(
  getProductsByCategories,
  getProductsByPrice,
  (productsByCategories, productsByPrice) => productsByCategories.filter(product => productsByPrice.includes(product))
)

export const getProductsByPage = createSelector(
  [getProductsByFilters],
  products => splitEvery(PRODUCTS_ON_PAGE_COUNT, products)
)
