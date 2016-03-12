import React from 'react';
import _ from 'lodash';
import requestManager from '../../../libs/requestManager';

export default class CharacterSheet extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.life.characterSheet.name,
      modified: false
    };

    // Can't say I really care for this 'feature' of ES6 classes
    _.bindAll(this, [
      '_deleteMe',
      '_updateName',
      '_onKeyDown',
      '_saveName',
      '_displayStats',
    ]);
  }

  _deleteMe() {
    requestManager.deleteCharacter(this.props.life.id)
      .then(this.props.updateLives);
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
      requestManager.updateCharacter(this.props.life.id, {
          characterSheet: {
            name: event.target.value
          }
        }
      ).then(this.setState({modified: false}));
    }
  }

  _displayStats(attributes) {
    return (
      <div>
        { _.toPairs(attributes).map( function(attr) {
          return (
            <span className='attribute' key={attr[0]}>
              {`${attr[0]}: ${attr[1]} `}
            </span>
          );
        })}
      </div>
    );
  }

  render() {
    var characterSheet = this.props.life.characterSheet;
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
        { this._displayStats(characterSheet.attributes) }
        { this._displayStats(characterSheet.skills) }
        <button onClick={this._deleteMe}>X</button>
      </div>
    );
  }
}
