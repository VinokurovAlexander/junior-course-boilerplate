import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../containers/PageLink';
import { Component } from './style';
import { getRange } from '../../utils';

const PAGE_LINK_NEIGHBOUR_COUNT = 1;
const MAX_LINK_BUTTONS_COUNT = 2 * PAGE_LINK_NEIGHBOUR_COUNT + 5 // 1st and last page link + active link + hidden page link x 2 = 5;
const FIRST_PAGE_INDEX = 1;
const HIDDEN_PAGES_INDEX = 'HIDDEN_PAGES';

class Navigation extends React.PureComponent {
  renderPageLinks = (pages, activePageIndex) =>
    pages.map(pageIndex => {
      if (pageIndex === HIDDEN_PAGES_INDEX) {
        return <Link key={Math.random()} isDisabled>...</Link>
      }

      return (
          <Link
            href={`/?page=${pageIndex}`}
            isActive={pageIndex === activePageIndex}
            key={pageIndex}
          >
            {pageIndex}
          </Link>
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
          <Link
            isBig
            isDisabled={activePageIndex === FIRST_PAGE_INDEX}
            href={`/?page=${activePageIndex - 1}`}
          >
            Назад
          </Link>
          {this.renderNavigation(activePageIndex, pagesCount)}
          <Link
            isBig
            isDisabled={activePageIndex === pagesCount}
            href={`/?page=${activePageIndex + 1}`}
          >
            Вперёд
          </Link>
      </Component>
    )
  }
}

Navigation.propTypes = {
  activePageIndex: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired
}

export default Navigation;
