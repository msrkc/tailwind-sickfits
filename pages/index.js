// import Head from "next/head";
import allProducts from "../data/allProducts";

export default function Home() {
  return (
    <main className="max-w-1000 mx-auto p-6 mb-4">
      <Pagination />
      {/* product list */}
      <ul className="mt-5 grid lg:grid-cols-2 gap-16 ">
        {allProducts.map((product, i) => (
          <li
            key={product.name}
            className="max-w-lg mx-auto shadow-bs relative border-gray-200 flex flex-col"
          >
            <p className="absolute -top-1 -right-1 bg-sick text-white text-3xl font-semibold p-1.5 leading-none transform rotate-3">
              {product.price}
            </p>
            <img
              src={product.img}
              alt={product.name}
              className="h-100 w-full object-cover object-top"
            />
            <h2 className="-mt-8 text-center transform -skew-x-5 -rotate-1 ">
              <a
                href="#"
                className="px-3 bg-sick text-white text-4.5xl leading-tight hover:underline text-shadow"
              >
                {product.name}
              </a>
            </h2>
            <p className="py-4 px-8 leading-8 flex-1">{product.description}</p>
            <div className="grid grid-cols-3 border-t border-gray-300 divide-x divide-gray-300">
              <button className="p-3 hover:bg-gray-100">Edit 🖊</button>
              <button className="p-3 hover:bg-gray-100">Add to cart 🛒</button>
              <button className="p-3 hover:bg-gray-100">Delete 😤</button>
            </div>
          </li>
        ))}
      </ul>
      <Pagination />
    </main>
  );
}

function Pagination() {
  return (
    <div className="text-center lg:text-left">
      <div className="mt-4 inline-flex border rounded-lg divide-x">
        <a
          href="#"
          aria-disabled="true"
          className="px-7 py-4 pointer-events-none text-gray-500"
        >
          &larr; Prev
        </a>
        <p className="px-7 py-4 hidden sm:block">Page 1 of 3</p>
        <p className="px-7 py-4 hidden sm:block">4 items total</p>
        <a
          href="#"
          aria-disabled="true"
          className="px-7 py-4 pointer-events-none text-gray-500"
        >
          Next &rarr;
        </a>
      </div>
    </div>
  );
}
