import app from './src/app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

/// npx to run package
// It is for executing packages.

// npm i --save-dev --exact-save (dependency name)..

// npm run dev
// npm start
// npx nodemon
