import { useState } from "react";
import "./App.css";
import Panier from "./components/Panier";
import Product from "./components/product";
import uuidGenerator from "./tools/uuid-generator";

const listProduct = [
  {
    id: uuidGenerator(),
    name: "Carotte",
    price: 2,
    quantity: 12,
  },
  {
    id: uuidGenerator(),
    name: "Patate",
    price: 3,
    quantity: 0,
  },
  {
    id: uuidGenerator(),
    name: "Poire",
    price: 10,
    quantity: 3,
  },
];

const getTotal = () => {
  let total = 0;
  for (const product of listProduct) {
    total += product.price * product.quantity;
  }

  return total;
};

function App() {
  const [total, setTotal] = useState(getTotal());

  const sumTotal = (action, price) => {
    console.log(action, price);
    if (action === "Ajouter") {
      setTotal(total + price);
    } else {
      setTotal(total - price < 0 ? total : total - price);
    }
    console.log("Bonjour Damien Jean");
  };

  return (
    <div>
      {listProduct.map((element) => (
        <Product
          key={element.id}
          name={element.name}
          price={element.price}
          initQuantity={element.quantity}
          callback={sumTotal}
        />
      ))}
      {<Panier price={total} />}
    </div>
  );
}

export default App;
