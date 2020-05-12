import {filterData, filterType, filterEggs} from '../src/data.js';


describe('filterType', () => {
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  test('returns `Roca`', () => {
    expect(filterType()).toBe('roca');
  });
});


describe('anotherExample', () => {
  test('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  test('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
