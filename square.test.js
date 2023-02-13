const square = require("./square");
describe("Testing of square expression", () => {
    it("Disc is more than 0", () => {
        result = [4, -1];
        expect(square(1, -3, -4)).toEqual(result);

    });
});