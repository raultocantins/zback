const newsApi = require("../Services/newsApi");

class NewsController {
  async getNews(req, res) {
    const { filter, page, pagesize, language } = req.headers;
    try {
      var result = await newsApi.getNewsByFilter({ filter, page, pagesize, language })

      res.status(200).json(result);
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }
  }
}

module.exports = new NewsController();
