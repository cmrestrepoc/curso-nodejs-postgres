# PGADMIN CONFIG

## Host name/address

In order to get the ip to connect the pgadmin with the postgres database container, you need to get the ip getting the container id and inspecting to get the ip

$ docker ps
$ docker inspect <id>

## Database, username and password

Get them from the docker-compose configuration file
