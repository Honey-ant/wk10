class Intern {
    constructor(name, id, email, school) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "number" || isNaN(id)) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be non-empty parameter");
        }

        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getName() {
        console.log(
            `Name: ${this.name}\n`
        );
        console.log('\n--------------\n');
    }
    getId() {
        console.log(
            `Id: ${this.id}\n`
        );
        console.log('\n---------\n');
    }
    getEmail() {
        console.log(
            `Email: ${this.email}\n`
        );
        console.log('\n--------\n');
    }
}

module.exports = Intern;
