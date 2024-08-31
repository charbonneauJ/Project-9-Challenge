// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "motivation",
    message: "What was your motivation for this project?",
  },
  {
    type: "input",
    name: "why",
    message: "Why did you build your project?",
  },
  {
    type: "input",
    name: "problem",
    message: "What problem does your app solve?",
  },
  {
    type: "input",
    name: "learned",
    message: "What was the most important thing you learned?",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide test instructions for your project.",
  },
  {
    type: "input",
    name: "install",
    message: "Please provide installation instructions for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "features",
    message: "Please provide a list of features for your project.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide guidelines for contributing to your project.",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}
