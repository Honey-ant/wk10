const Employee = require("../lib/employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a object with a name, id, and email if provided with valid arguments", () => {
            const employee = new Employee("Matt", 27, "MattHatt@gmail.com");

            expect(employee.name).toEqual("Matt");
            expect(employee.id).toEqual(27);
            expect(employee.email).toEqual("MattHatt@gmail.com");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        });

        it("should throw an error if not provided with a id", () => {
            const cb = () => new Employee("Matt");
            const err = new Error("Expected parameter 'id' to to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(27, 32);
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Employee("MattHatt@gmail.com");
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });
});