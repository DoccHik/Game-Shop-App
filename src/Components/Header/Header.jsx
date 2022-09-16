import React from "react";
import { Link } from "react-router-dom";
import Basket from "../Backet/Basket";
import styles from "./Header.module.css";

const Header = ({ game }) => {
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.headerMenu}>
          <li className={styles.headerMenuItem}>
            <Link to="/game-store">Game-store</Link>
          </li>
          <div className={styles.headerMenuBasket}>
            <div className={styles.headerMenuBasketLink}>
              <Link to="/orders">
                <Basket game={game} />
              </Link>
            </div>
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
