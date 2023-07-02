# Full-Stack Streamer: Simple Guide 

Welcome to `streamer-fullstack-test`, a test project that I've built to include both frontend and backend components. Here's a straightforward guide on how to get it up and running.



### Frontend Setup

Next, head to the frontend directory, install the relevant packages, and build the project:

```shell
cd frontend
npm install
npm run dev
```

### Backend Setup

Do the same for the backend:

```shell
cd backend
npm install
npm start
```

## Technical Notes

You might expect to see tools like `Redux Toolkit` or `contextAPI` for managing the app's state, but I decided to keep things straightforward. I used `React Query` instead, which efficiently keeps the app updated.

For the `MongoDB` connection, typically the username and password are kept secret. But to simplify this test, I'm using a test database with predefined credentials:

```js
const MONGO_URL = 'mongodb+srv://emil:emil@cluster0.lmjrxxh.mongodb.net/?retryWrites=true&w=majority';
```

This way, you don't need to worry about setting up a new database or getting separate login details.

Lastly, I've used `Tailwind CSS` to style the app. I chose it for its simplicity and speed. However, for this project, I focused more on functionality than design. 

