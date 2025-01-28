import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

export const ProductDetail = () => {
  const { id } = useParams();

  const fetchData = useQuery({
    queryKey: ["product", id], // id'yi query key'e dahil ediyoruz
    queryFn: async () =>
      await axios
        .get(`https://jsonplaceholder.org/posts/${id}`) // id'ye göre veri çekiyoruz
        .then((res) => res.data),
    staleTime: Infinity,
  });

  const { data, isLoading, error } = fetchData;

  if (isLoading) return "Yükleniyor...";
  if (error) return "Hata..." + error.message;

  return (
    <div>
      <h1>Ürün Detay</h1>
      <h2>{data.title}</h2>
      <p>{data.image}</p> {/* Detayları burada göstereceğiz */}
    </div>
  );
};
