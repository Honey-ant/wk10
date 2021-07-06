const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        type: 'input',
        name: 'ManagerName',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'ManageID',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'OfficeNo',
        message: 'What is your office number',
    },    
    {
        type: 'input',
        name: 'ManagerEmail',
        message: 'What is your email?',
    },
]