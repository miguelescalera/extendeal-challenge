import React from "react";

export const Loading = () => {
  return (
    <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 bg-gray-900 overflow-hidden opacity-75 flex flex-col items-center justify-center">
      <div class="loader ease-linear rounded-full border-8 border-t-6 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 class="text-center text-black text-xl font-semibold">Loading...</h2>
    </div>
  );
};
