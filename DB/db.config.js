const envConfig = require("../config");
const firebaseConfig = require("./firebase/firebase.config");

module.exports = {
  file: {
    products: "./DB/data/products.json",
    carts: "./DB/data/carts.json",
  },
  memory: {
    products: [],
    carts: [],
  },
  mongodb: {
    uri: `mongodb+srv://user:contrasena@cluster0.2d5zthf.mongodb.net/?retryWrites=true&w=majority`,
  },
  firebase: {
    credentials: firebaseConfig,
  },
};
