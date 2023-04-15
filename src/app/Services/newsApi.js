var axios = require("axios").default;
const KEY_API = process.env.KEY_API || "";
class NewsApi {
  constructor() {
  }
  getNewsByFilter = async ({ filter, page, pagesize }) => {
    var options = {
      method: 'GET',
      url: 'https://api.worldnewsapi.com/search-news',
      params: {
        "api-key": KEY_API,
        text: filter,
        number: pagesize,
        offset: (parseInt(pagesize) * parseInt(page)).toString(),
        sort: "publish-time",
        "sort-direction": "desc",
        language: "pt"
      },
      headers: {
        'x-api-key': KEY_API
      }
    };
    var result = await axios.request(options);
    return result.data;
  };




}


module.exports = new NewsApi();
