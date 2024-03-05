import { createClient } from 'redis';

const pub = createClient();

pub.on('connect', function() {
  console.log('Redis client connected to the server');
});

pub.on('error', function(error) {
  console.log('Redis client not connected to the server: ${error}');
});