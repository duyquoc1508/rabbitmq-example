const amqp = require('amqplib/callback_api');
const connectionUrl = 'amqp://guest:guest@localhost:5672';

amqp.connect(connectionUrl, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.assertQueue('user-messages');
    // consume(queue_name, callback , ack)
    ch.consume(
      'user-messages',
      function (msg) {
        console.log('.....');
        setTimeout(function () {
          console.log('Message:', msg.content.toString());
        }, 4000);
      },
      { noAck: true }
    );
  });
});
