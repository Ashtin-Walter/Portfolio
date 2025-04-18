# Ashtin J Walter Portfolio

This is the source code for my personal portfolio website, showcasing my projects, skills, and experience as a Full-Stack Developer.

## Built using React & Tailwind CSS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and utilizes [Tailwind CSS](https://tailwindcss.com/) for styling.

## Features

*   Responsive design
*   Dark/Light mode toggle
*   Sections for Landing, About, Experience Timeline, Projects, Skills, Learning/Research, Blog (Lazy Loaded), Testimonials, and Contact.
*   Interactive elements like project filtering/search, animated statistics, and hover effects.
*   Contact form integrated with Netlify Forms.
*   Continuous Deployment via GitHub Actions and FTP.

## Getting Started

### Prerequisites

*   Node.js (v16 or later recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Ashtin-Walter/Portfolio-2.0.git
    cd Portfolio-2.0
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

```bash
npm start
# or
yarn start
```

This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Building for Production

```bash
npm run build
# or
yarn build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) configured for deploying the `build` directory via FTP upon pushes to the `main` branch. You will need to configure the following secrets in your GitHub repository settings:

*   `FTP_USERNAME`: Your FTP username.
*   `FTP_PASSWORD`: Your FTP password.
*   `FTP_SERVER`: Your FTP server address.

The workflow uses `lftp` to mirror the build directory to the server root. Ensure `lftp` is available on your self-hosted runner environment if you are using one.

## Available Scripts

In the project directory, you can run:

*   `npm start` / `yarn start`: Runs the app in development mode.
*   `npm test` / `yarn test`: Launches the test runner in interactive watch mode.
*   `npm run build` / `yarn build`: Builds the app for production.
*   `npm run eject` / `yarn eject`: Removes the single build dependency from your project (use with caution).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
