import { createQueue } from 'kue';
import { createClient } from 'redis';
import { promisify } from 'util';
import express from 'express';

const app = express();
const rdClient = createClient();

redisClient.on('connect', function() {
    console.log('Redis client connected to the server');
  });
  
  redisClient.on('error', function (error) {
    console.log(`Redis client not connected to the server: ${error}`);
  });
  