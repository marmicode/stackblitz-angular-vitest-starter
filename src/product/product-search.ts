import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ProductFilter } from './product-filter';
import { ProductPreview } from './product-preview';
import { ProductRepository } from './product-repository';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-search',
  imports: [ProductFilter, ProductPreview],
  template: `
    <app-product-filter (keywordsChange)="keywords.set($event)" />

    @for (product of products.value(); track product.id) {
      <app-product-preview [product]="product" />
    } @empty {
      <div role="alert">No products found</div>
    }
  `,
})
export class ProductSearch {
  keywords = signal('');
  products = inject(ProductRepository).searchProducts(
    this.keywords.asReadonly(),
  );
}
