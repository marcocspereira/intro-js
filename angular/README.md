# Angular

It is just the [tutorial](https://angular.io/tutorial) from angular.io.

## Alley Fight

This mini project in Ruby-on-Rails is the API that feeds angular-tour-of-heroes angular project.

In order to prepare this API to be OK to run, you need to create two environment files, for `development` (named `.env.development`) and `test` (named `.env.test`):

```ỳaml
export RAILS_DB_PASSWORD="<your_db_>"
export RAILS_DB_USERNAME="<your_db_username>"
export RDS_HOST="..."
export RDS_PORT="..."
```

Then, run the following commands to create and populate your database:

```shell
$ rails db:drop && rails db:create && rails db:migrate && rails db:seed
```

To run (uses port 3000 by default):

```shell
$ rails s
```

### Tests

Run:

```shell
$ rspec
```

## Angular Tour of Heroes

This mini project is the Angular frontend project.

Beware that you need to update the `_apiUrl`. At the moment it exists in each `.service.ts` that communicates with `àpi.service.ts`. Best scenario should use `environment.ts` files.

To run (ies port 4200 by default):

```shell
$ ng serve
```

### Tests

You need to update the browser that Karma will use. At the moment is Chromium. To update, go to `karma.conf.ts` and update `browsers` entry.

Then, tot run:

```shell
$ ng test
```

It will open a browser window to run each implemented test, displaying coverage information in the command line.
