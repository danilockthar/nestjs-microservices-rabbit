docker-compose up -d

When the container has been started, execute the following commands:
docker exec -it <container-name> bash

    mongo -u <your username> -p <your password> --authenticationDatabase <your database name>

    mongodb://YourUsername:YourPasswordHere@127.0.0.1:27017/your-database-name
