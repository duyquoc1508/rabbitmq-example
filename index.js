const express = require('express');
const app = express();
const { publishToQueue } = require('./services/rabbitmq.service');

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  return res.send('Hello, world!');
});

app.post('/msg', async (req, res) => {
  console.log(req.body)
  let { queueName, data } = req.body;
  await publishToQueue(queueName, data);
  return res.json({
    'message-sent': true
  }).status(200)
})

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`);
});
