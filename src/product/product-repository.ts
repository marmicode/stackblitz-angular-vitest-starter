import { Injectable, resource, Resource, Signal } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductRepository {
  searchProducts(keywords?: Signal<string>): Resource<Product[] | undefined> {
    throw new Error('🚧 Work in progress!');
  }
}
