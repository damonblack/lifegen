import React from 'react';
import _ from 'lodash';

export default class CharacterSheet extends React.Component {

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, '_displayStats');
  }

  _displayStats(attributes) {
    return (
      <div>
        { _.toPairs(attributes).map( function(attr) {
          return (
            <span className='attribute'>
              {`${attr[0]}: ${attr[1]} `}
            </span>
          );
        })}
      </div>
    );
  }

  render() {
    var characterSheet = this.props.characterSheet;
    return (
      <div>
        <h3>{ characterSheet.name }</h3>
        { this._displayStats(characterSheet.attributes) }
        { this._displayStats(characterSheet.skills) }
      </div>
    );
  }
}
