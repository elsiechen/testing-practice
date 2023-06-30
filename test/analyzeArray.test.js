import { analyzeArray } from "../js/analyzeArray";

test('analyze array with numbers', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
        average: 4, min: 1, max: 8, length: 6
    });
    expect(analyzeArray([2])).toMatchObject({
        average: 2, min: 2, max: 2, length: 1
    });
});

test('analyze empty array will throw error', () => {
    expect(() => {analyzeArray([])}).toThrow('Please enter elements in the array.')
});

test('analyze non array will throw error', () => {
    expect(() => {analyzeArray('abc')}).toThrow('Please enter an array.')
});

test('analyze array with non-number will throw error', () => {
    expect(() => {analyzeArray([2,'a',5,'?'])}).toThrow('Non-number detected! Please enter all numbers in the array.')
});