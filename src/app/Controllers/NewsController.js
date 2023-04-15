const newsApi = require("../Services/newsApi");

class NewsController {
  async getNews(req, res) {
    const { filter, page, pagesize } = req.headers;
    try {
      var result = await newsApi.getNewsByFilter({ filter, page, pagesize })

      res.status(200).json(result);
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }
  }
}

module.exports = new NewsController();
