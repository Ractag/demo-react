import uuidGenerator from "../tools/uuid-generator";
export default class ProductModel {
  id;
  name;
  price;
  quantity;
  img;

  constructor(name, price, quantity = 0, img) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.id = uuidGenerator();
    this.img = img;
  }
}
