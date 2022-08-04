import "./styles.css";
import { useContext } from "react";
import { colorContext } from "./App.js";
export default function ShopItem({ title }) {
  const context = useContext(colorContext);

  return (
    <li className="ShopItem" style={{ color: context }}>
      {title}
    </li>
  );
}
