import { test, describe, expect } from 'vitest';
import comparePlainJSONs from 'src/utils';
import HexletCode from 'src/classes/hexletCode';
import type { Template } from 'src/types';
import formOutput from 'src/__fixtures__/formOutput';
import testJson1 from 'src/__fixtures__/testJson1.json';
import testJson2 from 'src/__fixtures__/testJson2.json';
import testJson3 from 'src/__fixtures__/testJson3.json';
import testJson4 from 'src/__fixtures__/testJson4.json';

describe('Utils testing', () => {
  test('comparePlainJSONs', () => {
    expect(comparePlainJSONs(testJson1, testJson2)).toBeTruthy();
    expect(comparePlainJSONs(testJson1, testJson3)).toBeFalsy();
    expect(comparePlainJSONs(testJson1, testJson4)).toBeFalsy();
  });
});

describe('HexletCode class testing', () => {
  test('creating form tag', () => {
    const template: Template = { name: 'rob', job: 'hexlet', gender: 'm' };

    expect(HexletCode.formFor(template, {}, () => {})).toEqual(formOutput.formWithoutProps);
    expect(HexletCode.formFor(template, { url: '/users' }, () => {})).toEqual(formOutput.formWithUrl);
  });
});
