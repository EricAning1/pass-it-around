const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(
    '99 bottles of beer on the wall, <a href ="/98">take one down, pass it around</a>'
  );
});
app.get('/:number_of_bottles', (req, res) => {
  if (req.params.number_of_bottles <= 0) {
    res.send(`No more drinks: <a href = '/'> Start Over!</>`);
  } else {
    res.send(
      `${
        req.params.number_of_bottles
      } Bottles of beer on the wall, <a href ='/${
        req.params.number_of_bottles - 1
      }'>take one down, pass it around</a>`
    );
  }
});

app.listen(port, function () {
  console.log(`Listening on port ${port}....`);
});
