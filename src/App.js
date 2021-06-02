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

  const apiProducts = async () => {
    const response = await api.get("/products");
    if (response.data) setProducts(response.data);
  };

  useEffect(() => {
    apiProducts();
  }, []);

  const updateProduct = async (data) => {
    await api.put(`/products/${data.id}`, data);
    setProducts(apiProducts());
  };

  const addProduct = async (data) => {
    await api.post("/products", data);
    setProducts(apiProducts());
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
