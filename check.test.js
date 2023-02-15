const sum = require("./check.js");
describe("Show testing sum", () => {
    it("Testing if sum is 60", () => {
        expect(sum(30, 30)).toBe(60);
    });
    it("Testing if sum is equal 60", () => {
        expect(sum(30, 30)).toEqual(60);
    });
    it("Testing if sum is greater than 60", () => {
        expect(sum(30, 30)).toBeGreaterThan(59);
    });
    it("Testing if sum less than 61", () => {
        expect(sum(30, 30)).toBeLessThan(61);
    });
});