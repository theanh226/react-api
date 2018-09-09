
var randomstring = require("randomstring");
var initialState = [
  {
    id: 1,
    code: randomstring.generate(7),
    name: "macbook pro",
    description: "made by Apple",
    price: 2000,
    status: true
  },
  {
    id: 2,
    code: randomstring.generate(7),
    name: "Lenovo",
    description: "made by Lenovo",
    price: 1800,
    status: false
  },
  {
    id: 3,
    code: randomstring.generate(7),
    name: "Samsung",
    description: "made by Samsung",
    price: 1000,
    status: true
  }
];

const ProductsRD = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default ProductsRD;
