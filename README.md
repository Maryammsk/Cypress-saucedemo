# 10pu Cypress - Saucedemo Automation Testing

This project contains Cypress end-to-end tests for the [SauceDemo](https://www.saucedemo.com/) website. It includes test cases for login functionality, product validation, and report generation using Mochawesome.

## 📁 Project Structure

10pu-cypress/
│
├── cypress/
│ ├── Integtration/
│ │ ├── saucedemo.cy.js #Main 5 tests
| | |---login.cy.js # Login test cases
│ │ └── product.cy.js # Product page test cases
│ └── support/
│ └── commands.js, e2e.js, etc. # Cypress support files
│
├── mochawesome-report/ # Automatically generated test reports
├── node_modules/ # Installed dependencies
├── cypress.json # Cypress configuration
├── package.json # Project dependencies and scripts
├── package-lock.json # Dependency lock file


## ✅ Features

- 🔐 Login page test automation  
- 📦 Product validation on inventory page  
- 📊 HTML report generation with Mochawesome  
- 🔁 Reusable Cypress commands and support files

## 🚀 Getting Started

### Install Dependencies

npm install

Run Tests

npx cypress open
then
npx cypress run
**View Reports**
Open mochawesome-report/mochawesome.html in your browser after running tests.

📌 Notes
Make sure you have Node.js installed.

Cypress version and dependencies are listed in package.json.
