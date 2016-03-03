import React from 'react';
import CharacterSheet from '../components/CharacterSheet';

export default class Roster extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    var lives = this.props.lives;
    return (
      <div>
        {
          lives.map(function(life) {
            return (
              <div className="life_listing">
                <CharacterSheet characterSheet={life.character_sheet} />
              </div>
            );
          }.bind(this))
        }
      </div>
    );
  }
}
