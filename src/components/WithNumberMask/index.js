import React from 'react';
import toInt from 'csssr-school-utils/lib/toInt';

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component';

const WithNumberMask = WrappedComponent => {
  class WithNumberMask extends React.Component {
    handleChange = event => {
      const { value, name } = event.target;

      this.props.onChange && this.props.onChange(name, toInt(value));
  };

    render() {
      return <WrappedComponent {...this.props} handleChange={this.handleChange}/>
    }
  }

  WithNumberMask.displayName = `WithMask(${getDisplayName(WrappedComponent)}`
    return WithNumberMask;
};

export default WithNumberMask;
