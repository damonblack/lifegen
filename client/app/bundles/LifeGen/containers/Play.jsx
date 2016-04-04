import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as charactersActionCreators from '../actions/rosterActionCreators';

import BaseComponent from '../../../libs/components/BaseComponent';

function loadCurrentCharacter(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { data: state.rosterStore };
}

class Play extends BaseComponent {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { dispatch, data } = this.props;
    const actions = bindActionCreators(charactersActionCreators, dispatch);

    return (
      <div>
        {
          data.get('characters').map( character => {
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

export default connect(loadCurrentCharacter)(Play);
