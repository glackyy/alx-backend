import { createClient } from 'redis';

const rdClient = createClient();

rdClient.on('connect', function () {
  console.log('Redis client connected to the server');
});

rdClient.on('error', function (error) {
  console.log('Redis client not connected to the server: ${error}');
});

rdClient.subscribe('holberton school channel');

rdClient.on('message', function (channel, message) {
  console.log('${message}');
  if (message === 'KILL_SERVER') {
    rdClient.unsubscribe('holberton school channel');
    rdClient.end(true);
  }
});
