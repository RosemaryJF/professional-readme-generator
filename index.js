const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown');


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

async function init() {
    await inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            const readMe = generateMarkdown(answers)
            fs.writeFile("README.md", readMe, (err) =>
                err ? console.error(err) : console.log("Congrats! Your project README has now been generated!")
            );
        }) .catch((err) => {
            console.error(err)
        });
};

init();