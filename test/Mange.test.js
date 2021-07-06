const exp = require("constants");
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
       it("should create an object with a name, id, email, and officeNumber if provided with vaild arguments", () => {
           const manager = new Manager("Riley", 24, "rileyrose@gmail.com", 3,);

           expect(manager.name).toEqual("Riley");
           expect(manager.id).toEqual(24);
           expect(manager.email).toEqual("rileyrose@gmail.com");
           expect(manager.officeNumber).toEqual(3);
       });

       it("should throw an error if provided no arguments", () => {
           const cb = () => new Manager();

           expect(cb).toThrow();
       });

       it("should throw an error if not provided id", () => {
           const cb = () => new Manager("Riley");
           const err = new Error("Expected parameter 'id' to be a non-negative number");

           expect(cb).toThrowError(err);
       });

       it("should throw an error if 'name' is not a string", () => {
           const cb = () => new Manager(32, 24, "rileyrose@gmail.com", 3);
           const err = new Error("Expected parameter 'name' to be a non-empty string");

           expect(cb).toThrowError(err);
       });

       it("should throw an error if 'email' is not a string", () => {
           const cb = () => new Manager("Riley", 24, 34, 3);
           const err = new Error("Expected parameter 'email' to be a non-empty string");

           expect(cb).toThrowError(err);
       });

       it("should throw an error if 'officeNumber' is not a number", () => {
           const cb = () => new Manager("Riley", 24, "rileyrose@gmail.com", "three");
           const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

           expect(cb).toThrowError(err);
       });


    })
})