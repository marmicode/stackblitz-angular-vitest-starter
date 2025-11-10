import { TestBed } from "@angular/core/testing";

import { beforeEach } from "vitest";

/**
 * @see https://github.com/angular/angular-cli/issues/31733
 */
beforeEach(() => {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
});
