const axios = require('axios');

const HoyoGame = {
  StarRail: 'StarRail',
  Genshin: 'Genshin',
  HKImpact: 'HKImpact'
};

const checkIn = async (cookie, game, userAgent = '') => {
  if (!(game in HoyoGame)) {
    throw new Error('Invalid game');
  }

  let url = '';
  if (game === HoyoGame.StarRail) {
    url = 'https://sg-public-api.hoyolab.com/event/luna/os/sign?lang=en-us&act_id=e202303301540311';
  } else if (game === HoyoGame.Genshin) {
    url = 'https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us&act_id=e202102251931481';
  } else if (game === HoyoGame.HKImpact) {
    url = 'https://sg-public-api.hoyolab.com/event/mani/sign?lang=en-us&act_id=e202110291205111';
  }

  const headers = {
    Cookie: `ltoken=${cookie.ltoken}; ltuid=${cookie.ltuid}`,
    'User-Agent': userAgent || 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    Origin: 'https://act.hoyolab.com',
    Connection: 'keep-alive',
    Referer: 'https://act.hoyolab.com/'
  };

  const axiosConfig = {
    headers,
    timeout: 10000,
    retries: 3, 
    retryDelay: (retryCount) => retryCount * 1000 
  };

  try {
    const response = await axios.post(url, null, axiosConfig);
    const responseData = response.data;
    const { data, message, retcode } = responseData;

    if (retcode === -5003) {
      throw new Error(message);
    }

    return data;
  } catch (error) {
    throw new Error(`Check-in request failed: ${error.message}`);
  }
};

module.exports = {
  checkIn,
  HoyoGame 
};
