/* tslint:disable:no-unused-variable */
import { JosoromaApp } from './josoroma.app';

import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  inject, injectAsync, TestComponentBuilder
} from 'angular2/testing';

import { By }             from 'angular2/platform/browser';
import { provide }        from 'angular2/core';
import { ViewMetadata }   from 'angular2/core';
import { PromiseWrapper } from 'angular2/src/facade/promise';

interface Done {
  (): void;
  fail: (err: any) => void;
}

// SPECS

describe('JosoromaApp with new', function () {
    it('should instantiate component', () => {
      expect(new JosoromaApp()).not.toBeNull('Not Null!');
    });
});
