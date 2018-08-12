<div align="center">
  <br />
  <p>
    <a href="https://swiftlyjs.org"><img src="https://swiftlyjs.org/static/logo.svg" width="546" alt="swiftly.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/Y4yAKBS"><img src="https://discordapp.com/api/guilds/477971677742104597/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/swiftly.js"><img src="https://img.shields.io/npm/v/swiftly.js.svg" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/swiftly.js"><img src="https://img.shields.io/npm/dt/swiftly.js.svg?" alt="NPM downloads" /></a>
    <a href="https://travis-ci.org/iilukas/swiftly.js"><img src="https://travis-ci.org/iilukas/swiftly.js.svg" alt="Build status" /></a>
    <a href="https://david-dm.org/iilukas/swiftly.js"><img src="https://img.shields.io/david/iilukas/swiftly.js.svg?maxAge=3600" alt="Dependencies" /></a>
    <a href="https://www.patreon.com/swiftlyjs"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/swiftly.js/"><img src="https://nodei.co/npm/swiftly.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

## About
Swiftly.JS is a powerful [Node](https://nodejs.org) module that allows you to interact with the
[Discord API](https://discordapp.com/developers/docs/intro) very easily.

- Object-oriented
- 100% coverage of the Discord API

## Installation
**Node.js 8.0.0+ is required.**  
Ignore any warnings about unmet peer dependencies, as they're all optional.


Without voice support: `npm install swiftly.js`  
With voice support ([node-opus](https://www.npmjs.com/package/node-opus)): `npm install swiftly.js node-opus`  
With voice support ([opusscript](https://www.npmjs.com/package/opusscript)): `npm install swiftly.js opusscript`

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
const swift = require('swiftly.js');
const client = new swift.Client();
const token = 'TOKEN HERE';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }
});

client.login(token);
```

## Links
* [Documentation](https://swiftlyjs.org/#/docs)
* [swiftly.js Discord server](https://discord.gg/Y4yAKBS)
* [Discord API Discord server](https://discord.gg/discord-api)
* [GitHub](https://github.com/swiftlyjs/swiftly.js)
* [NPM](https://www.npmjs.com/package/swiftly.js)

## Help
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [swiftly.js Server](https://discord.gg/Y4yAKBS).
