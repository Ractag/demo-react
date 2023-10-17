import { useState } from "react";
import Bouton from "./Bouton";

function Product({ product, callback }) {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleClick = (value) => {
    console.log("enfant");
    console.log(value);
    setQuantity(quantity + value < 0 ? quantity : quantity + value);
    callback(value < 0 ? "Supprimer" : "Ajouter", product.id);
    // if (event.target.textContent === "+") {
    //   setQuantity(quantity + 1);
    //   callback("Ajouter", product.id);
    // } else {
    //   setQuantity(quantity - 1 < 0 ? 0 : quantity - 1);
    //   callback("Supprimer", product.id);
    // }
  };

  return (
    <div>
      <img style={{ maxWidth: 250 }} src={product.img} />
      <h3>
        {product.name} {product.price}€ Quantité: {quantity}
        {/* <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>+</button> */}
        <Bouton
          backgroundColor="red"
          disabled={quantity <= 0}
          texte={"Enlever"}
          clicked={() => handleClick(-1)}
        />
        <Bouton texte={"Ajouter"} clicked={() => handleClick(1)} />
      </h3>
    </div>
  );
}

export default Product;
