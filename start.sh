#!/bin/bash

# usage sh start.sh DATABASE_PASSWORD

if [ "$1" == "" ]; then
  echo 'DATABASE_PASSWORD is not set'
  exit 1
else
  echo $1
fi

DATABASE_PASSWORD=$1
eval 'MONGO_PASS=$DATABASE_PASSWORD npm start'
