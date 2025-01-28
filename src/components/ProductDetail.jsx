import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

export const ProductDetail = () => {
  const { id } = useParams();

  const fetchData = useQuery({
    queryKey: ["products", id], // id'yi query key'e dahil ediyoruz
    queryFn: async () =>
      await axios
        .get(`https://fakestoreapi.com/products/${id}`) // id'ye göre veri çekiyoruz
        .then((res) => res.data),
    staleTime: Infinity,
  });

  const { data, isLoading, error } = fetchData;

  if (isLoading) return "Yükleniyor...";
  if (error) return "Hata..." + error.message;

  return (
    <div className="text-center">
      <h1 className="text-lg font-bold text-center ">Ürün Detay</h1>
      <h2 className="text-center">{data.title}</h2>
      <img
        className="justify-center justify-items-center size-64"
        src={data.image}
      />
      {/* Detayları burada göstereceğiz */}
    </div>
  );
};
