const square = require("./square");
describe("Testing of square expression", () => {
            it("Disc is more than nulya", () => {
                result = [4, -1];
                expect(square(1, -3, -4)).toEqual(result);

            });
            it("Disc is equal nulya", () => {
                expect(square(9, 6, 1)).toEqual(-27);

            });
            it("Disc is more than nulya", () => {
                expect(square(9, 6, 2)).toEqual("no roots");
            });