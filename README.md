# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs the dependencies of the project.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Application Structure

The application is based on clean architecture principles combined with modular (features) design. The application is divided into the following modules:

- **Main Page (PodcastList)**: Contains the podcast list for the first 100 podcasts.
- **Podcast Detail Page (PodcastDetail)**: Contains the podcast details for a specific podcast.
- **Podcast Player (PodcastPlayer)**: Contains the podcast player for a specific podcast.

Each module contains the following structure:

- **Adapters**: Contains the adapters that are used to convert the data from the API to the data that is used in the application. Also containes interceptors for the API requests in case fails or needs a special header request.
- **Components**: Contains the components that are used in the page.
- **Hooks**: Contains the hooks that are used in the page.
- **Model**: Contains the model for the entity that is used for the application.
- **Pages**: Contains the page that is used for the module that is going to be included in the navigation routes.
- **Redux**: Contains the redux actions, reducers, and selectors for the module.
- **Services**: Contains the services that are used to fetch the data from the API.

The application also contains the following folders:

- **Utils**: Contains the utility functions that are used in the application as date formatters, arithmetic operations, etc.
- **Routes**: Contains the routes that are used in the application.

## Libraries

The application uses the following libraries:

- **axios**: Used to fetch the data from the API.
- **redux-toolkit**: Used to manage the state of the application.
- **react-router-dom**: Used to manage the navigation of the application.
- **tailwindcss**: Used to style the application.
