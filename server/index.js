const express = require('express')
const path = require('path')

const pathToDistFolder = path.join(__dirname, '../vite-project/dist')

const app = express()

const serveStatic = express.static(pathToDistFolder)

const logRoutes = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

app.use(logRoutes);
app.use(serveStatic);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});