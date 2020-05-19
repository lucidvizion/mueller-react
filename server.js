const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

let gradesList = [
  { name: "Jeff", grade: "A+" },
  { name: "Eric", grade: "A+" },
  { name: "William", grade: "C" },
  { name: "Jerry", grade: "C" },
];

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  res.send("The server is running!");
});
app.get('/grades', (req, res) => {
  res.send(gradesList);
});