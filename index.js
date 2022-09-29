// Variables to call what is needed for the index and functions to run properly
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Variable containing all the questions the user will be asked
// The type of input required and what it is called for the generateMarkdown function
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: "email",
    },
    {
        type: 'input',
        message: "What is your project name?",
        name: "projectName",
    },
    {
        type: 'input',
        message: "Please write a short description of your project",
        name: "projectDescription",
    },
    {
        type: 'list',
        message: "What kind of license should your project have?",
        name: "license",
        choices: ['MIT', 'APACHEv2', 'GPLv3', 'BSD3', 'more'],
    },
    {
        type: 'input',
        message: "What command should be run to install dependencies?",
        name: "install (eg npm i)",
    },
    {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: "repoUse",
    },
    {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: "repoContribute",
    },

];

// Asyncrous function to initiate the program to run one node is called on index
async function init() {
    // Function will not run until inquirer has run the questions
    await inquirer.prompt(questions)
        .then((answers) => {
            // Variable calling the markdown from the function using the answers for the data
            const readMe = generateMarkdown(answers)
            // Writing the README file
            fs.writeFile("README.md", readMe, (err) =>
                err ? console.error(err) : console.log("Congrats! Your project README has now been generated!")
            );
        // To catch an error if it should occur
        }) .catch((err) => {
            console.error(err)
        });
};

init();