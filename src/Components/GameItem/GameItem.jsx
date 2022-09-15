import React from "react";
import GameBuy from "./components/GameBuy/GameBuy";
import GameCover from "./components/GameCover/GameCover";
import GameGenre from "./components/GameGenre/GameGenre";
import styles from "./GameItem.module.css";

const GameItem = ({ game }) => {
  return (
    <>
      <div className={styles.gameItem}>
        <GameCover image={game.image} />
        <div className={styles.gameItemDetails}>
          <span className={styles.gameItemTitle}>{game.title}</span>
          <div className={styles.gameItemGenre}>
            {game.genres.map((genre) => (
              <GameGenre genre={genre} key={genre} />
            ))}
          </div>
          <div className={styles.gameItemBuy}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameItem;
