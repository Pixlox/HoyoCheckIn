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
Installing is done via NPM. 
```
npm install hoyocheckin
```

## Usage
> NOTE: Before continuing, please grab your HoYoLAB token. Specifically, ```ltoken``` and ```ltuid```. If you do not have these already, there is a script to get them below.

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

However, if you would still like to use a custom User-Agent, you may do so by simply inputting it in the ```CheckIn()``` function.

```js
const userAgent = "Example User-Agent";

const checkInResult = await checkIn(cookie, game, userAgent);
```


## How do I get my token?

I have created a script for you to get your token from HoYoLAB. Simply go to HoYoLAB, and hit Option + ⌘ + J on macOS, or Shift + CTRL + J on Windows / Linux.

After that, you can copy this script, and punch it into the console. It should return your ```ltuid``` and your ```ltoken```. Which then, you can use in HoyoCheckIn, or any other programs that utilise it.

```js
var ltoken = '';
var ltuid = '';

if (document.cookie.includes('ltoken') && document.cookie.includes('ltuid')) {
  var cookieArr = document.cookie.split(';');
  for (var i = 0; i < cookieArr.length; i++) {
    var cookie = cookieArr[i].trim();
    if (cookie.startsWith('ltoken')) {
      ltoken = 'ltoken=' + cookie.split('=')[1] + ';';
    } else if (cookie.startsWith('ltuid')) {
      ltuid = 'ltuid=' + cookie.split('=')[1] + ';';
    }
  }
}

if (ltoken && ltuid) {
  var cookie = ltoken + ' ' + ltuid;
  document.write(cookie);
} else {
  alert('Please logout and log back in before trying again. The cookie is currently expired or invalid!');
}
```

## Contributing

If you have any features or fixes you'd like to contribute, open a PR.





