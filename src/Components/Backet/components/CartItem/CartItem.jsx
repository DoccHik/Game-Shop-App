import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ title, price, id }) => {
  return (
    <>
      <li className={styles.cartItem}>
        {title}
        <div className={styles.cartItemPrice}>{price} руб.</div>
      </li>
    </>
  );
};

export default CartItem;
