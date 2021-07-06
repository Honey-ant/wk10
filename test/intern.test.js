const exp = require("constants");
const Intern = require("../lib/intern.js");

describe("intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and a school if provided with valid arguments", () => {
            const intern = new Intern("Mel", 76, "melbel@gmail.com", "Monash");

            expect(intern.name).toEqual("mel");
            expect(intern.id).toEqual(76);
            expect(intern.email).toEqual("melbel@gmail.com");
            expect(intern.school).toEqual("Monash");
        });

        
    })
})