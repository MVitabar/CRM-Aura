export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  state: string;
  category: string;
  freeShipping: string;
  images: string[];
}

export interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
}
