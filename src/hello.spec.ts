import { expect, test } from "vitest";
import { page } from "vitest/browser";

test("hello", async () => {
  document.body.innerHTML = "<h1>Hello</h1>";
  await expect.element(page.getByRole("heading")).toHaveTextContent("Hello");
});
