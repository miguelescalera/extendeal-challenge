import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

export const Products = (props) => {
  const products = props.products;
  const removeProduct = props.removeProduct;

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      {!products.length ? (
        <Loading />
      ) : (
        <div class="container px-5 py-24 mx-auto h-full w-screen">
          <div class="flex justify-center text-center w-full mb-20">
            <Link
              to="/add"
              class=" w-9/12 sm:w-1/3 md:w-1/4 flex justify-center items-center"
            >
              <button class="flex justify-center items-center p-5 w-full rounded  border-white border-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Agregar Producto
              </button>
            </Link>
          </div>
          <div class="flex flex-wrap -m-4 justify-center sm:justify-start">
            {products.map((product) => (
              <div key={product.id} class="p-4 lg:w-1/2">
                <div class="h-full w-full flex sm:flex-row  flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4"
                    src={product.imgUrl}
                  />
                  <div class="flex-grow w-full sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-white">
                      {product.name}
                    </h2>
                    <h3 class="text-gray-500 mb-3">${product.price}</h3>
                    <p class="mb-4">
                      {product.description
                        ? product.description.substring(0, 166)
                        : ""}
                      ...
                    </p>
                    <span class="inline-flex gap-2">
                      {/* boton para modificar datos */}
                      <Link
                        to={{
                          pathname: `/edit`,
                          state: { product: product },
                        }}
                      >
                        <button class="text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 hover:text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button>
                      </Link>
                      {/* boton para eliminar producto */}
                      <button
                        class="text-gray-500"
                        onClick={() => removeProduct(product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 hover:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
