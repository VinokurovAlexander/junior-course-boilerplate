import { initialState } from './store';
import { DEFAULT_URL, PAGE_TITLE } from './components/App';

export const RESET_FILTER = 'RESET_FILTER';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_PRICE = 'CHANGE_PRICE';
export const UPDATE_CHECKED_CATEGORIES = 'UPDATE_CHECKED_CATEGORIES';

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER: {
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
        checkedCategories
      }
    }

    case RESET_FILTER: {
      window.history.pushState(DEFAULT_URL, `${PAGE_TITLE}`, DEFAULT_URL);

      return {
        ...state,
        checkedCategories: []
      }
    }

    case CHANGE_PRICE: {
      const { inputName, changedValue } = payload;

      const price = {
        ...state.price,
        [inputName]: changedValue
      }

      return {
        ...state,
        price
      }
    }

    case UPDATE_CHECKED_CATEGORIES: {
      const { checkedCategories } =  payload;

      return {
        ...state,
        checkedCategories
      }
    }

    default: {
      return state;
    }
  }
};

export default reducer;
