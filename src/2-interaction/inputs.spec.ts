import { inputBinding } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, test } from 'vitest';
import { page } from 'vitest/browser';
import { createProduct } from '../product/product';
import { ProductPreview } from '../product/product-preview';

describe('ProductPreview', () => {
  test('displays product title', async () => {
    mountProductPreview();

    await expect
      .element(page.getByRole('heading'))
      .toHaveTextContent('Pragmatic Angular Testing Workshop');
  });

  test("displays default button label 'REGISTER NOW'", async () => {
    mountProductPreview();

    await expect
      .element(page.getByRole('button'))
      .toHaveTextContent('REGISTER NOW');
  });

  test('navigates to workshop page', async () => {
    mountProductPreview();

    await expect
      .element(page.getByRole('link'))
      .toHaveAttribute(
        'href',
        'https://marmicode.io/workshops/pragmatic-angular-testing-full-course',
      );
  });
});

function mountProductPreview() {
  return TestBed.createComponent(ProductPreview, {
    bindings: [
      inputBinding('product', () =>
        createProduct({
          id: 'prd_pragmatic-angular-testing-workshop',
          type: 'workshop',
          title: 'Pragmatic Angular Testing Workshop',
          url: 'https://marmicode.io/workshops/pragmatic-angular-testing-full-course',
          imageUrl:
            'https://marmicode.io/media/pragmatic-angular-testing-YBBZFWNI.webp',
        }),
      ),
    ],
  });
}
