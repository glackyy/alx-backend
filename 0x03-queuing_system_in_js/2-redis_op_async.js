import { error } from 'console';
import { Socket } from 'dgram';
import { createClient, print } from 'redis';
import { promisify } from 'util';

const client = createClient();

function redisConnect() {
  client.on('connect', function() {
    console.log('Redis client connected to the server');
  }).on('error', (error) => {
    console.log('Redis client not connected to the server: ${error}');
  });
};

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
};

const get = promisify(client.get).bind(client);

async function displaySchoolValue(schoolName) {
  const res = await get(schoolName).catch((error) => {
    if (error) {
        console.log(error);
        throw error;
    }
  });
  console.log(res);
}
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
redisConnect();
