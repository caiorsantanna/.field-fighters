import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Redirect, Route } from "react-router-dom";
import "./app.style.scss";

import paths from "../helpers/paths.helper";
import players from "../helpers/players.helper";

import { PlayerSelector } from "../pages/PlayerSelector/player-selector.container";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: players,
      selectedPlayer: null,
      selectedEnemy: null
    };

    this.selectPlayer = this.selectPlayer.bind(this);
  }

  selectPlayer(selectedPlayer) {
    const players = this.state.players.map(player => {
      player === selectedPlayer
        ? (player.active = true)
        : (player.inactive = true);
      return player;
    });

    this.setState({
      ...this.state,
      players: players,
      selectedPlayer: selectedPlayer
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <img src="/images/logo.svg" alt="Logo Field" />
          <h1>The Ultimate Field Fighters!</h1>
        </div>
        <Switch>
          <Route path={paths["select-players"]}>
            <PlayerSelector
              players={this.state.players}
              selectPlayer={this.selectPlayer}
            />
          </Route>
          <Redirect from="/" to={paths["select-players"]} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
