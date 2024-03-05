import { createClient } from 'redis';

const rdClient = createClient();

rdClient.on('connect', function () {
  console.log('Redis client connected to the server');
});

rdClient.on('error', function (error) {
  console.log('Redis client not connected to the server: ${error}');
});
