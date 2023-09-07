import { Book } from "@/models/book";
import axios from "axios";
import React from "react";
export default function Home() {
  const url = `https://www.googleapis.com/books/v1/volumes?q=entendendo+algoritmos`;
  const baseUrl = "https://www.example.com/api";
  const params = new URLSearchParams();

  // Adicione parâmetros de consulta
  params.append("q", "harry potter");

  // Combine a URL base com os parâmetros
  const urlWithParams = `${baseUrl}?${params.toString()}`;

  console.log(urlWithParams);

  axios
    .get(url)
    .then((response) => console.log(response.data.items as Book[]))
    .catch((error) => console.error(error));

  return <div>Start</div>;
}
