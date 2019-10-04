---
title: 'Installation Instructions'
slug: 'installation-instructions'
---

[Installing through the single file installer](installing-through-the-single-file-installer)

[Installing through Docker manually](installing-through-docker-manually)

[Installing without Docker](installing-without-docker)

<hr>

## Installing through the single file installer

### Prerequisites

Docker and Docker Compose must be installed.

### Steps

1. Clone the repository.
```
   git clone git@github.com:iluminar/goodwork.git
   cd goodwork
```

2. Copy `.env` from `.env.example`: `cp .env.example .env`

3. Define the environment variables.

   i.  Set the app port, db credentials and mail driver credentials in the `.env` file.
   
   ii. For production environment, provide SSL_CERT_DOMAIN(your domain) and SSL_CERT_DIR(directory of your ssl certificates file) values for the ssl setup. This step is not needed for local development.

4. Set the permissions.
```
      sudo chmod +x echo-server.sh
      sudo chmod +x install.sh
```
  
5.  Run the installer file.

      For production environment: `./install.sh`
      For local development: `./install.sh local`

6. Stop the server: `./cmd stop`

7. Start the server: `./cmd start`. The login credentials for admin user are:

    email: `admin@example.com`
    
    password: `secret`

8. After logging in, change the credentials through the user account page.

## Installing through Docker manually

### Prerequisites

Docker and Docker Compose must be installed

### Steps

1. Clone the repository.
```
   git clone git@github.com:iluminar/goodwork.git
   cd goodwork
```

2. Copy `.env` from `.env.example`: `cp .env.example .env`

3. Define the environment variables.
```
    APP_PORT= (whatever port you want to run the app)
    DB_HOST=db (Value should be db)
    DB_DATABASE= (Add value as you wish)
    DB_USERNAME= (Add value as you wish)
    DB_PASSWORD= (Add value as you wish)
    DB_ROOT_PASSWORD= (Add value as you wish)
    REDIS_HOST=redis (Value should be redis)
    TRAVIS=false (Value should be false)
```

4.  Build a PHP image: `./cmd build php`

5.   Install the laravel dependencies: `./cmd composer install`

6. Start the application server: `./cmd up -d`

7.  Generate an app key: `./cmd art key:generate`

8. Migrate and seed the database.
```
    ./cmd art migrate --seed
    ./cmd npm install
```

9. Open the app in your browser: `localhost:port`, where `port` is your `APP_PORT` variable.

The commands to stop and start the app server are `./cmd stop` and `./cmd start`.

## Installing without Docker

### Steps

1. Clone the repository: `$ git clone git@github.com:iluminar/goodwork.git`. If you are an outside collaborator, use this command: `$ git clone git@github.com:{yourusername}/goodwork.git`.

2.  Configure remotes.
```
$ cd goodwork
$ git remote add origin git@github.com:iluminar/goodwork.git
```

3.  Set up the application.
```
$ git checkout master # use dev branch for local development
$ git pull origin master # use dev branch for local development
$ composer install
$ cp .env.example .env
$ php artisan key:generate
$ php artisan storage:link
$ php artisan migrate --seed
$ npm install
```

4.  Install and run the Redis server.
```
// install redis on your machine
$ wget http://download.redis.io/redis-stable.tar.gz
$ tar xvzf redis-stable.tar.gz
$ cd redis-stable
$ make
// run redis server
$ redis-server
```

5.  Run Laravel Echo Server.
```
$ npm install -g laravel-echo-server
$ laravel-echo-server start
```

6. Run Queue worker.
```
$ php artisan queue:work redis --sleep=1 --tries=1
```
