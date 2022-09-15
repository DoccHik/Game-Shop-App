import React from "react";
import Button from "../../../Button/Button";

import styles from "./GameBuy.module.css";

const GameBuy = ({ game }) => {
  return (
    <>
      <div className={styles.gameBuy}>
        <span className={styles.gameBuyPrice}>{game.price} руб.</span>
        <Button type="primary" onClick={() => null}>
          В Корзину
        </Button>
      </div>
    </>
  );
};

export default GameBuy;
