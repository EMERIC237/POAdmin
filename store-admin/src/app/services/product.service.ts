import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.apiURL);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.apiURL, product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.apiURL}/${product.id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete<Product>(`${this.apiURL}/${id}`);
  }
}
