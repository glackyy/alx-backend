import { createClient, print } from 'redis';

const rdClient = createClient();

rdClient.on('connect', function() {
  console.log('Redis client connected to the server');
});
rdClient.on('error', function(error) {
  console.log('Redis client not connected to the server: ${error}');
});

rdClient.hset('HolbertonSchools', 'Portland', '50', print);
rdClient.hset('HolbertonSchools', 'Seattle', '80', print);
rdClient.hset('HolbertonSchools', 'New York', '20', print);
rdClient.hset('HolbertonSchools', 'Bogota', '20', print);
rdClient.hset('HolbertonSchools', 'Cali', '40', print);
rdClient.hset('HolbertonSchools', 'Paris', '2', print);
