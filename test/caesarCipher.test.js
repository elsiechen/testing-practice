import { caesarCipher } from '../js/caesarCipher'

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
    expect(() => {caesarCipher('abcdefg', 3.5)}).toThrow('Key should be a positive integer.');
    expect(() => {caesarCipher('abcdefg', 'a')}).toThrow('Key should be a positive integer.');
    expect(() => {caesarCipher('abcdefg', '!')}).toThrow(Error);
});
