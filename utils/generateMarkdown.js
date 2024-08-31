// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeAndLink(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  motivation,
  why,
  problem,
  learned,
  tests,
  install,
  contributing,
  usage,
  license,
  features,
  email,
  github,
}) {
  return `# ${title} ${renderLicenseBadgeAndLink(license)}

## Table of Contents
  [Description](#description)<br>
  [Installation Instructions](#installation-instructions)<br>
  [Usage Information](#usage-information)<br>
  [License](#license)<br>
  [Contribution](#contributing)<br>
  [Contact and Questions](#contact)<br>


## Description
  ### Motivation
  ${motivation}
  ### Why?
  ${why}
  ### What problem does the app solve?
  ${problem}
  ### What was the most important thing you learned?
  ${learned}
  ### Features
  ${features}
  ### Testing Instructions
  ${tests}
## Installation Instructions
  ${install}
## Usage Information
  ${usage}
## License
  ${license}
## Contribution
  ${contributing}
  ### Contact
  ${github}
  ### Email
  ${email}

`;
}

module.exports = generateMarkdown;
