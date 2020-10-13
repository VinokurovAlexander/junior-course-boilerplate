import React from 'react';
import PropTypes from 'prop-types';
import LogRender from '../LogRender';

import styles from './index.module.css';

class Checkbox extends LogRender {
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
      <div className={`${styles.checkbox} ${checked ? styles.checked : ''}`}>
        <input
          type='checkbox'
          id={text}
          name="filter"
          value={text}
          checked={this.state.checked}
          onChange={this.onChange}
        />
        <label htmlFor={text}>
          <p className={styles.text}>{text}</p>
        </label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Checkbox;
