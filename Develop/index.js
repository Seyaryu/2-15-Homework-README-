const inquirer = require("inquirer");
const fs = require("fs");

var licenseLogo = '';

const generateREADME = ({projectTitle, description, installInfo, usageInfo, contributionInfo, license, testInfo, githubName}) => {
  shieldGenerator(license);
    return `
    # ${projectTitle}
  
    ## Description
    ![License Logo](${licenseLogo})
    ${description}
  
    #Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    
    ${installInfo}
    
    ## Usage
    
    ${usageInfo}
    
    ## Credits
    
    ${contributionInfo}
    
    ## License
    
    ${license}

    ## Tests

    ${testInfo}

    ## Questions

    Please check out my Github, and message me for any issues, suggestions, or questions!

    https://github.com/${githubName}
    `

}

inquirer.prompt ([
      {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'Please give a brief description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please give the instructions on how to to install your project',
        name: 'installInfo',
      },
      {
        type: 'input',
        message: 'Please describe how to use this project.',
        name: 'usageInfo'
      },
      {
        type: 'input',
        message: 'What or who contributed to this project?',
        name: 'contributionInfo'
      },
      {
        type: 'input',
        message: 'Please provide links to tests of this project.',
        name: 'testInfo'
      },
      {
        type: 'list',
        message: 'What license will this use',
        choices: ['MIT', 'AGPLv3', 'GPLv3', 'LGPLv3', 'Mozilla', 'Apache', 'Unlicense'],        
        name: 'license'
      },
      {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'githubName'
      },

])
.then((answers) => {
    fs.writeFile('README.md', generateREADME(answers), 'utf-8', (err) =>
    err ? console.error(err) : console.log('README Generated!')
    );
});

function shieldGenerator(license) {
  if (license == 'MIT') {
    licenseLogo = 'https://img.shields.io/badge/license-MIT-green'
  } else if (license == 'AGPLv3') {
    licenseLogo = 'https://img.shields.io/badge/license-AGPLv3-green'
  } else if (license == 'GPLv3') {
    licenseLogo = 'https://img.shields.io/badge/license-GPLv3-green'
  } else if (license == 'LGPLv3') {
    licenseLogo = 'https://img.shields.io/badge/license-LGPLv3-green'
  } else if (license == 'Mozilla') {
    licenseLogo = 'https://img.shields.io/badge/license-Mozilla-green'
  } else if (license == 'Apache') {
    licenseLogo = 'https://img.shields.io/badge/license-Apache-green'
  } else {
    licenseLogo = 'https://img.shields.io/badge/license-Unlicensed-green'
  }
  return licenseLogo;
}