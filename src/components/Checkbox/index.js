import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, Text } from './styles';

class Checkbox extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked
    }
  }

  onChange = event => {
    this.setState({
      checked: !this.state.checked
    })

    const changedCategory = event.target.value;

    this.props.onChange && this.props.onChange(changedCategory);
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
            checked={this.state.checked}
            onChange={this.onChange}
          />
        </Label>
    )
  }
}

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Checkbox;
