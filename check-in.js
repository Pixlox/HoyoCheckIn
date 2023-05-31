const axios = require('axios');

const checkIn = async (cookie, game) => {
  let url = '';
  if (game === 'HSR') {
    url = 'https://sg-public-api.hoyolab.com/event/luna/os/sign?lang=en-us&act_id=e202303301540311';
  } else if (game === 'GI') {
    url = 'https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us&act_id=e202102251931481';
  } else if (game === 'HI3') {
    url = 'https://sg-public-api.hoyolab.com/event/mani/sign?lang=en-us&act_id=e202110291205111';
  } else {
    throw new Error('Invalid game. Cannot check in.');
  }

  const headers = {
    Cookie: cookie,
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    Origin: 'https://act.hoyolab.com',
    Connection: 'keep-alive',
    Referer: 'https://act.hoyolab.com/'
  };

  const response = await axios.post(url, null, { headers });
  return response.data;
};

module.exports = {
  checkIn
};
