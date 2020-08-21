# coding-challenge-group-7
## Build
For starting all services:
```bash
$ docker-compose up -d --build
```

For starting only one service (for example, `ui`):
```bash
$ docker-compose up -d --build ui
```

Stopping services:
```bash
$ docker-compose stop
```

Default ports:
 - ui: 7777
 - web-serice: 5000
 - data-service: 5050