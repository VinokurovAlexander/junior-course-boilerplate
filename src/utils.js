const queryString = require('query-string');

const DEFAULT_CHECKED_CATEGORIES = [];
const DEFAULT_ACTIVE_PAGE_INDEX = 1;

export const getQueryParams = location => {
  const query = queryString.parse(location.search,
    {
      arrayFormat: 'comma',
      parseNumbers: true
    }
  );

  return {
    checkedCategories: query.categories ||  DEFAULT_CHECKED_CATEGORIES,
    pageIndex: query.page || DEFAULT_ACTIVE_PAGE_INDEX
  };
}
