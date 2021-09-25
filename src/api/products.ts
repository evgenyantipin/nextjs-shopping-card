
import fetch from "isomorphic-unfetch";

export const getProducts = (page: string) => {
  return fetch(`http://localhost:3000/product?page=${page}`).then((r) => r.json());
};

export const getProduct = (id: string) => {
  return fetch(`http://localhost:3000/product/${id}`).then((r) => r.json());
};