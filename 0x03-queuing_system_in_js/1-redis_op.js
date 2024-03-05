import { createClient } from 'redis';

function redisConnect() {
  const client = createClient();
  client.on('connect', function() {
    console.log('Redis client connected to the server');
  }).on('error', (error) => {
    console.log('Redis client not connected to the server: ${error}');
  });
};

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
};

redisConnect();