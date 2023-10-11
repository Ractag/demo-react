import { useState } from "react";

function Product({ name, price, callback, initQuantity }) {
  const [quantity, setQuantity] = useState(initQuantity);

  const handleClick = (event) => {
    console.log("click");
    console.log(event.target.textContent);
    console.log(name, price);
    if (event.target.textContent === "+") {
      setQuantity(quantity + 1);
      callback("Ajouter", price);
    } else {
      setQuantity(quantity - 1 < 0 ? 0 : quantity - 1);
      callback("Supprimer", price);
    }
  };

  return (
    <div>
      <h1>
        {name} {price}€ Quantité: {quantity}
      </h1>
      <button onClick={handleClick}>-</button>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Product;
