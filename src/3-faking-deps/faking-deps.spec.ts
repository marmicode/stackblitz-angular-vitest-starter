import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { createProduct } from '../product/product';
import {
  ProductRepositoryFake,
  provideProductRepositoryFake,
} from '../product/product-repository.fake';
import { ProductSearch } from '../product/product-search';

describe('ProductSearch', () => {
  it('loads all products', async () => {
    mountProductSearch();

    await expect.element(page.getByRole('link')).toHaveLength(3);
  });

  it('filters products', async () => {
    mountProductSearch();

    await page.getByRole('textbox').fill('Workshop');

    await expect
      .element(page.getByRole('link'))
      .toHaveTextContent('Pragmatic Angular Testing Workshop');
  });

  it('shows "no products found" when results are empty', async () => {
    mountProductSearch();

    await page.getByRole('textbox').fill('Something boring');

    await expect
      .element(page.getByRole('alert'))
      .toHaveTextContent('No products found');
  });
});

function mountProductSearch() {
  /* Prefer fakes: https://cookbook.marmicode.io/angular/testing/fake-it-till-you-mock-it */
  TestBed.configureTestingModule({
    providers: [provideProductRepositoryFake()],
  });

  TestBed.inject(ProductRepositoryFake).configure({
    products: [
      createProduct({
        id: 'prd_pragmatic-angular-testing-workshop',
        type: 'workshop',
        title: 'Pragmatic Angular Testing Workshop',
        url: 'https://marmicode.io/workshops/pragmatic-angular-testing-full-course',
        imageUrl:
          'https://marmicode.io/media/pragmatic-angular-testing-YBBZFWNI.webp',
      }),
      createProduct({
        id: 'prd_pragmatic-angular-testing-video-course',
        type: 'course',
        title: 'Pragmatic Angular Testing Video Course',
        url: 'https://courses.marmicode.io/',
        imageUrl:
          'https://import.cdn.thinkific.com/467944%2Fcustom_site_themes%2Fid%2FzfMGCyr9TvWXPtp4EBuI_course.png?width=600&dpr=2',
      }),
      createProduct({
        id: 'prd_pragmatic-angular-testing-cookbook',
        type: 'cookbook',
        title: 'Pragmatic Angular Testing Cookbook',
        url: 'https://cookbook.marmicode.io',
        imageUrl: 'https://cookbook.marmicode.io/img/hero.png',
      }),
    ],
  });

  TestBed.createComponent(ProductSearch);
}
