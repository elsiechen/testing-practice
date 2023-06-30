import { reverseString } from "../js/reverseString"

test('reverse odd number characters of string', () => {
    expect(reverseString('eat')).toMatch(/tae/);
});

test('reverse even number characters of string', () => {
    expect(reverseString('jacket')).toMatch(/tekcaj/);
});