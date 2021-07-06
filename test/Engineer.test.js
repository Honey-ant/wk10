const exp = require("constants");
const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an obect with a name, id, email and gitub if provided with vaild arguments", () => {
            const engineer = new Engineer("Munmina", 45, "Munmia5@gmail.com", "Munmia@github.com");

            expect(engineer.name).toEqual("Munmia");
            expect(engineer.id).toEqual(45);
            expect(engineer.email).toEqual("Munmia5@gmail.com");
            expect(engineer.github).toEqual("Munmia@github.com");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Engineer();

            expect(cb).toThrow();
        });

        it("should throw a error if not provided with a name", () => {
            const cb = () => new Engineer(45, "munmia5@gmail.com", "munmia@github.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided with a id", () => {
            const cb = () => new Engineer("munmia", "Munmia5@gmail.com","Munmia@github.com");
            const err = new Error("Expected paratemer 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided with a email", () => {
            const cb = () => new Engineer("munmia", 45, "munmia@github.com");
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });
})