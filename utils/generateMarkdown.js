// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
class markdown {

  static renderLicenseBadge(license) {
    const licenseBadges = {
      mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      apachev2: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      gplv3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      bsd3: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      more: ""
    }
    // return licenseBadges[license]
    if (license === 'MIT') {
      return licenseBadges.mit
    } else if (license == 'APACHE') {
      return licenseBadges.apachev2
    } else if (license == 'GPL') {
      return licenseBadges.gplv3
    } else if (license == 'BSD') {
      return licenseBadges.bsd3
    } else if (license === 'More') {
      return licenseBadges.more
    };
    // return;
  }

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  static renderLicenseLink(license) {
    const licenseLinks = {
      mit: "https://choosealicense.com/licenses/mit/",
      apachev2: "https://choosealicense.com/licenses/apache-2.0/",
      gplv3: "https://choosealicense.com/licenses/gpl-3.0/",
      bsd3: "https://choosealicense.com/licenses/bsd-3-clause/",
      more: ""
    }
    // return licenseLinks[license]
    if (license === 'MIT') {
      return licenseLinks.mit
    } else if (license == 'APACHE') {
      return licenseLinks.apachev2
    } else if (license == 'GPL') {
      return licenseLinks.gplv3
    } else if (license == 'BSD') {
      return licenseLinks.bsd3
    } else if (license === 'More') {
      return licenseLinks.more
    };
  }


  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  static renderLicenseSection(license) {
    if (license === 'MIT' || 'APACHE' || 'GPL' || 'BSD' ) {
      return `This application is licensed under the ${this.renderLicenseLink(license)} license.`
    } else (license === 'More')
    return ""
  }

  // TODO: Create a function to generate markdown for README
  static generateMarkdown(data) {
    return `
  # ${data.projectName}

  ${this.renderLicenseBadge(data.license)}
  
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

  ${this.renderLicenseSection(data.license)}

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
}
module.exports = markdown;