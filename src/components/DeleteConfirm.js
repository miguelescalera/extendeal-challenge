import React from "react";

export const DeleteConfirm = ({ remove, setRemove }) => {
  return (
    <section class="flex m-auto h-screen w-screen fixed top-0 bg-gray-200 bg-opacity-25 z-50">
      <div class="container px-auto mx-auto flex my-auto shadow-lg">
        <div class="w-1/2 bg-white shadow-md rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative md:m-auto z-10">
          <div class="flex justify-end w-full">
            <svg
              onClick={() => setRemove(!remove)}
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 class="text-black text-lg mb-1 font-medium title-font justify-center flex">
            Eliminar NOMBRE DEL PRODUCTO ?
          </h2>
          <button
            onClick={() => setRemove(!remove)}
            class="mx-auto w-1/2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Confirmar
          </button>
        </div>
      </div>
    </section>
  );
};
