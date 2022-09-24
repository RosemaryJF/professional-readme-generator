const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: "GitHubUsername",
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
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'More'],
    },
    {
        type: 'input',
        message: "What command should be run to install dependencies?",
        name: "install",
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

]

async function init() {
    await inquirer.prompt(questions)
        .then((data) => {
            const readMe = generateMarkdown(data)
            fs.writeFile("README.md", readMe, (err) =>
                err ? console.error(err) : console.log("Congrats! Your project README has now been generated!")
            );
        })
        .catch((err) => {
            console.error(err)
        })
}

init();