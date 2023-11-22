# Getting started with this project on your machine

- [Prerequisites](#prerequisites)

- [Step by step Setup](#step-by-step-setup)

- [Libraries already included](#libraries-already-included)

- [Additional Notes](#additional-notes)

## Prerequisites

Before you begin, make sure you have the following installed:

1. Node.js (version 18) and npm: [Download & Installation Guide](https://nodejs.org/en/download/)

1. Git: [Download & Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Also make sure you have accounts for the following:

1. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

1. [GitHub](https://github.com/signup)

## Step by step Setup

### 1. Clone the Repository

```sh
git clone [REPO_URL]
cd [REPO_NAME]
```

Replace [REPO_URL] with the link to your GitHub repository and [REPO_NAME] with the repository's name.

### 2. Install Dependencies

Run the installation script to install the dependencies for both the frontend and backend applications:

```sh
npm run install:all
```

### 3. Environment Variables

Copy the example .env files in both directories and fill them with your details:

```sh
cd packages/backend
cp .env.example .env

cd ../frontend
cp .env.example .env
```

Update the variables, especially the MongoDB connection string from MongoDB Atlas.

### 4. **(Windows Users Only)** Additional Setup

- Install cross-env for setting environment variables in scripts:

```sh
npm install cross-env
```

- If you face issues with native npm modules, run:

```sh
npm install --global windows-build-tools
```

For Bash scripts or UNIX commands, consider using [Git Bash](https://gitforwindows.org/)

### 5. Running the Application

To start the backend:

```sh
npm run start:backend
```

To start the frontend (separate terminal window required):

```sh
npm run start:frontend
```

Open your browser and navigate to `http://localhost:3000` (or whatever port you've set in your .env for the frontend).

## Libraries already included

### Backend

- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

[Documentation](https://expressjs.com/)

- **CORS**: A Node.js package that provides a middleware to enable Cross-Origin Resource Sharing in your application.

[Documentation](https://www.npmjs.com/package/cors)

- **Dotenv**: A zero-dependency module that loads environment variables from a .env file into process.env.

[Documentation](https://www.npmjs.com/package/dotenv)

- **Mongodb**: The official MongoDB driver for Node.js, providing a high-level API on top of MongoDB's native drivers.

[Documentation](https://mongodb.github.io/node-mongodb-native/)

- **Nodemon**: A utility that monitors for any changes in your source and automatically restarts your server. Great for development.

[Documentation](https://nodemon.io/)

- **Helmet**: Helps secure Express apps by setting various HTTP headers, guarding against some well-known web vulnerabilities.

[Documentation](https://helmetjs.github.io/)

- **Nodemon**: A utility to automatically restart Node server when your code changes.

[Documentation](https://nodemon.io)

### Frontend

- React: A JavaScript library for building user interfaces.

[Documentation](https://reactjs.org/docs/getting-started.html)

- React Router: A JavaScript library for routing in single-page applications built with React.

[Documentation](https://reactrouter.com/en/main)

## Additional Notes

- Remember to commit your changes frequently with meaningful commit messages. Consider using a standardised convention like [Conventional Commits](https://www.conventionalcommits.org/)

- Avoid commiting your .env file or any other sensitive credentials to the repository. `.gitignore` files are included in each application to help avoid accidental commits, which you can modify as necessary.

- Regularly pull updates from the repository to stay in sync with any changes.
