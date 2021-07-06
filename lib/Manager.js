const inquirer = require('inquirer');
const fs = require('fs');

class Manager {
    constructor(name, id, email, officeNumber) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "number" || isNaN(id)) {
            throw new Error("Expected parameter 'id' to be a non-negative string");
        }

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        if (typeof officeNumber !== isNaN(officeNumber)) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
        }
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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

module.exports = Manager;