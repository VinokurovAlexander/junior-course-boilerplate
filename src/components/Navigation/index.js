import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import PageLink from '../../components/PageLink';
import { Component } from './style';
const queryString = require('query-string');

const PAGE_LINK_NEIGHBOUR_COUNT = 1;
const MAX_LINK_BUTTONS_COUNT = 2 * PAGE_LINK_NEIGHBOUR_COUNT + 5 // 1st and last page link + active link + hidden page link x 2 = 5;
const FIRST_PAGE_INDEX = 1;
const HIDDEN_PAGES_INDEX = 'HIDDEN_PAGES';

export const getRange = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}

class Navigation extends React.PureComponent {
  getPageUrl = index => {
    const { location } = this.props;
    const query = location.search;
    const parsedQuery = queryString.parse(query,
      {
        arrayFormat: 'comma',
        parseNumbers: true
      });

    return `?${queryString.stringify({...parsedQuery, page: index}, { skipEmptyString: true, arrayFormat: 'comma' })}`;
  }

  renderPageLinks = (pages, activePageIndex) =>
    pages.map(pageIndex => {
      if (pageIndex === HIDDEN_PAGES_INDEX) {
        return <PageLink key={Math.random()} isDisabled>...</PageLink>
      }

      return (
          <PageLink
            key={pageIndex}
            isActive={pageIndex === activePageIndex}
            url={this.getPageUrl(pageIndex)}
          >
            {pageIndex}
          </PageLink>
      )
    })

  renderNavigation = (activePageIndex, pagesCount) => {
    const isMoreThenMaxBtnsCount = pagesCount > MAX_LINK_BUTTONS_COUNT;
    const lastPage = pagesCount;
    let pages = [];

    if (!isMoreThenMaxBtnsCount) {
      pages = getRange(FIRST_PAGE_INDEX, lastPage);

      return this.renderPageLinks(pages, activePageIndex);
    }

    const hasLeftHiddenPages = activePageIndex > Math.ceil(MAX_LINK_BUTTONS_COUNT / 2);
    const hasRightHiddenPages = pagesCount - activePageIndex > (2 * PAGE_LINK_NEIGHBOUR_COUNT + 1);

    switch (true) {
      case (!hasLeftHiddenPages && hasRightHiddenPages): {

        const range = getRange(FIRST_PAGE_INDEX, MAX_LINK_BUTTONS_COUNT - 2);
        pages = [...range, HIDDEN_PAGES_INDEX, lastPage];

        return this.renderPageLinks(pages, activePageIndex);
      }

      case (hasLeftHiddenPages && !hasRightHiddenPages): {
        const range = getRange(pagesCount - (MAX_LINK_BUTTONS_COUNT - 3), pagesCount);
        pages = [FIRST_PAGE_INDEX, HIDDEN_PAGES_INDEX, ...range];

        return this.renderPageLinks(pages, activePageIndex);
      }

      default: {
        const range = getRange(activePageIndex - PAGE_LINK_NEIGHBOUR_COUNT, activePageIndex + PAGE_LINK_NEIGHBOUR_COUNT);
        pages = [FIRST_PAGE_INDEX, HIDDEN_PAGES_INDEX, ...range, HIDDEN_PAGES_INDEX, lastPage];

        return this.renderPageLinks(pages, activePageIndex);
      }
    }
  }

  render() {
    const { activePageIndex, pagesCount } = this.props;

    return (
      <Component>
          <PageLink
            isBig
            isDisabled={activePageIndex === FIRST_PAGE_INDEX}
            url={this.getPageUrl(activePageIndex - 1)}
          >
            Назад
          </PageLink>
          {this.renderNavigation(activePageIndex, pagesCount)}
          <PageLink
            isBig
            isDisabled={activePageIndex === pagesCount}
            url={this.getPageUrl(activePageIndex + 1)}
          >
            Вперёд
          </PageLink>
      </Component>
    )
  }
}

Navigation.propTypes = {
  activePageIndex: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired
}

export default withRouter(Navigation);
