import React from "react";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { Product } from "./Product";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProductList = () => {
  const fetchData = useQuery({
    queryKey: ["posts"],
    queryFn: async () =>
      await axios
        .get("https://jsonplaceholder.org/posts")
        .then((res) => res.data),
    staleTime: Infinity,
  });
  const { data, isLoading, error } = fetchData;

  if (isLoading) return "yükleniyor...";
  if (error) return "Hata..." + error.message;

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/productdetail/${id}`);
  };
  return (
    <div>
      <h1>Ürünler</h1>
      {data?.map((dt, i) => (
        <Product
          key={i}
          title={dt.title}
          image={dt.image}
          onClick={() => handleClick(dt.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
