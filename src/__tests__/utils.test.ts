import { test, describe, expect } from 'vitest';
import comparePlainJSONs from 'src/utils';
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
