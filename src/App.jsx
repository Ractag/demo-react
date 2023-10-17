import { useState } from "react";
import "./App.css";
import Panier from "./components/Panier";
import Product from "./components/Product";
import Promo from "./components/Promo";
import ProductModel from "./models/Product.model";

const listeCompleteProduits = [
  new ProductModel(
    "Carotte",
    2,
    10,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Carrots_on_Display.jpg/800px-Carrots_on_Display.jpg"
  ),
  new ProductModel(
    "Patate",
    3,
    12,
    "https://img-3.journaldesfemmes.fr/ZfmzxO5Kyg0e3j1URh4V8Mf3slc=/1500x/smart/097777a79f144a048f7008573f8584d5/ccmcms-jdf/27424516.jpg"
  ),
  new ProductModel(
    "Poire",
    10,
    12,
    "https://img-3.journaldesfemmes.fr/cWMSYzpj1IFPSROMn7T6ivQjXXA=/1500x/smart/168d76412e59495f94f3e650f220e60c/ccmcms-jdf/26059690.jpg"
  ),
  new ProductModel(
    "Potiron",
    3,
    3,
    "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_387,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/384/potirons_flickr_2941020389_a3be26a037_b.jpg"
  ),
  new ProductModel(
    "Laitue",
    10,
    2,
    "https://www.regal.fr/sites/art-de-vivre/files/laitue.jpg"
  ),
  new ProductModel(
    "Fraise",
    3,
    10,
    "https://cdn-s-www.ledauphine.com/images/0D290058-E714-4F25-9F8F-BDEAAA15ABEB/NW_raw/ce-sont-les-glucides-qui-conferent-a-la-fraise-son-gout-delicatement-sucre-photo-by-natasha-skov-on-unsplash-1648565758.jpg"
  ),
  new ProductModel(
    "Ail",
    0.5,
    6,
    "https://img.passeportsante.net/1200x675/2021-05-03/i101955-ail-nu.jpg"
  ),
];

const getTotal = () => {
  let total = 0;
  for (const product of listeCompleteProduits) {
    total += product.price * product.quantity;
  }

  return total;
};

function App() {
  // console.log(listeCompleteProduits)
  const [total, setTotal] = useState(getTotal());

  const sumTotal = (action, id) => {
    console.log("parent");
    console.log(action, id);
    for (let i = 0; i < listeCompleteProduits.length; ++i) {
      if (id === listeCompleteProduits[i].id) {
        console.log(listeCompleteProduits[i]);
        if (action === "Ajouter") {
          ++listeCompleteProduits[i].quantity;
        } else if (
          action === "Supprimer" &&
          listeCompleteProduits[i].quantity > 0
        ) {
          --listeCompleteProduits[i].quantity;
        }
      }

      setTotal(getTotal());
    }
  };
  return (
    <div>
      {/* {listeCompleteProduits.map((unProduitDansLeTableau) => (
        <Product
          key={unProduitDansLeTableau.id}
          callback={sumTotal}
          product={unProduitDansLeTableau}
        />
      ))} */}
      <Product callback={sumTotal} product={listeCompleteProduits[0]} />
      {<Panier price={total} />}
      {<Promo finalPrice={total} />}
    </div>
  );
}

export default App;
