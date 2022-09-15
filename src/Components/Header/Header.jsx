import React from "react";
import { Link } from "react-router-dom";
import Basket from "../Backet/Basket";
import styles from "./Header.module.css";

import { BiRuble } from "react-icons/bi";

const Header = () => {
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
                <Basket />
              </Link>
            </div>
            <span className={styles.headerMenuBusketSum}>
              0 <BiRuble />
            </span>
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
