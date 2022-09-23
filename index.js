// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = []
// console.log(questions);

inquirer
    .prompt ([
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
        
    ])

    .then (writeToFile())

    // .then((data) => {
    //     const readMe = generateMarkdown(data)

    //     fs.writeFile("README.md", readMe, (err) =>
    //     err ? console.error(err) : console.log('Congrats! You just generated a professional README')
    //     )
    
    //     return;
    // });

// TODO: Create a function to write README file
function writeToFile(readMe, data)  {
        const readMe = generateMarkdown(data)

        fs.writeFile("README.md", readMe, (err) =>
        err ? console.error(err) : console.log('Congrats! You just generated a professional README')
        )
}

// TODO: Create a function to initialize app
// function init() {
    
// }

// Function call to initialize app
// init();
