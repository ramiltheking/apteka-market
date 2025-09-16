import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  // Избраное
  const [favorite, setFavorite] = useState([1, 2]);

  // Корзина
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Французский БАГЕТ свежеиспечененный",
      desc: "Французский БАГЕТ свежеиспечененный из муки вальяжной пшеницы",
      img: "/images/carousel_img2.png",
      price: 369.01,
      weight: 200.0,
      piece: true,
      hit: true,
      discount: {
        value: true,
        discount_value: -15,
        old_price: 1099.99,
      },
      features: [
        "Без сахара",
        "Без ГМО",
        "Подходит для вегетарианцев",
        "Повышает работоспособность",
      ],
      value: 2,
    },
    {
      id: 2,
      name: "Французский БАГЕТ свежеиспечененный",
      desc: "Французский БАГЕТ свежеиспечененный из муки вальяжной пшеницы",
      img: "/images/carousel_img1.png",
      price: 369.0,
      weight: 200.0,
      piece: true,
      hit: true,
      discount: {
        value: true,
        discount_value: -15,
        old_price: 1099.99,
      },
      features: [
        "Без сахара",
        "Без ГМО",
        "Подходит для вегетарианцев",
        "Повышает работоспособность",
      ],
      value: 2,
    },
  ]);

  // Доставка
  const [delivery, setDelivery] = useState({
    mode: false,
    addr: "г. Петропавловск, п. Прокофьева, ул. Жамбыла Жабаева, д. 142б",
    time: 30,
  });

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        delivery,
        setDelivery,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
