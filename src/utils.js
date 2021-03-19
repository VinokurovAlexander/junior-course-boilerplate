const isCategoryFiltersEqual = (prevFilters, curFilters) => {
  if (prevFilters.length !== curFilters.length) {
    return false;
  }

  let result = true;

  prevFilters.forEach(item => {
    if (!curFilters.includes(item)) {
      result = false;
    }
  })

  return result;
}

export const isQueryParamsEqual = (historyQuery, currentQuery) => {
  const { categories: historyCategories, page: historyPage } = historyQuery;
  const { categories: currentCategories, page: currentPage } = currentQuery;
  const isPageNumberEqual = historyPage === currentPage;

  return isCategoryFiltersEqual(historyCategories, currentCategories) && isPageNumberEqual;
}

export const getRange = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}
