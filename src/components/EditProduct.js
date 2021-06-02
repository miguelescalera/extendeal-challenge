import React, { useState, useEffect } from "react";

export function EditProduct(props) {
  const [datos, setDatos] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    imgUrl: "",
  });
  useEffect(() => {
    const { name, price, description, imgUrl, id } =
      props.location.state.product;
    setDatos({ name, price, description, imgUrl, id });
  }, []);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    if (
      datos.name === "" ||
      datos.price === "" ||
      datos.imgUrl === "" ||
      datos.description === ""
    ) {
      alert("Todos los campos son requeridos");
      return;
    }
    const updateProduct = props.updateProduct;
    updateProduct(datos);
    setDatos({
      id: "",
      name: "",
      price: "",
      description: "",
      imgUrl: "",
    });
    props.history.push("/");
  };

  return (
    <section class="flex m-auto h-screen w-screen fixed top-0 bg-gray-200 bg-opacity-25 z-50">
      <div class="container px-auto mx-auto flex my-auto shadow-lg">
        <div class="w-full bg-white shadow-md rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative md:m-auto z-10">
          <h2 class="text-black text-lg mb-1 font-medium title-font justify-center flex">
            Modificar Datos
          </h2>
          <div class="relative mb-4">
            <label htmlFor="name" class="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              value={datos.name}
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label htmlFor="price" class="leading-7 text-sm text-gray-400">
              Precio
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="price"
              name="price"
              value={datos.price}
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label htmlFor="imgUrl" class="leading-7 text-sm text-gray-400">
              Imagen Url
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="imgUrl"
              name="imgUrl"
              value={datos.imgUrl}
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
              onChange={handleChange}
              id="description"
              name="description"
              value={datos.description}
              class="w-full h-20 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            onClick={() => handleUpdate()}
            class="mx-auto w-1/2 flex justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Actualizar
          </button>
        </div>
      </div>
    </section>
  );
}
