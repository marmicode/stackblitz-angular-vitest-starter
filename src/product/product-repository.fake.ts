import {
  EnvironmentProviders,
  Injectable,
  makeEnvironmentProviders,
  Resource,
  resource,
  Signal,
} from '@angular/core';
import { Product } from './product';
import { ProductRepository } from './product-repository';

@Injectable()
export class ProductRepositoryFake implements ProductRepository {
  private _products: Product[] = [];

  configure({ products }: { products: Product[] }): void {
    this._products = products;
  }

  searchProducts(keywords?: Signal<string>): Resource<Product[] | undefined> {
    return resource({
      params: () => ({ keywords: keywords?.() }),
      loader: async () =>
        this._products.filter((p) =>
          p.title.toLowerCase().includes(keywords?.()?.toLowerCase() ?? ''),
        ),
    });
  }
}

export function provideProductRepositoryFake(): EnvironmentProviders {
  return makeEnvironmentProviders([
    ProductRepositoryFake,
    { provide: ProductRepository, useExisting: ProductRepositoryFake },
  ]);
}
