import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { Field, form } from '@angular/forms/signals';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-filter',
  imports: [Field],
  template: `
    <input [field]="keywordsField" type="text" placeholder="Search" />
  `,
  styles: `
    :host {
      display: flex;
      width: 100%;
    }

    input {
      flex: 1;
    }
  `,
})
export class ProductFilter {
  keywords = model('');
  keywordsField = form(this.keywords);
}
