import { outputBinding } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, test, vi } from 'vitest';
import { page } from 'vitest/browser';
import { ProductFilter } from '../product/product-filter';

describe('ProductFilter', () => {
  test('emits keywords', async () => {
    const keywordsSpy = vi.fn<(keywords: string) => void>();

    TestBed.createComponent(ProductFilter, {
      bindings: [outputBinding('keywordsChange', keywordsSpy)],
    });

    await page.getByRole('textbox').fill('Course');

    await expect.poll(() => keywordsSpy).toHaveBeenLastCalledWith('Course');
  });
});
