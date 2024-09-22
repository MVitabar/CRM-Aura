export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  discount: string;
  category: string;
  freeShipping: string;
  images: string[];
}

export interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
}
