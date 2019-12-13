import React from "react";

import { PlayerSelectorView } from "./player-selector.view";

export class PlayerSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const props = {
      ...this.state,
      ...this.props
    };
    return <PlayerSelectorView {...props} />;
  }
}
