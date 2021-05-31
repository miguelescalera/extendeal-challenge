import React from "react";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import { Products } from "./components/Products";

export default function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
}
