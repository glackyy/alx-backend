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

const get = promisify(rdClient.get).bind(rdClient);

const listProducts = [
  {'itemId': 1, 'itemName': 'Suitcase 250', 'price': 50, 'initialAvailableQuantity': 4},
  {'itemId': 2, 'itemName': 'Suitcase 450', 'price': 100, 'initialAvailableQuantity': 10},
  {'itemId': 3, 'itemName': 'Suitcase 650', 'price': 350, 'initialAvailableQuantity': 2},
  {'itemId': 4, 'itemName': 'Suitcase 1050', 'price': 550, 'initialAvailableQuantity': 5}
];