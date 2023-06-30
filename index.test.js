import { capitalize, reverseString, Calculator, caesarCipher } from "./index";

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

test('basic math operations with 3 and 9', () => {
    let cal = new Calculator(3, 9);
    expect(cal.add()).toBe(12);
    expect(cal.subtract()).toBe(-6);
    expect(cal.divide()).toBeCloseTo(0.33);
    expect(cal.multiply()).toBe(27);
});

test('basic math operations with 4 and 0', () => {
    let cal = new Calculator(4, 0);
    expect(cal.add()).toBe(4);
    expect(cal.subtract()).toBe(4);
    expect(() => cal.divide()).toThrow(Error);
    expect(() => cal.divide()).toThrow('Second number can not be zero');
    expect(cal.multiply()).toBe(0);
});

test('basic math operations with 3.5 and 9.7', () => {
    let cal = new Calculator(3.5, 9.7);
    expect(cal.add()).toBeCloseTo(13.2);
    expect(cal.subtract()).toBeCloseTo(-6.2);
    expect(cal.divide()).toBeCloseTo(0.36);
    expect(cal.multiply()).toBeCloseTo(33.95);
});

test('basic math operations with -3.5 and 9.7', () => {
    let cal = new Calculator(-3.5, 9.7);
    expect(cal.add()).toBeCloseTo(6.2);
    expect(cal.subtract()).toBeCloseTo(-13.2);
    expect(cal.divide()).toBeCloseTo(-0.36);
    expect(cal.multiply()).toBeCloseTo(-33.95);
});

test('encrypt lower case characters with different positive keys', () => {
    expect(caesarCipher('abcde', 1)).toMatch('bcdef');
    expect(caesarCipher('abcde', 0)).toMatch('abcde');
    expect(caesarCipher('abcde', 260)).toMatch('abcde');
});

test('encrypt lower and upper characters with case unchanged', () => {
    expect(caesarCipher('ABCDE', 1)).toMatch('BCDEF');
    expect(caesarCipher('AbCdE', 0)).toMatch('AbCdE');
    expect(caesarCipher('abcDEF', 2)).toMatch('cdeFG');
});

test('encryption keeps symbols and punctuations unchanged', () => {
    expect(caesarCipher('Aa!#?', 1)).toMatch('Bb!#?');
    expect(caesarCipher('Zz + - / *', 2)).toMatch('Bb + - / *');
    expect(caesarCipher('abc123', 2)).toMatch('cde123');
});

test('encryption with negative or non-number keys throws errors', () => {
    expect(() => {caesarCipher('abcdefg', -2)}).toThrow(Error);
    expect(() => {caesarCipher('abcdefg', 'a')}).toThrow('Key should be a positive number.');
    expect(() => {caesarCipher('abcdefg', '!')}).toThrow(Error);
});