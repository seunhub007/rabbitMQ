## RabbitMQ installation
### Pull rabbitmq image from dockerhub
- docker pull rabbitmq
### Run it as a container
- docker run --rm -d --hostname my-rabbit -p 5672:5672 -p 15672:15672 --name some-rabbit rabbitmq:3-management
### Exec into the container
- docker exec -it some-rabbit /bin/bash
- apt-get update && apt-get install -y curl
### rabbitmq -plugins
### exit container
1. curl -O https://raw.githubusercontent.com/rabbitmq/rabbitmq-management/v3.8.0/bin/rabbitmqadmin
2. chmod +x rabbitmqadmin

3. docker cp rabbitmqadmin some-rabbit:/usr/local/bin/rabbitmqadmin
### exec into the container
4. apt-get update
5. apt-get install -y python3
   ### Declare Exchange
6. rabbitmqadmin --host=localhost --port=15672 --username=guest --password=guest declare exchange name=amq.direct type=direct
   ### Run Rabbitmq activities
7. rabbitmqctl list_exchanges
8. rabbitmqctl list_queues
9. rabbitmqctl list_users
    ### Declare Queue
10. rabbitmqadmin --host=localhost --port=15672 --username=guest --password=guest declare queue name=seunqueue durable=true
   ### Declare binding
11. rabbitmqadmin --host=localhost --port=15672 --username=guest --password=guest declare binding source=amq.direct destination_type="queue" destination=seunqueue routing_key=seun_routing_key
   ### Publish message
12. rabbitmqadmin --host=localhost --port=15672 --username=guest --password=guest publish exchange=amq.direct routing_key=seun_routing_key payload="Hello, RabbitMQ!"
    ### To show the messages published
13. rabbitmqadmin --host=localhost --port=15672 --username=guest --password=guest get queues
    ### to show the plugin list
14. docker exec -it rabbitmq rabbitmq-plugins list
