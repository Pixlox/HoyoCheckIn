# HoyoCheckIn

A lightweight, fast and functional wrapper for HoYoLAB check-ins in your project.

[![Commits](https://img.shields.io/github/last-commit/Pixlox/hoyocheckin?style=for-the-badge)](https://img.shields.io/github/last-commit/Pixlox/hoyocheckin?style=for-the-badge)
[![License](https://img.shields.io/npm/l/hoyocheckin?style=for-the-badge)](https://img.shields.io/npm/l/hoyocheckin?style=for-the-badge)
---
## Key Features
- Supports Honkai: Star Rail, Genshin Impact and Honkai Impact 3rd.
- Supports custom user agents, and defaults to a human-browser one if not provided.
- Small (7KB), efficient and functional.

## Install
Installing is done via NPM. 
```
npm install hoyocheckin
```

## Usage
> [!NOTE] 
> Before continuing, please grab your HoYoLAB token. Specifically, ```ltoken``` and ```ltuid```. If you do not have these already, there is a script to get them below. Please also check if your token is ```v2``` or not, as well.

<<<<<<< HEAD
The most simple way to check-in is to not specify an User-Agent at all. It will automatically use a browsers User-Agent.

Please, also check if your token is ```v2``` or not. If it is, you will need to specify that in the ```checkIn()``` function. If you do not provide a token version, it will default to ```v1```.
=======
The most simple way to check-in is to not specify an User-Agent at all. It will automatically use a regular browser's User-Agent.
>>>>>>> f2ad1f8f949e6ea8822a19a8badbbc630b9e9ae6

```js
const { checkIn, HoyoGame } = require('hoyocheckin');

const cookie = {
  ltoken: 'YOUR_LTOKEN_VALUE',
  ltuid: 'YOUR_LTUID_VALUE'
};

const game = HoyoGame.StarRail; // You can replace this with Genshin or HKImpact, for those respective games.

try {
<<<<<<< HEAD
    const checkInResult = await checkIn(cookie, game, false); // v2, or not.
    console.log('Check-in successful:', checkInResult);
=======
    const checkInResult = await checkIn(cookie, game);
    console.log('Check-in successful:', checkInResult.message);
>>>>>>> f2ad1f8f949e6ea8822a19a8badbbc630b9e9ae6
  } catch (error) {
    console.error('Check-in failed:', error.message);
}
```

However, if you would still like to use a custom User-Agent, you may do so by simply inputting it in the ```CheckIn()``` function.

```js
const userAgent = "Example User-Agent";

const checkInResult = await checkIn(cookie, game, false, userAgent);
```

You can also find out if the user has already checked in, and respond to them accordingly.

```js
const checkInResult = await checkIn(cookie, game, false);
if (checkInResult.alreadyCheckedIn) {
  console.log(checkInResult.message);
}
```

HoYoLAB returns a custom message if check-in is already done, so, if you wish you can simply return that output to the user, as I have above.

> Just as an FYI, for each game they are:
>- You've already checked in today, Trailblazer~
>- Traveler, you've already checked in today~
>- You have already signed in, Captain~


## How do I get my token (v1)?

> [!WARNING] 
> This method no longer functions for ```v2``` HoYoLAB tokens. However, some users still have ```v1``` tokens, so try this first. A method for ```v2``` tokens is below.

Here's a script for you to get your token from HoYoLAB. Simply go to HoYoLAB, and hit Option + ⌘ + J on macOS, or Shift + CTRL + J.

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


## How do I get my token (v2)?

- Go to HoYoLAB, and navigate to your profile page.
- Open the developer console using Option + ⌘ + J on macOS, or Shift + CTRL + J, and go to the Network tab. 
- Click on the 'Preserve Log' button, then refresh the page.
- Click on the getGameRecordCard request where the method is ```GET``` (It should be named ```getGameRecordCard``` with your HoYoLAB UID).
- Go to the "Cookies" tab. 
- Copy the ```ltoken_v2``` and ```ltuid_v2``` cookie value.

![Demo Screenshot](demo_screenshot.jpg?raw=true "I do not have a v2 token, so please look for ltoken_v2 and ltuid_v2 in your cookies instead.")


## Contributing

If you have any features or fixes you'd like to contribute, open a PR.





