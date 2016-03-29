import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import requestManager from '../../../libs/requestManager';
import CharacterSheet from '../components/CharacterSheet';

function loadCharacters(state) {
  return { characters: state };
}

class Roster extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { characters: props.characters };
    _.bindAll(this, ['_newCharacter', '_updateCharacters']);
  }

  _newCharacter() {
    requestManager.createCharacter().then(this._updateCharacters)
  }

  _updateCharacters(response) {
    this.setState({characters: response.data.characters});
  }

  render() {
    var characters = this.state.characters;

    return (
      <div>
        {
          characters.map(function(character) {
            return (
              <div className="character_listing" key={character.id}>
                <CharacterSheet character={character} updateCharacters={this._updateCharacters}/>
              </div>
            );
          }.bind(this))
        }
        <button className="new-character-btn" onClick={this._newCharacter}>New Character</button>
      </div>
    );
  }
}

export default connect(loadCharacters)(Roster);
