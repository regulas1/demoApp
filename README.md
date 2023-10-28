# Demo Test for Matomo

This project is a test suite for demo app using [Cypress](https://www.cypress.io/).

## TLDR
### Structure
 POM Structure where the pages are located in the folder cypress\e2e\page, the objects are located as Cypress commands (cypress\support\commands.js)
Run npm install

### Running the tests 
Run npm install
- UI Live runner ( npx cypress open -> E2E testing -> Chrome -> Specs -> Select any )
                  - headless runner ( npx cypress run) -> runs all the tests 
                  - headless runner single file npx cypress run/e2e/resources_getInvolved.cy.js"
                
### Report is located under the reports folder cypress\reports

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

### Installation

A step by step series of examples that tell you how to get a development env running:

1. Clone the repository: `git clone https://github.com/regulas1/demoApp.git`
2. Install dependencies: `npm install`

### Usage

Explain how to use the project:

1. Start the Cypress Test Runner: `npx cypress open`
2. Select the test file you want to run
3. The Cypress Test Runner will open and follow the workflow to run the tests 

## Running Tests

To run all tests headlessly, use the following command:
npx cypress run 

### Reporting: 
For reporting just run the command npx cypress run  and a report should be generated 
under reports folder -  cypress\reports

### Possible issues: 
Running the link checker script loops through the links and checks if they are valid 
however this takes time to test, so commenting out the     cy.brokenLinkChecker(); will 
increase speed exponentially to run the test.

### Decision process
POM model using the Cypress commands and the const in javascript (proxy for enums)
Personally I prefer the use of page object based on model for its maintainability, 
however JavaScript's const function can be used as a proxy for enums. 

###  eNums or Consts  - cypress\enums.js
Hence, I have placed the constants in the file named as enums.js this has all the relevant 
pages links and position attributes relative to the website.
This would mean that any time the option is selected the user gets suggestions as to what the user
is adding to the file if using ide's with suggestions.

###  Cypress commands as a proxy for Objects - cypress\support\commands.js
I have configured the cypress commands to save the common functions and have used them as a class. 

## Inclusion criteria
-Testing for pages and workflows 
-Testing for the broken links
-Setting up the reporting 

## Exclusion criteria
-Testing for Performance
-Testing for multiple browsers
-Testing parrelisation
-Setting up CICD pipelines
-Dockerizing the test environment
