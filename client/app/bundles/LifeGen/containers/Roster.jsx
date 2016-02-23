import React, { PropTypes } from 'react';

export default class LifeGen extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { name: this.props.lives };
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
