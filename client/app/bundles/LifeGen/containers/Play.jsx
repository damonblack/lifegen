import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as charactersActionCreators from '../actions/rosterActionCreators';
import AttributesRow from '../components/AttributesRow'

import BaseComponent from '../../../libs/components/BaseComponent';

function loadCurrentCharacter(state, ownProps) {
  let charId = ownProps.params.id;
  return {
    character: state.rosterStore.get('roster')
      .find((char) => {
        return char.get('id') == charId;
      })
  };
}

class Play extends BaseComponent {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { dispatch, character } = this.props;
    const actions = bindActionCreators(charactersActionCreators, dispatch);

    const characterSheet = character.get('characterSheet');

    return (
      <div>
        <h2>{characterSheet.get('name')}</h2>
        <AttributesRow attrs={characterSheet.get('attributes')} />
        <AttributesRow attrs={characterSheet.get('skills')} />
      </div>
    );
  }
}

export default connect(loadCurrentCharacter)(Play);
