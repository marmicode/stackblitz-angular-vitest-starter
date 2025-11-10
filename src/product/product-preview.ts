import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { Product } from './product';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-preview',
  template: `
    <a class="card" [href]="product().url" [attr.aria-label]="product().title">
      <img class="image" [src]="product().imageUrl" />
      <h3 class="title">
        {{ product().title }}
      </h3>

      <button class="register-btn">{{ buttonLabel() }}</button>
    </a>
  `,
  styles: `
    :host {
      display: block;
    }

    .card {
      display: block;
      margin: 2rem 0;
      text-align: center;
      overflow: hidden;
      border-radius: 1rem;
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
      text-decoration: none;
      color: inherit;
      transition:
        transform 200ms ease,
        box-shadow 200ms ease;
    }

    .image {
      width: 100%;
      object-fit: cover;
    }

    .title {
      margin: 1rem 0;
      font-size: 1.5rem;
      font-weight: 600;
      color: #0f172a;
    }

    .register-btn {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: #380030;
      color: white;
      border: none;
    }
  `,
})
export class ProductPreview {
  product = input.required<Product>();
  buttonLabel = computed(() => {
    switch (this.product().type) {
      case 'course':
        return 'ENROLL NOW';
      case 'cookbook':
        return 'READ NOW';
      default:
        return 'REGISTER NOW';
    }
  });
}
