import { fetchAPI } from './api';

export interface Product {
  _id?: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
}

export const productService = {
  // Get all products
  async getAllProducts(): Promise<Product[]> {
    return fetchAPI('/products');
  },

  // Get single product
  async getProduct(id: string): Promise<Product> {
    return fetchAPI(`/products/${id}`);
  },

  // Create product
  async createProduct(product: Omit<Product, '_id'>): Promise<Product> {
    return fetchAPI('/products', {
      method: 'POST',
      body: JSON.stringify(product),
    });
  },

  // Update product
  async updateProduct(id: string, product: Partial<Product>): Promise<Product> {
    return fetchAPI(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
    });
  },

  // Delete product
  async deleteProduct(id: string): Promise<void> {
    return fetchAPI(`/products/${id}`, {
      method: 'DELETE',
    });
  },
};
