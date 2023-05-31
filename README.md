# HoyoCheckIn

A simple, fast and functional npm package for HoYoLAB check-ins in your project.

[![Commits](https://img.shields.io/github/last-commit/Pixlox/hoyocheckin?style=for-the-badge)](https://img.shields.io/github/last-commit/Pixlox/hoyocheckin?style=for-the-badge)
[![License](https://img.shields.io/npm/l/hoyocheckin?style=for-the-badge)](https://img.shields.io/npm/l/hoyocheckin?style=for-the-badge)
---
## Key Features
- Supports Honkai: Star Rail, Genshin Impact and Honkai Impact 3rd.
- Supports custom user agents, and defaults to a human-browser one if not provided.
- Small, efficient and functional.

## Install
Installing is easy, and is done via NPM. 
```
npm install hoyocheckin
```

## Usage
> IMPORTANT: While HoyoCheckIn aims to be undetectable, and there is no evidence that Artificial check-ins are bannable, you still agree to use this at your own risk. I am not responsible for any negative reprocussions that occur from using this software.

The most simple way to check-in is to not specify an User-Agent at all. It will automatically use a human-browser User-Agent.

```js
const { checkIn, HoyoGame } = require('hoyocheckin');

const cookie = {
  ltoken: 'YOUR_LTOKEN_VALUE',
  ltuid: 'YOUR_LTUID_VALUE'
};

const game = HoyoGame.StarRail; // You can replace this with Genshin or HKImpact, for those respective games.

try {
    const checkInResult = await checkIn(cookie, game);
    console.log('Check-in successful:', checkInResult);
  } catch (error) {
    console.error('Check-in failed:', error.message);
}
```

However, if you would still like to use a custom User-Agent, you may do so by simply inputting it in the function.

```js
const userAgent = "Example User-Agent";

const checkInResult = await checkIn(cookie, game, userAgent);
```


## Contributing

If you have any features or fixes you'd like to contribute, go for it! Any time spent is very, very appreciated.





