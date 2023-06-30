import { capitalize } from "../js/capitalize"

test('capitalize strings', () => {
    expect(capitalize('morning')).toMatch(/Morning/);
    expect(capitalize('TEST')).toMatch(/TEST/);
});