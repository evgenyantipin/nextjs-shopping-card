export type Product = {
  id: number;
  model: string;
  name: string;
  price: string;
  priceInCents: number;
  special: number;
  description: string;
  image: string;
  sizes: string[];
};

export type ProductCart = {
  quantity: number;
  size: string;
}
