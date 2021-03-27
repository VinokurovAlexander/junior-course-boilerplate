import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Label, Input, Text } from './styles';
const queryString = require('query-string');

class CategoryButton extends React.PureComponent {
  onChange = event => {
    const changedCategory = event.target.value;
    const { history, location } = this.props;
    const query = location.search;
    const parsedQuery = queryString.parse(query,
      {
        arrayFormat: 'comma',
        parseNumbers: true
      });

    let categories = parsedQuery.categories || [];

    if (typeof categories === 'string') {
      categories = [categories]
    }

    if (categories.includes(changedCategory)) {
      const deleteIndex = categories.indexOf(changedCategory);
      categories.splice(deleteIndex, 1);
    } else {
      categories.push(changedCategory);
    }

    const url = `?${queryString.stringify({...parsedQuery, categories}, { skipEmptyString: true, arrayFormat: 'comma' })}`;
    history.push(url);
  }

  render() {
    const { checked, text } = this.props;

    return(
      <Label htmlFor={text} checked={checked}>
        <Text>{text}</Text>
        <Input
          type='checkbox'
          id={text}
          name="filter"
          value={text}
          checked={checked}
          onChange={this.onChange}
        />
      </Label>
    )
  }
}

CategoryButton.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
}

export default withRouter(CategoryButton);
