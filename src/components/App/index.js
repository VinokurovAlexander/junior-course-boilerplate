import React from 'react';
import Title from '../Title'
import Sidebar from '../../containers/Sidebar';
import List from '../../containers/List';
import { AppContainer, AppContent } from './style';
import { isQueryParamsEqual } from '../../utils';
import { DEFAULT_CHECKED_CATEGORIES } from '../../modules/categories/constants';
import { DEFAULT_ACTIVE_PAGE_INDEX } from '../../modules/pagination/constants';
const queryString = require('query-string');

export const PAGE_TITLE = 'Интернет магазин'
export const DEFAULT_URL = window.location.pathname;

class App extends React.PureComponent {
  componentDidMount = () => {
    const query = window.location.search;

    if (query) {
      const parsedQuery = queryString.parse(query,
        {
          arrayFormat: 'comma',
          parseNumbers: true
        });

      if (typeof parsedQuery.categories === 'string') {
        parsedQuery.categories = [parsedQuery.categories];
      }

      this.updateQuery(parsedQuery.page, parsedQuery.categories);

      window.history.pushState(parsedQuery, PAGE_TITLE, query)
    }

    window.history.pushState({ page: DEFAULT_ACTIVE_PAGE_INDEX, categories: DEFAULT_CHECKED_CATEGORIES}, PAGE_TITLE, DEFAULT_URL);
    window.addEventListener('popstate', this.setFromHistory);
  }

  componentWillUnmount = () => {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  componentDidUpdate = () => {
    const { activePageIndex, checkedCategories } = this.props;
    const currentQuery = {
      page: activePageIndex,
      categories: checkedCategories
    }

    const historyQuery = window.history.state;

    if (isQueryParamsEqual(historyQuery, currentQuery)) {
      return;
    }

    const url = `?${queryString.stringify(currentQuery, { skipEmptyString: true, arrayFormat: 'comma' })}`;

    window.history.pushState(currentQuery, PAGE_TITLE, url);
  }

  setFromHistory = event => {
    const { page, categories } = event.state;

    this.updateQuery(page, categories);
  }

  updateQuery = (page = DEFAULT_ACTIVE_PAGE_INDEX, checkedCategories = DEFAULT_CHECKED_CATEGORIES) => {
    this.props.setPage(page);
    this.props.setCheckedCategories(checkedCategories)
  }

  render() {
    return (
      <AppContainer>
        <Title text='Список товаров' />
        <AppContent>
          <Sidebar />
          <List />
        </AppContent>
      </AppContainer>
    )
  }
}

export default App;

