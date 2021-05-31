import axios from "axios";

// CONSTANS

const dataInicial = {
  array: [],
};

// TYPE

const GET_PRODUCTS = "GET_PRODUCTS";

// REDUCER

export default function productsReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

// ACTIONS

export const getProducts = () => (dispatch) => {
  try {
    axios.get("http://localhost:3004/products").then((res) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      })
    );
  } catch (err) {
    console.log("ERROR :( ", err);
  }
};
