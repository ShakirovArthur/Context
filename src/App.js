import "./styles.css";
import { useState, createContext } from "react";
import ShopList from "./ShopList.js";

const colorContext = createContext("black");
const { Provider } = colorContext;

export default function App() {
  const [color, setColor] = useState("black");
  return (
    <div className="App">
      <Provider value={color}>
        <ShopList />
        <button onClick={() => setColor("green")}>Зеленый</button>
        <button onClick={() => setColor("red")}>Красный</button>
        <button onClick={() => setColor("blue")}>Синий</button>
      </Provider>
    </div>
  );
}

export { colorContext };
