// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data, license) {
  if (data.license === MIT) {
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (data.license == APACHE) {
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (data.license == GPL) {
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if (data.license == BSD) {
    "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  else (data.license === More); {
    ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data, license) {
  if (data.license === MIT) {
    "https://opensource.org/licenses/MIT"
  }
  else if (data.license == APACHE) {
    "https://opensource.org/licenses/Apache-2.0"
  }
  else if (data.license == GPL) {
    "https://www.gnu.org/licenses/gpl-3.0"
  }
  else if (data.license == BSD) {
    "https://opensource.org/licenses/BSD-3-Clause"
  }
  else (data.license === More); {
    ""
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data, license) {
  if (data.license === MIT) {
  }
  else if (data.license == APACHE) {
  }
  else if (data.license == GPL) {
  }
  else if (data.license == BSD) {
  }
  else (data.license === More); {
    ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.projectName}**
  ---
  ${renderLicenseBadge()}
  
  ## Description

  ${data.projectDescription}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  To install necessary dependancies, run the following command:

  ${data.install}

  ## Usage

  ${data.repoUse}

  ## License

  This application is licensed under the ${renderLicenseLink()} license.

  ## Contributing

  To contribute to this repo all you need to do is:

  ${data.repoContribute}

  ## Tests

  To run test simply run the following command:

  npm test

  ## Questions

  If you have any questions about the repo, or application, open an issue or contact me directly at ${data.email}.
  
  You can find more of my work at [${data.GitHubUsername}](https://github.com/${data.GitHubUsername}/).
`;
}

module.exports = generateMarkdown;
