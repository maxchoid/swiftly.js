<div align="center">
  <br />
  <p>
    <a href="https://swiftlyjs.org"><img src="/static/logo.svg" width="546" alt="swiftly.js" id="djs-logo" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/Y4yAKBS"><img src="https://discordapp.com/api/guilds/222078108977594368/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/swiftly.js"><img src="https://img.shields.io/npm/v/swiftly.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/swiftly.js"><img src="https://img.shields.io/npm/dt/swiftly.js.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://travis-ci.org/swiftlyjs/swiftly.js"><img src="https://travis-ci.org/swiftlyjs/swiftly.js.svg" alt="Build status" /></a>
    <a href="https://david-dm.org/swiftlyjs/swiftly.js"><img src="https://img.shields.io/david/swiftlyjs/swiftly.js.svg?maxAge=3600" alt="Dependencies" /></a>
    <a href="https://www.patreon.com/swiftlyjs"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/swiftly.js/"><img src="https://nodei.co/npm/swiftly.js.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

# Welcome!
Welcome to the swiftly.js v12 documentation.

v12 is still very much a work-in-progress, as we're aiming to make it the best it can possibly be before releasing.
Only use it if you are fond of living life on the bleeding edge.

## About
swiftly.js is a powerful [Node.js](https://nodejs.org) module that allows you to interact with the
[Discord API](https://discordapp.com/developers/docs/intro) very easily.

- Object-oriented
- Predictable abstractions
- Performant
- 100% coverage of the Discord API

## Installation
**Node.js 8.0.0 or newer is required.**  
Ignore any warnings about unmet peer dependencies, as they're all optional.

Without voice support: `npm install swiftly.js`  
With voice support ([node-opus](https://www.npmjs.com/package/node-opus)): `npm install swiftly.js node-opus`  
With voice support ([opusscript](https://www.npmjs.com/package/opusscript)): `npm install swiftly.js opusscript`

### Audio engines
The preferred audio engine is node-opus, as it performs significantly better than opusscript. When both are available, swiftly.js will automatically choose node-opus.
Using opusscript is only recommended for development environments where node-opus is tough to get working.
For production bots, using node-opus should be considered a necessity, especially if they're going to be running on multiple servers.

### Optional packages
- [zlib-sync](https://www.npmjs.com/package/zlib-sync) for significantly faster WebSocket data inflation (`npm install zlib-sync`)
- [erlpack](https://github.com/discordapp/erlpack) for significantly faster WebSocket data (de)serialisation (`npm install discordapp/erlpack`)
- One of the following packages can be installed for faster voice packet encryption and decryption:
    - [sodium](https://www.npmjs.com/package/sodium) (`npm install sodium`)
    - [libsodium.js](https://www.npmjs.com/package/libsodium-wrappers) (`npm install libsodium-wrappers`)
- [uws](https://www.npmjs.com/package/uws) for a much faster WebSocket connection (`npm install uws`)
- [bufferutil](https://www.npmjs.com/package/bufferutil) for a much faster WebSocket connection when *not* using uws (`npm install bufferutil`)

## Example usage
```js
const Discord = require('swiftly.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('token');
```

## Links
* [Website](https://swiftlyjs.org/) ([source](https://github.com/swiftlyjs/website))
* [Documentation](https://swiftlyjs.org/#/docs)
* [swiftly.js Discord server](https://discord.gg/Y4yAKBS)
* [Discord API Discord server](https://discord.gg/discord-api)
* [GitHub](https://github.com/swiftlyjs/swiftly.js)
* [NPM](https://www.npmjs.com/package/swiftly.js)
* [Related libraries](https://discordapi.com/unofficial/libs.html)

### Extensions
* [RPC](https://www.npmjs.com/package/discord-rpc) ([source](https://github.com/swiftlyjs/RPC))

## Contributing
Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation](https://swiftlyjs.org/#/docs).  
See [the contribution guide](https://github.com/swiftlyjs/swiftly.js/blob/master/.github/CONTRIBUTING.md) if you'd like to submit a PR.

## Help
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [swiftly.js Server](https://discord.gg/Y4yAKBS).
