// Function to render the license badge in the README
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    APACHEv2: "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    GPLv3: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    BSD3: "![License: BSD-3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",
    more: ""
    } 
return licenseBadges[license]
};

// Function to render the license link in the render license section function
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: "[MIT](https://choosealicense.com/licenses/mit/)",
    APACHEv2: "[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)",
    GPLv3: "[GPL v3](https://choosealicense.com/licenses/gpl-3.0/)",
    BSD3: "[BSD-3](https://choosealicense.com/licenses/bsd-3-clause/)",
    more: ""
  }
  return licenseLinks[license]
};

// Function to render the License section of the README
function renderLicenseSection(license) {
  if (license === 'MIT' || 'APACHEv2' || 'GPLv3' || 'BSD3') {
    return `
  ## License
    
  This application is licensed under the ${renderLicenseLink(license)} license.`
  } else if (license === 'more')
  return ``
};

// Function to generate the markdown for the writeFile in index.js
function generateMarkdown(answers) {
  return `
  # ${answers.projectName}

  ${renderLicenseBadge(answers.license)}
  
  ## Description

  ${answers.projectDescription}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  To install necessary dependancies, run the following command:

  ${answers.install}

  ## Usage

  ${answers.repoUse}
  
  ${renderLicenseSection(answers.license)}

  ## Contributing

  To contribute to this repo all you need to do is:

  ${answers.repoContribute}

  ## Tests

  To run test simply run the following command:

  npm test

  ## Questions

  If you have any questions about the repo, or application, open an issue or contact me directly at ${answers.email}.
  
  You can find more of my work at my GitHub page by following the link: [${answers.username}](https://github.com/${answers.username}/).
  `;
};

module.exports = generateMarkdown