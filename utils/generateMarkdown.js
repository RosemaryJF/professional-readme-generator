function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    APACHEv2: "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    GPLv3: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    BSD3: "![License: BSD-3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",
    more: ""
    } 
return licenseBadges[license]
  // if (license === 'MIT') {
  //   licenseBadges.mit
  // } else if (license === 'APACHE 2.0') {
  //   licenseBadges.apachev2
  // } else if (license === 'GPL 3.0') {
  //   licenseBadges.gplv3
  // } else if (license === 'BSD 3') {
  //   licenseBadges.bsd3
  // } else if (license === 'More') {
  //   licenseBadges.more
  // };
  
};

function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: "[MIT](https://choosealicense.com/licenses/mit/)",
    APACHEv2: "[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)",
    GPLv3: "[GPL v3](https://choosealicense.com/licenses/gpl-3.0/)",
    BSD3: "[BSD-3](https://choosealicense.com/licenses/bsd-3-clause/)",
    more: ""
  }
  return licenseLinks[license]
  // if (license === 'MIT') {
  //   return licenseLinks.mit
  // } else if (license === 'APACHE 2.0') {
  //   return licenseLinks.apachev2
  // } else if (license === 'GPL 3.0') {
  //   return licenseLinks.gplv3
  // } else if (license === 'BSD 3') {
  //   return licenseLinks.bsd3
  // } else if (license === 'More') {
  //   return licenseLinks.more
  // };
};

function renderLicenseSection(license) {
  if (license === 'MIT' || 'APACHEv2' || 'GPLv3' || 'BSD3') {
    return `This application is licensed under the ${renderLicenseLink(license)} license.`
  } else (license === 'more')
  return ""
};

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

  ## License

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