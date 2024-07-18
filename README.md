# RabbitMQ installation
## Pull rabbitmq image from dockerhub
## Run it as a container
## Exec into the container
## rabbitmq -plugins
## exit container
1. curl -O https://raw.githubusercontent.com/rabbitmq/rabbitmq-management/v3.8.0/bin/rabbitmqadmin
2. chmod +x rabbitmqadmin

3. docker cp rabbitmqadmin some-rabbit:/usr/local/bin/rabbitmqadmin
## exec into the container
3. apt-get update
4. apt-get install -y python3
5. rabbitmqadmin --host=localhost --port=15672 --username=guest --password=guest declare exchange name=amq.direct type=direct
6. rabbitmqctl list_exchanges
7. rabbitmqctl list_queues
8. rabbitmqctl list_users
9. rabbitmqadmin --host=localhost --port=15672 --username=guest --password=guest declare queue name=seunqueue durable=true
10. rabbitmqadmin --host=localhost --port=15672 --username=guest --password=guest declare binding source=amq.direct destination_type="queue" destination=seunqueue routing_key=seun_routing_key
11. rabbitmqadmin --host=localhost --port=15672 --username=guest --password=guest publish exchange=amq.direct routing_key=seun_routing_key payload="Hello, RabbitMQ!"
