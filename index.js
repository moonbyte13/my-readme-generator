// Packages needed for this application

// file system
const fs = require('fs');
// inquirer
const inquirer = require('inquirer');
// generateMarkdown.js
const markdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage information:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter the contributing guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: [
      'No License',
      'Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License'
    ]
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  // move to child dir 'generated'
  process.chdir('generated');
  // write file with filename and data
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }

    console.log('README.md generated successfully!');
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(
    questions
  )
  .then(function(answers){
    // If you put an empty string it will console log err
    if(answers.title !== ''){
      if(answers.description !== ''){
        if(answers.installation !== ''){
          if(answers.usage !== ''){
            if(answers.contributing !== ''){
              if(answers.tests !== ''){
                writeToFile('README.md', markdown(answers));
              }else{
                console.error('err');
              }
            }else{
              console.error('err');
            }
          }else{
            console.error('err');
          }
        }else{
          console.error('err');
        }
      }else{
        console.error('err');
      }
    }else{
      console.error('err');
    }
  })
}

// Function call to initialize app
init();