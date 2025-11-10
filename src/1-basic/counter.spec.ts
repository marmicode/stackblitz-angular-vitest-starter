import { TestBed } from "@angular/core/testing";
import { describe, expect, test } from "vitest";
import { Counter } from "./counter";
import { page } from "vitest/browser";

describe("Counter", () => {
  test("increments", async () => {
    TestBed.createComponent(Counter);

    await page.getByRole("button", { name: "Increment" }).click();

    await expect.element(page.getByRole("paragraph")).toHaveTextContent("1");
  });
});
