export interface Product {
  id: string;
  title: string;
  description: string;
  price: number | string;
  condition: string;
  category: string;
  sku: string;
  images: string[];
}

export interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  fetchProducts: (category?: string) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  getProductById: (id: string) => Product | string[];
  // getProductById: (id: string) => Product | undefined;
}
