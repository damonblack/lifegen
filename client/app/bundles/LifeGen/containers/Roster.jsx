import React from 'react';
import { connect } from 'react-redux';
import CharacterSheet from '../components/CharacterSheet';
import { bindActionCreators } from 'redux';
import * as rosterActionCreators from '../actions/rosterActionCreators';

import BaseComponent from '../../../libs/components/BaseComponent';

function loadRoster(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { data: state.rosterStore };
}

class Roster extends BaseComponent {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { dispatch, data } = this.props;
    const actions = bindActionCreators(rosterActionCreators, dispatch);

    return (
      <div>
        {
          data.get('roster').map( character => {
            return (
              <div className="character_listing" key={character.get('id')}>
                <CharacterSheet {...{ actions, character }} />
              </div>
            );
          })
        }
        <button className="new-character-btn" onClick={actions.createCharacter}>New Character</button>
      </div>
    );
  }
}

export default connect(loadRoster)(Roster);
