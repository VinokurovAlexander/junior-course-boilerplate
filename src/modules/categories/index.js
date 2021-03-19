import { createSelector } from 'reselect';
import { DEFAULT_CHECKED_CATEGORIES } from './constants';
import { isMatchesCategory, getAllCategories } from './utils';
import products from '../../products.json';

const initialState = {
  checkedCategories: DEFAULT_CHECKED_CATEGORIES,
  categories: getAllCategories(),
}

// Actions

const CHANGE_CATEGORY = 'my-app/categories/CHANGE_CATEGORY';
const RESET_CATEGORIES = 'my-app/categories/RESET_CATEGORIES';
const SET_CATEGORIES = 'my-app/categories/SET_CATEGORIES';

// Reducer

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_CATEGORY: {
      const { changedCategory } = payload;
      const checkedCategories = state.checkedCategories.slice();

      if (checkedCategories.includes(changedCategory)) {
        const deleteIndex = checkedCategories.indexOf(changedCategory);
        checkedCategories.splice(deleteIndex, 1);
      } else {
        checkedCategories.push(changedCategory);
      }

      return {
        ...state,
        checkedCategories,
      }
    }

    case RESET_CATEGORIES: {
      const checkedCategories = [];

      return {
        ...state,
        checkedCategories,
      }
    }

    case SET_CATEGORIES: {
      const { checkedCategories } = payload;

      return {
        ...state,
        checkedCategories
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;

// Action Creators

export const changeCategory = category => ({
  type: CHANGE_CATEGORY,
  payload: { changedCategory: category }
})

export const resetCategories = () => ({ type: RESET_CATEGORIES })

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: { checkedCategories: categories }
})

// Selectors

export const getCheckedCategories = state => state.categories.checkedCategories;

export const getCategories = state => state.categories.categories;

export const getProductsByCategories = createSelector(
  [getCheckedCategories],
  checkedCategories => products.filter(product =>  isMatchesCategory(product, checkedCategories))
)
