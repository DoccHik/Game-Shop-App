import React from "react";
import styles from "./Basket.module.css";
import { BiCartAlt, BiRuble } from "react-icons/bi";
import { useSelector } from "react-redux";
import CartMenu from "../CartMenu/CartMenu";
import { calcTotalPrice } from "../Header/utils";
import { useState } from "react";
import ItemsInCart from "./components/ItemsInCart";

const Basket = () => {
  const [isCurtMenuVissble, setIsCurtMenuVissible] = useState(false);

  const items = useSelector((state) => state.cart.itemsInCart);
  console.log(items);
  const totalPrice = calcTotalPrice(items);
  return (
    <div
      className={styles.basket}
      onClick={() => setIsCurtMenuVissible(!isCurtMenuVissble)}
    >
      <ItemsInCart quantity={items.length} />
      <BiCartAlt size={25} />
      {totalPrice > 0 ? (
        <span className={styles.busketSum}>
          {totalPrice}
          <BiRuble size={20} />
        </span>
      ) : null}
      {isCurtMenuVissble && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};

export default Basket;

// todo https://youtu.be/q6qbBbFk4w4?list=PL1EApzIeyBXY4JOnYkusYnb1dM3mP3ojN&t=2322
