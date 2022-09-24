function renderLicenseBadge(license) {
  const licenseBadges = {
    mit: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    apachev2: "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    gplv3: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    bsd3: "![License: BSD-3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",
    more: ""
  }
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
};

function renderLicenseLink(license) {
  const licenseLinks = {
    mit: "[License: MIT](https://choosealicense.com/licenses/mit/)",
    apachev2: "[License: Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)",
    gplv3: "[License: GPL v3](https://choosealicense.com/licenses/gpl-3.0/)",
    bsd3: "[License: BSD-3](https://choosealicense.com/licenses/bsd-3-clause/)",
    more: ""
  }
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
};

function renderLicenseSection(license) {
  if (license === 'MIT' || 'APACHE' || 'GPL' || 'BSD') {
    return `This application is licensed under the ${renderLicenseLink(license)} license.`
  } else (license === 'More')
  return ""
};

function generateMarkdown(data) {
  return `
  # ${data.projectName}

  ${renderLicenseBadge(data.license)}
  
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

  ${renderLicenseSection(data.license)}

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

module.exports = generateMarkdown()