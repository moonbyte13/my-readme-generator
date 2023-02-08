// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  process.chdir('generated')
  fs.writeFile(`${fileName}`, data, err => {
    if (err) {
      return console.log(err);
    }

    console.log('README.md generated successfully!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(
    questions
  )
  .then(function(answers){
    if(answers.title !== ''){
      if(answers.description !== ''){
        if(answers.installation !== ''){
          if(answers.usage !== ''){
            if(answers.contributing !== ''){
              if(answers.tests !== ''){
                writeToFile('README.md', markdown(answers))
              }else{
                console.error('err')
              }
            }else{
              console.error('err')
            }
          }else{
            console.error('err')
          }
        }else{
          console.error('err')
        }
      }else{
        console.error('err')
      }
    }else{
      console.error('err')
    }
  })
}

// Function call to initialize app
init();