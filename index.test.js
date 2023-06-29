import { capitalize, reverseString } from "./index";

test('capitalize strings', () => {
    expect(capitalize('morning')).toMatch(/Morning/);
    expect(capitalize('TEST')).toMatch(/TEST/);
});

test('reverse odd number characters of string', () => {
    expect(reverseString('eat')).toMatch(/tae/);
});

test('reverse even number characters of string', () => {
    expect(reverseString('jacket')).toMatch(/tekcaj/);
});