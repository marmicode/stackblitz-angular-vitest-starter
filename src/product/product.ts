export interface Product {
  id: string;
  type: 'cookbook' | 'course' | 'workshop';
  title: string;
  url: string;
  imageUrl: string;
}

export function createProduct(product: Product): Product {
  return product;
}
