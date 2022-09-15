import React from "react";

import styles from "./Basket.module.css";

import { BiCartAlt } from "react-icons/bi";

const Basket = () => {
  return (
    <div className={styles.basket}>
      <BiCartAlt size={25} />
    </div>
  );
};

export default Basket;
