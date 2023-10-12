import { useState } from "react";

function Product({ name, price, callback, initQuantity, id }) {
  const [quantity, setQuantity] = useState(initQuantity);

  const handleClick = (event) => {
    if (event.target.textContent === "+") {
      setQuantity(quantity + 1);
      callback("Ajouter", id);
    } else {
      setQuantity(quantity - 1 < 0 ? 0 : quantity - 1);
      callback("Supprimer", id);
    }
  };

  return (
    <div>
      <h3>
        {name} {price}€ Quantité: {quantity}<button onClick={handleClick}>-</button>
      <button onClick={handleClick}>+</button>
      </h3>
      
    </div>
  );
}

export default Product;
