"use client";

import React from "react";
import Filters from "../layouts/Filters";
import CustomPagination from "../layouts/CustomPagination";

import ProductItem from "./ProductItem";

const ListProducts = ({ data }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-screen-xl px-6">
        <div className="flex flex-col md:flex-row -mx-6">
          <Filters />

          <main className="md:flex-row -mx-6">
            {data?.products?.map((product) => (
              <ProductItem key={product?._id} product={product} />
            ))}

            <CustomPagination
              resPerPage={data?.resPerPage}
              productsCount={data?.filteredProductsCount}
            />

          </main>
        </div>
      </div>
    </section>
    
  
  );
};

export default ListProducts;