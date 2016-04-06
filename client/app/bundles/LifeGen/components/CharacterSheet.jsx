import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import AttributesRow from './AttributesRow.jsx';

import BaseComponent from '../../../libs/components/BaseComponent';

export default class CharacterSheet extends BaseComponent {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.character.get('characterSheet').get('name'),
      modified: false
    };

    // Can't say I really care for this 'feature' of ES6 classes
    _.bindAll(this, [
      '_deleteMe',
      '_updateName',
      '_onKeyDown',
      '_saveName'
    ]);
  }

  _deleteMe() {
    this.props.actions.deleteCharacter(this.props.character.get('id'));
  }

  _updateName(event) {
    this.setState({
      name: event.target.value,
      modified: true
    })
  }

  _onKeyDown(event) {
    if (event.keyCode === 13) {
      this._saveName(event);
    }
  }

  _saveName(event) {
    if (this.state.modified) {
      this.setState({modified: false});
      this.props.actions.updateCharacter(this.props.character.get('id'), {
          characterSheet: {
            name: event.target.value
          }
        }
      );
    }
  }

  render() {
    let characterSheet = this.props.character.get('characterSheet');

    return (
      <div>
        <input
          type = "text"
          placeholder = "Enter a name"
          value = {this.state.name}
          onChange = {this._updateName}
          onBlur = {this._saveName}
          onKeyDown = {this._onKeyDown}
        />
        <AttributesRow attrs={ characterSheet.get('attributes')}/>
        <AttributesRow attrs={ characterSheet.get('skills')}/>
        <Link to={"/" + this.props.character.get('id')}>Play</Link>
      </div>
    );
  }
}
