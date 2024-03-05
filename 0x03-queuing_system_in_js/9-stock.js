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

function getItemById(id) {
  return listProducts.filter((item) => item.itemId === id)[0];
}

function reserveStockbyid(itemId, stock) {
  rdClient.set(itemId, stock);
}

async function getCurrentReservedStockById(itemId) {
  const stock = await get(itemId);
  return stock;
}

app.get('/list_products', function (req, res) {
  res.json(listProducts);
});

app.get('/list_products/:itemId', async function (req, res) {
  const itemId = req.params.itemId;
  const item = getItemById(parseInt(itemId));
  if (item) {
    const stock = await getCurrentReservedStockById(itemId);
    const resItem = {
      itemId: item.itemId,
      itemName: item.itemName,
      price: item.price,
      initialAvailableQuantity: item.initialAvailableQuantity,
      currentQuantity: stock !== null ? parseInt(stock) : item.initialAvailableQuantity,
    };
    res.json(resItem);
  } else {
    res.json({"status": "Product not found"});
  }
});
