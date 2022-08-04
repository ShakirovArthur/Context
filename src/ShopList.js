import "./styles.css";
import { useState, useContext } from "react";
import ShopItem from "./ShopItem.js";
import { colorContext } from "./App.js";

export default function ShopList() {
  const context = useContext(colorContext);

  const [list] = useState(["Хлеб", "Молоко"]);

  return (
    <div className="ShopList" style={{ color: context }}>
      <p>Список покупок</p>
      <ul>
        {list.map((item) => (
          <ShopItem title={item} />
        ))}
      </ul>
    </div>
  );
}
