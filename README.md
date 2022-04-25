1. run rabbitmq instance by docker
```
docker-compose up -d
```

2. run node application
```
npm run dev
```
API: call api `/msg` use rabbitmq to push message

3. run worker to subscribe message
```
npm run worker
```

There is many way to use rabbitmq like `work queue`, `publish/subscribe`, `routing`,...

** importance config

`ack`: (acknowledgement): options in `consumer`. If we set the `noAck` field as `true`, then the queue will delete the message the moment it is read from the queue

`durable`: if `true`, the queue will survive broker restarts, modulo the effects of `exclusive` and `autoDelete`; this defaults to true if not supplied, unlike the others


Reference:
https://github.com/amqp-node/amqplib/tree/main/examples/tutorials
