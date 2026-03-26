# Telnyx Cypress Site Testing

This repository contains automated end-to-end tests for the public Telnyx website using Cypress.

## Project Goal

The goal of this assignment is to create a site testing plan with 10 test cases, implement automated tests using Cypress, and configure CI pipeline with GitHub Actions and Cypress Cloud recording.

Target site:

https://telnyx.com

Tests cover public, non-authenticated user flows that are safe to run in CI.

---

## Test Plan

Test cases are described in Excel file:

docs/TelnyxCypressTestPlan.xlsx

The test plan includes 10 test cases covering:

- Homepage availability
- Global navigation
- Homepage CTA links
- Pricing pages
- Numbers pricing page
- Sign-up page
- Mission Control page
- United States phone numbers page
- Footer links
- Critical public routes

---

## Tech Stack

- Cypress
- JavaScript
- GitHub Actions
- Cypress Cloud

---

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   ├── footer_and_routes.cy.js
│   │   ├── home.cy.js
│   │   ├── phone_numbers.cy.js
│   │   ├── pricing.cy.js
│   │   └── signup_mission_control.cy.js
│   ├── fixtures/
│   └── support/
├── docs/
│   └── TelnyxCypressTestPlan.xlsx
├── cypress.config.js
├── package.json
└── README.md
```
---

## Implemented Test Suites

home.cy.js  
Tests homepage loading, hero section, navigation, and CTA links.

pricing.cy.js  
Tests pricing overview page and numbers pricing page.

signup_mission_control.cy.js  
Tests sign-up page and Mission Control page content.

phone_numbers.cy.js  
Tests United States phone numbers page.

footer_and_routes.cy.js  
Tests footer links and critical public routes availability.

---

## Run tests locally

Install dependencies:
npm install

Open Cypress UI:
npx cypress open

Run tests in headless mode:
npx cypress run

---

## CI Pipeline

GitHub Actions pipeline runs Cypress tests automatically on push.

Pipeline file:
.github/workflows/cypress.yml

The pipeline runs tests in headless mode and records results to Cypress Cloud.

---

## Cypress Cloud

Test runs are recorded in Cypress Cloud.

Recording is enabled using:

- projectId in cypress.config.js
- CYPRESS_RECORD_KEY in GitHub Secrets

This allows viewing test results in the Cypress Dashboard.

---

## Notes

- Tests cover only public pages
- No login, payment, or destructive actions are used
- Assertions focus on stable UI elements
- Timeouts are configured for CI stability
