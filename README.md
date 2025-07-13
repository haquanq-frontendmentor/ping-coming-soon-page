# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Project overview](#rocket-project-overview)
- [Development workflow](#boat-development-workflow)
- [Working in this repository](#astronaut-working-in-this-repository)
- [License](#page_with_curl-license)

## :rocket: Project overview

### Challenge equirements

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Implemented features

Functional

- [x] Form can validate basic specifications (required, email)
- [x] Show every error when users submit

Accessibility

- [x] Responsive accross different screen sizes
- [x] Added custom indicator when interactive elements focused

### Preview

![](./.docs/preview.png)

## :boat: Development workflow

### Approach

Developed with mobile-first workflow, followed with [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)

### Built with

| Tool          | Note                               |
| ------------- | ---------------------------------- |
| `HTML`        | Standard markup language           |
| `CSS`         | Vanilla CSS                        |
| `JavsScript`  | Without any library                |
| `BrowserSync` | Development server, live reloading |

## :astronaut: Working in this repository

### Presequisites

Having these tools installed:

- Git (prefer lastest LTS version)
- NodeJS (prefer latest LTS version)

### Clone this project to your machine

Open new terminal, run the following command:

```
git clone https://github.com/haquanq/fm-ping-coming-soon-page.git
```

Then, run `npm install` to install all dependencies.

```
npm install
```

## Development workflow

In terminal, run `npm run dev` to start development server:

```
npm run dev
```

## :page_with_curl: License

This project follows [MIT License](./LICENSE). **DO NOT** use this project as your solution on [Frontend mentor](https://www.frontendmentor.io/solutions).
