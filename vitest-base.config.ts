import { defineConfig } from "vitest/config";

const teardown = process.env["TEARDOWN"] !== "false";

export default defineConfig({
  test: {
    /* Do not teardon so that we can debug manually in the browser. */
    setupFiles: teardown ? [] : ["src/test-setup/no-teardown.ts"],
    testTimeout: 3_000,
  },
});
