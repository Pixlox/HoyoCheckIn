const axios = require('axios');
const axiosRetry = require('axios-retry').default || require('axios-retry');

axiosRetry(axios, { retries: 3, retryDelay: (retryCount) => retryCount * 1000 });

const HoyoGame = {
  StarRail: 'StarRail',
  Genshin: 'Genshin',
  HKImpact: 'HKImpact',
  Zenless: 'Zenless',
  TearsOfThemis: 'TearsOfThemis'
};

const gameConfig = {
  StarRail: {
    url: 'https://sg-public-api.hoyolab.com/event/luna/os/sign?lang=en-us&act_id=e202303301540311',
    extraHeaders: {}
  },
  Genshin: {
    url: 'https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us&act_id=e202102251931481',
    extraHeaders: {}
  },
  HKImpact: {
    url: 'https://sg-public-api.hoyolab.com/event/mani/sign?lang=en-us&act_id=e202110291205111',
    extraHeaders: {}
  },
  Zenless: {
    url: 'https://sg-act-nap-api.hoyolab.com/event/luna/zzz/os/sign?lang=en-us&act_id=e202406031448091',
    extraHeaders: { 'x-rpc-signgame': 'zzz' }
  },
  TearsOfThemis: {
    url: 'https://sg-public-api.hoyolab.com/event/luna/os/sign?lang=en-us&act_id=e202308141137581',
    extraHeaders: {}
  }
};

const defaultHeaders = {
  'Accept': 'application/json, text/plain, */*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Connection': 'keep-alive',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  'x-rpc-app_version': '2.34.1',
  'x-rpc-client_type': '4',
  'Origin': 'https://act.hoyolab.com',
  'Referer': 'https://act.hoyolab.com/'
};

const checkIn = async (cookie, game, version = false, userAgent = '') => {
  if (!(game in HoyoGame)) {
    throw new Error('Invalid check-in game. Please choose from StarRail, Genshin, HKImpact, Zenless, and TearsOfThemis.');
  }

  const config = gameConfig[game];

  const headers = {
    ...defaultHeaders,
    ...config.extraHeaders,
    Cookie: cookie
  };

  if (userAgent) {
    headers['User-Agent'] = userAgent;
  }

  const body = JSON.stringify({
    lang: 'en-us',
    act_id: new URL(config.url).searchParams.get('act_id')
  });

  const axiosConfig = {
    headers,
    timeout: 10000
  };

  try {
    const response = await axios.post(config.url, body, axiosConfig);
    const responseData = response.data;
    const { data, message, retcode } = responseData;

    if (retcode === -5003) {
      return {
        data,
        message,
        retcode,
        alreadyCheckedIn: true
      };
    }

    return {
      data,
      message,
      retcode,
      alreadyCheckedIn: false
    };
  } catch (error) {
    throw new Error(`Check-in request failed: ${error.message}`);
  }
};

module.exports = {
  checkIn,
  HoyoGame
};
