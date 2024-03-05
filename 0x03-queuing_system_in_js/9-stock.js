import { createClient } from 'redis';
import { promisify } from 'util';
import express from 'express';

const app = express();
const rdClient = createClient();

rdClient.on('connect', function() {
  console.log('Redis client connected to the server');
});

rdClient.on('error', function(error) {
  console.log(`Redis client not connected to the server: ${error}`);
});

