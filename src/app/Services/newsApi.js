var axios = require("axios").default;
const KEY_API = process.env.KEY_API || "";
class NewsApi {
  constructor() {
  }
  getNewsByFilter = async ({ filter, page, pagesize, language }) => {
    var d = new Date();
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
        "earliest-publish-date": new Date((new Date().setDate(d.getDate() - 30))).toISOString(),
        language: language
      },
    };
    var result = await axios.request(options);
    return result.data;
  };




}


module.exports = new NewsApi();
