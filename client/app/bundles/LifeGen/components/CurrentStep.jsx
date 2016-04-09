import React from 'react';
import _ from 'lodash';

import BaseComponent from '../../../libs/components/BaseComponent';

import { Choice, Event } from './stepResolvers';

export default class CurrentStep extends BaseComponent {

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, ['_renderResolution']);
  }

  _renderResolution(step) {
    switch(step.get('stepType')) {
      case 'choice':
        return (<Choice choices={step.get('choices')} />);
      case 'event':
        return (<Event />);
      default:
        return (<span>Step type: {step.get('stepType')} not found.</span>);
    }
  }

  render() {
    let step = this.props.step;

    return (
      <div>
        <h2>{step.get('title')}</h2>
        <p>{step.get('intro')}</p>
        { this._renderResolution(step) }
      </div>
    );
  }
}
