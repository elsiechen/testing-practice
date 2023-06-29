import { capitalize } from "./index";

test('capitalize strings', () => {
    expect(capitalize('morning')).toMatch(/Morning/);
    expect(capitalize('TEST')).toMatch(/TEST/);
});