import { useEffect, useState } from "react";

import Product from "./Product";
import Pagination from "./Pagination";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );
        const products = await response.json();
        setProducts(products.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts().catch((e) => {
      console.log(e);
    });
  }, []);
  const next = () => {
    if (page < parseInt(products.length / 10)) setPage((prev) => prev + 1);
  };
  const previous = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };
  const specific = (i) => {
    setPage(i);
  };
  console.log(parseInt(products.length / 10), products.length);
  return (
    <>
      <div className="products">
        {products.length !== 0 &&
          products
            .slice(page * 10 - 10, page * 10)
            .map((product) => <Product key={product.id} product={product} />)}
      </div>
      <Pagination
        totalPages={parseInt(products.length / 10)}
        next={next}
        previous={previous}
        specific={specific}
      />
    </>
  );
}
