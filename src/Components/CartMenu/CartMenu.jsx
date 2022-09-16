import React from "react";
import CartItem from "../Backet/components/CartItem/CartItem";
import Button from "../Button/Button";
import { calcTotalPrice } from "../Header/utils";
import styles from "./CartMenu.module.css";

const CartMenu = ({ items, onClick }) => {
  return (
    <>
      <div className={styles.cartMenu}>
        <ul className={styles.cartMenuList}>
          {items.length > 0
            ? items.map((game) => (
                <CartItem
                  key={game.title}
                  price={game.price}
                  title={game.title}
                  id={game.id}
                />
              ))
            : "Корзина пуста"}
        </ul>
        {items.length > 0 ? (
          <div className={styles.cartMenuArrange}>
            <div className={styles.cartMenuTotalPrice}>
              <span>Итого: </span>
              <span>{calcTotalPrice(items)} руб.</span>
              <Button type="primary" size="m" onClick={onClick}>
                Оформить заказ
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CartMenu;
