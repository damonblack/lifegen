import React from 'react';
import _ from 'lodash';
import requestManager from '../../../libs/requestManager';

export default class CharacterSheet extends React.Component {

  constructor(props, context) {
    super(props, context);

    _.bindAll(this, ['_displayStats', '_deleteMe']);
  }

  _deleteMe() {
    requestManager.deleteCharacter(this.props.life.id)
      .then(this.props.updateLives);
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
        <h3>{ characterSheet.name }</h3>
        { this._displayStats(characterSheet.attributes) }
        { this._displayStats(characterSheet.skills) }
        <button onClick={this._deleteMe}>X</button>
      </div>
    );
  }
}
