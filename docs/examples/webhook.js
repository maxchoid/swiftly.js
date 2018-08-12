/**
 * Send a message using a webhook
 */

// Import the swiftly.js module
const Discord = require('swiftly.js');

// Create a new webhook
const hook = new Discord.WebhookClient('webhook id', 'webhook token');

// Send a message using the webhook
hook.send('I am now alive!');
