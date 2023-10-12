import { useState } from "react";

function Promo({finalPrice}) {
    const [clicked, setClicked] = useState(false);
    const [total, setTotal] = useState(finalPrice)

    const handlePrice = () => {
        if (clicked) {
            return
        }

        setTotal((total * 0.9).toFixed(2))
        setClicked(true);
    }
  return (
    <div>
      <button disabled={clicked} onClick={handlePrice}>Promo Wilders</button>

      <h3>{total}</h3>
    </div>
  );
}

export default Promo;
