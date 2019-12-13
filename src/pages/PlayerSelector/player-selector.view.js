import React from "react";
import "./player-selector.style.scss";

export function PlayerSelectorView(props) {
  return (
    <div className="player-selector-page">
      <h2>Choose your champion</h2>
      <div className="players">
        {props.players.map(player => {
          let activeClass = "";
          if (player.active) activeClass = "active";
          if (player.inactive) activeClass = "inactive";
          return (
            <div
              className={`players-card ${activeClass}`}
              onClick={() => props.selectPlayer(player)}
            >
              <div
                className="thumbnail"
                style={{ backgroundImage: `url('${player.thumb}')` }}
              />
              <span>{player.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
