import React from "react";

export const Modal = ({ setOpen, open }) => {
  return (
    <section class="flex m-auto h-screen w-screen fixed top-0 bg-gray-200 bg-opacity-25 z-50">
      <div class="container px-auto mx-auto flex my-auto shadow-lg">
        <div class="w-full bg-white shadow-md rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative md:m-auto z-10">
          <div class="flex justify-end w-full">
            <svg
              onClick={() => setOpen(!open)}
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
            Modificacion de Datos
          </h2>
          <div class="relative mb-4">
            <label htmlFor="name" class="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label htmlFor="price" class="leading-7 text-sm text-gray-400">
              Precio
            </label>
            <input
              type="text"
              id="price"
              name="price"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label htmlFor="imgUrl" class="leading-7 text-sm text-gray-400">
              Imagen Url
            </label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label
              htmlFor="description"
              class="leading-7 text-sm text-gray-400"
            >
              Descripcion
            </label>
            <textarea
              id="description"
              name="description"
              class="w-full h-20 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button class="mx-auto w-1/2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </div>
    </section>
  );
};
