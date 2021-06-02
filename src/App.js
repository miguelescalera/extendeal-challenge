import React, { useState, useEffect } from "react";
import api from "./Utils/axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Products } from "./components/Products";
import { EditProduct } from "./components/EditProduct";
import { AddProduct } from "./components/AddProduct";

export default function App() {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const apiProducts = async () => {
      const response = await api.get("/products");
      if (response.data) setProducts(response.data);
    };
    apiProducts();
  }, []);

  // Problema con la actualizacion de datos
  const updateProduct = async (data) => {
    const response = await api.put(`/products/${data.id}`, data);
    setProducts(
      products.map((product) => {
        return product.id === response.id
          ? { ...products, product: response.data }
          : data;
      })
    );
    console.log(products);
  };

  // porblema con la carga del producto. no se muestra imagen necesita un refresh
  const addProduct = async (data) => {
    const response = await api.post("/products", data);
    setProducts([...products, response]);
  };

  const removeProduct = async (id) => {
    await api.delete(`/products/${id}`);
    const newProductList = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(newProductList);
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Products
              {...props}
              products={products}
              removeProduct={removeProduct}
            />
          )}
        />
        <Route
          path="/edit"
          render={(props) => (
            <EditProduct {...props} updateProduct={updateProduct} />
          )}
        />
        <Route
          path="/add"
          render={(props) => <AddProduct {...props} addProduct={addProduct} />}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
