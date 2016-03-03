'use strict';

const Hapi = require('hapi');
const inert = require('inert');
const server = new Hapi.Server();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./mountaintrail.sqlite');

const directoryToServe = process.argv[2] || 'public';

server.connection({port: 3000});

server.bind({
  db: db
});


server.register(inert, function (err) {
  if (err) {
    throw err;
  }
  console.log('Plugin "inert" registered');

  server.route(require('./routes'));

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: directoryToServe
      }
    }
  });

  startServer();
});


function startServer() {
  server.start(function (err) {
    if (err) {
      throw err;
    }
    console.log('MountainTrail Server running at:', server.info.uri, 'and serving', directoryToServe);
  });
}

