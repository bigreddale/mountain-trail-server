'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./mountaintrail.sqlite');

server.connection({port: 3000});

server.bind({
  db: db
});

server.route(require('./routes'));


server.start(function(err) {
  if (err) {
    throw err;
  }
  console.log('MountainTrail Server running at:', server.info.uri);
});

