import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {

  render() {
    return (
      <section>
        <header>
          <ul>
          </ul>
        </header>
        {this.props.children}
      </section>
    );
  }
}
