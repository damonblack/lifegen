import React from 'react';
import _ from 'lodash';
import requestManager from '../../../libs/requestManager';
import CharacterSheet from '../components/CharacterSheet';

export default class Roster extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { lives: props.lives };
    _.bindAll(this, ['_newCharacter', '_updateLives']);
  }

  _newCharacter() {
    requestManager.createCharacter().then(this._updateLives)
  }

  _updateLives(response) {
    this.setState({lives: response.data.lives});
  }

  render() {
    var lives = this.state.lives;

    return (
      <div>
        {
          lives.map(function(life) {
            return (
              <div className="life_listing" key={life.id}>
                <CharacterSheet life={life} updateLives={this._updateLives}/>
              </div>
            );
          }.bind(this))
        }
        <button className="new-life-btn" onClick={this._newCharacter}>New Character</button>
      </div>
    );
  }
}
