# HoyoCheckIn

A simple, fast and functional npm package for HoYoLAB check-ins in your project.

[![Commits](https://img.shields.io/github/last-commit/Pixlox/hoyocheckin?style=for-the-badge)](https://img.shields.io/github/last-commit/Pixlox/hoyocheckin?style=for-the-badge)
[![License](https://img.shields.io/npm/l/hoyocheckin?style=for-the-badge)](https://img.shields.io/npm/l/hoyocheckin?style=for-the-badge)
---
## Key Features
- Supports Honkai: Star Rail, Genshin Impact, Honkai Impact 3rd, Zenless Zone Zero, and Tears of Themis.
- Supports Honkai: Star Rail, Genshin Impact, Honkai Impact 3rd _and_ Tears of Themis (if anyone even plays that...)
- Supports custom user agents, and defaults to a human-browser one if not provided.
- Small, efficient and functional.

## Install
Installing is done via NPM. 
```
npm install hoyocheckin
```

## Usage

First, get your HoYoLAB cookie:

1. Go to [HoYoLAB](https://www.hoyolab.com) and log in.
2. Open DevTools (F12), go to the **Application** tab (Chrome) or **Storage** tab (Firefox).
3. Under Cookies, find `ltoken_v2` and `ltuid_v2`.
4. Copy the full cookie string in the format: `ltuid_v2=YOUR_LTUID; ltoken_v2=YOUR_LTOKEN;`

You can also include other cookie fields like `account_mid_v2`, `account_id_v2`, and `ltmid_v2` if available.

```js
const { checkIn, HoyoGame } = require('hoyocheckin');

const cookie = 'ltuid_v2=YOUR_LTUID; ltoken_v2=YOUR_LTOKEN;';

const game = HoyoGame.StarRail; // Genshin, HKImpact, Zenless, or TearsOfThemis
const game = HoyoGame.StarRail; // You can replace this with Genshin, HKImpact or TearsOfThemis, for those respective games.

try {
  const checkInResult = await checkIn(cookie, game);
  console.log('Check-in successful:', checkInResult);
} catch (error) {
  console.error('Check-in failed:', error.message);
}
```

If you would like to use a custom User-Agent:

```js
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";
const checkInResult = await checkIn(cookie, game, false, userAgent);
```

You can also check if the user has already checked in:

```js
const checkInResult = await checkIn(cookie, game);
if (checkInResult.alreadyCheckedIn) {
  console.log(checkInResult.message);
}
```

HoYoLAB returns a custom message if check-in is already done:
- Star Rail: `You've already checked in today, Trailblazer~`
- Genshin Impact: `Traveler, you've already checked in today~`
- Honkai Impact 3rd: `You have already signed in, Captain~`

## Supported Games

| Game | Enum |
|------|------|
| Honkai: Star Rail | `HoyoGame.StarRail` |
| Genshin Impact | `HoyoGame.Genshin` |
| Honkai Impact 3rd | `HoyoGame.HKImpact` |
| Zenless Zone Zero | `HoyoGame.Zenless` |
| Tears of Themis | `HoyoGame.TearsOfThemis` |

## Contributing

If you have any features or fixes you'd like to contribute, open a PR.
