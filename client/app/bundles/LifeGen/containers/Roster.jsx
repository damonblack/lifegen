import React, { PropTypes } from 'react';

export default class LifeGen extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    var lives = this.props.lives;
    return (
      <div>
        {lives.map(function(life) {
          return (
            <div>
              <h3>{life.character_sheet.name}</h3>
              <div>{JSON.stringify(life.character_sheet.attributes)}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
