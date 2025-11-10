import { defineConfig } from 'vitest/config';

const teardown = process.env['TEARDOWN'] !== 'false';

export default defineConfig({
  test: {
    sequence: { setupFiles: 'list' },
    /* Do not teardown so that we can debug manually in the browser. */
    setupFiles: teardown ? [] : ['src/test-setup/no-teardown.ts'],
    testTimeout: 3_000,
  },
});
