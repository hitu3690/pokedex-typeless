const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/rss",
    createProxyMiddleware({
      target: "https://www.pokemon.com/us/pokemon-news/",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
      },
      // methods: "GET",
    })
  );
  app.use(
    "/pokemon",
    createProxyMiddleware({
      target: "https://pokeapi.co/api/v2/",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
      },
      // methods: "GET",
    })
  );
};
