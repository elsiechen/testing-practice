import { Calculator } from "../js/calculator"

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
