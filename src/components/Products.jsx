import React from "react";
import Placeholder from "./Placeholder";
import Product from "./Product";

function Products({ loading, products, skeletonLength, id }) {
  const skeletonArray = new Array(skeletonLength).fill("data");
  return (
    <div>
      {loading ? (
        <div className='p-4 flex flex-wrap items-center'>
          {skeletonArray.map((item, index) => (
            <Placeholder key={index} />
          ))}
        </div>
      ) : (
        <div className='p-4 flex flex-wrap items-center'>
          {products
            .filter((product) => product.id !== Number(id))
            .map((product) => (
              <Product
                key={product.id}
                id={product.id}
                imageURL={product.image}
                category={product.category}
                price={product.price}
                title={product.title}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Products;
