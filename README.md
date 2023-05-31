# HoyoCheckIn
A simple npm package for HoyoLAB check-ins.
[![Node](https://img.shields.io/node/v-lts/hoyocheckin?style=for-the-badge)
[![Size](https://img.shields.io/bundlephobia/minzip/hoyocheckin?label=bundle%20size&style=for-the-badge)

---
## Key Features
- Supports Honkai: Star Rail, Genshin Impact and Honkai Impact 3rd.
- Supports custom user agents, and defaults to a human-browser one if not provided.
- Small, efficient and functional.

## Usage
> NOTE: While HoyoCheckIn aims to be undetectable, and there is no evidence that using Artificial-based check-ins are bannable, you still agree to use this at your own risk. I am not responsible for any reprocussions that occur from using this software.

```
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

If you would like to use a custom User-Agent, you may by simply inputting it in the CheckIn function.

```
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36";

const checkInResult = await checkIn(cookie, game, userAgent);
```







