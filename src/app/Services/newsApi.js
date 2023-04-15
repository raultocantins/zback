var axios = require("axios").default;
const KEY_API = process.env.KEY_API || "nada";
class NewsApi {
  constructor() {
  }
  getNewsByFilter = async ({ filter, page, pageSize }) => {
    var options = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: { q: filter, lang: 'pt,en', sort_by: 'relevancy', page: page, page_size: pageSize },
      headers: {
        'x-api-key': KEY_API
      }
    };
    var result = await axios.request(options);
    return result.data;
  };

}


module.exports = new NewsApi();
