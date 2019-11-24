# Exam exercises

Inside this directory you will find two javascript files named find-path.js and get-closest-result.js,
each one has it's own testing file with the necessary test cases to solve.

## Setup
~~~sh
# download the exam and get into the dir
$ cd path/to/exam

# Installing dependencies

# if you have installed and runing docker in your machine, you could run the exam as follows:
$ docker run --rm -it -w /usr/src/app -v $PWD:/usr/src/app node:12.12.0 yarn install
# or without docker
$ yarn install

~~~

## Running the exam

~~~sh
# Watching for file changes
$ docker run --rm -it -w /usr/src/app -v $PWD:/usr/src/app node:12.12.0 yarn test --watchAll

# or without docker
$ yarn test --watchAll

# the commands above will install the dependencies and then run the tests watching for file changes
~~~


## for one liners

~~~sh
# Run it with docker docker
$ docker run --rm -it -w /usr/src/app -v $PWD:/usr/src/app node:12.12.0 yarn && yarn test --watchAll

# Without docker
$ yarn && yarn test --watchAll
~~~


## Dependencies

You need to have node >= 11.0.0 if you don't have installed docker in your machine
or docker you don't want to use your local installation of node


