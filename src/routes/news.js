module.exports = (src) => {
  const { NewsController } = src.app.Controllers;
  src.get("/news", NewsController.getNews);
};
