import { useState } from "react";
import "./App.css";
import Panier from "./components/Panier";
import Product from "./components/Product";
import uuidGenerator from "./tools/uuid-generator";
import Promo from "./components/Promo";

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
  {
    id: uuidGenerator(),
    name: "potiron",
    price: 3,
    quantity: 0,
  },
  {
    id: uuidGenerator(),
    name: "laitue",
    price: 10,
    quantity: 3,
  },
  {
    id: uuidGenerator(),
    name: "fraise",
    price: 3,
    quantity: 0,
  },
  {
    id: uuidGenerator(),
    name: "ail",
    price: 0.5,
    quantity: 0,
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
  // console.log(listProduct)
  const [total, setTotal] = useState(getTotal());

  const sumTotal = (action, id) => {
    console.log(action, id);
    for (let i = 0; i < listProduct.length; ++i) {
      if(id === listProduct[i].id) {
        console.log(listProduct[i])
        if (action === "Ajouter") {
          ++listProduct[i].quantity;
        } else if (action === "Supprimer" && listProduct[i].quantity > 0) {
          --listProduct[i].quantity;
        }
      }

      setTotal(getTotal());
    }
  };

  return (
    <div>
      {listProduct.map((element) => (
        <Product
          key={element.id}
          id={element.id}
          name={element.name}
          price={element.price}
          initQuantity={element.quantity}
          callback={sumTotal}
        />
      ))}
      {<Panier price={total} />}
      <Promo finalPrice={total}/>
    </div>
  );
}

export default App;
