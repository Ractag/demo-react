import { useState } from "react";

function Promo({ finalPrice }) {
  const [clicked, setClicked] = useState(false);
  const [total, setTotal] = useState(undefined);

  const handlePrice = () => {
    if (clicked) {
      return;
    }

    setTotal((finalPrice * 0.9).toFixed(2));
    setClicked(true);
    finalPrice = (total * 0.9).toFixed(2);
  };
  return (
    <div>
      <button disabled={clicked} onClick={handlePrice}>
        Promo Wilders
      </button>

      <h3>{total !== undefined ? total : finalPrice}</h3>
    </div>
  );
}

export default Promo;
