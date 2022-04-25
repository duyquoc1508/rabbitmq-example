const amqp = require('amqplib/callback_api');
// const connectionUrl = 'amqp://guest:guest@localhost:5672';
const connectionUrl = 'amqp://localhost';

let channel = null;

amqp.connect(connectionUrl, (err, conn) => {
  if (err) {
    console.log('Connect to rabbitmq failed:', err);
  }
  conn.createChannel((err, ch) => {
    if (err) {
      console.log('Connect channel failed:', err);
    }
    channel = ch;
  });
  console.log('Connect to AMQP server');
})

const publishToQueue = async (queueName, data) => {
  channel.assertQueue(queueName);
  channel.sendToQueue(queueName, Buffer.from(data));
}

process.on('exit', (code) => {
  channel.close();
  console.log(`Closing rabbitmq channel`);
});

module.exports = {
  publishToQueue,
};
