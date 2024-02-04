import { test, describe, expect } from 'vitest';
import comparePlainJSONs from '../src/utils';
import HexletCode from '../src/classes/hexletCode';
import type { Template } from '../src/types';
import formOutput from '../src/__fixtures__/formOutput';
import testJson1 from '../src/__fixtures__/testJson1.json';
import testJson2 from '../src/__fixtures__/testJson2.json';
import testJson3 from '../src/__fixtures__/testJson3.json';
import testJson4 from '../src/__fixtures__/testJson4.json';

describe('Utils testing', () => {
  test('comparePlainJSONs', () => {
    expect(comparePlainJSONs(testJson1, testJson2)).toBeTruthy();
    expect(comparePlainJSONs(testJson1, testJson3)).toBeFalsy();
    expect(comparePlainJSONs(testJson1, testJson4)).toBeFalsy();
  });
});

describe('HexletCode class testing', () => {
  const template: Template = { name: 'rob', job: 'hexlet' };

  test('creating form tag', () => {
    expect(HexletCode.formFor(template, {}, () => {})).toEqual(formOutput.formWithoutProps);
    expect(HexletCode.formFor(template, { url: '/users' }, () => {})).toEqual(formOutput.formWithUrl);
  });

  test('creating input and textarea', () => {
    expect(HexletCode.formFor(template, { method: 'post' }, (f: HexletCode) => {
      f.input('name');
      f.input('job', { as: 'textarea' });
    })).toEqual(formOutput.formWithInputAndTextarea);
  });

  test('creating with custom attrs', () => {
    expect(HexletCode.formFor(template, {}, (f) => {
      f.input('name', { class: 'user-input' });
      f.input('job');
    })).toEqual(formOutput.formWithInputCustomAttrs);
  });

  test('creating with default attr values', () => {
    expect(HexletCode.formFor(template, {}, (f) => f.input('job', { as: 'textarea' })))
      .toEqual(formOutput.formElementsWithDefaultAttrValues);
  });

  test('creating with overwritten attr values', () => {
    expect(HexletCode.formFor(template, { url: '#' }, (f) => f.input('job', { as: 'textarea', rows: 50, cols: 50 })))
      .toEqual(formOutput.formElemenetsWithOverwrittenValues);
  });

  test('creating with nonexistent form item', () => {
    expect(() => HexletCode.formFor(template, { url: '/users' }, (f) => {
      f.input('name');
      f.input('job', { as: 'textarea' });
      f.input('age');
    })).toThrowError('Error: Field \'age\' does not exist in the template.');
  });

  test('creating with submit', () => {
    expect(HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name');
      f.input('job');
      f.submit();
    })).toEqual(formOutput.formWithSubmit);
  });

  test('creating with named submit', () => {
    expect(HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name');
      f.input('job');
      f.submit('Create');
    })).toEqual(formOutput.formWithNamedSubmit);
  });
});
