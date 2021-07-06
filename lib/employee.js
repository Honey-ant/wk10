class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "number" || isNaN(id)) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        }

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        this.name = name;
        this.id = id;
        this.email = email;
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
    getRole() {
    }
}





module.exports = Employee;