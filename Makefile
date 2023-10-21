DOCKER_COMPOSE_FILE = docker-compose.yml # Specify the Docker Compose file name

build:
	docker-compose -f $(DOCKER_COMPOSE_FILE) build

start:
	docker-compose -f $(DOCKER_COMPOSE_FILE) up --build

stop:
	docker-compose -f $(DOCKER_COMPOSE_FILE) stop

rm:
	docker-compose -f $(DOCKER_COMPOSE_FILE) rm -f
