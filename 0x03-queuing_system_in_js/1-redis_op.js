import { createClient, print } from 'redis';

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

function displaySchoolValue(schoolName) {
  client.get(schoolName, function(error, res) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log(res);
  });
}
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
redisConnect();
