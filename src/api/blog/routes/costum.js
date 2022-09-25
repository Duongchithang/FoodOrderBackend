module.exports = {
  routes: [
    {
      method: "GET",
      path: "/exampleAction",
      handler: "blog.exampleAction",
      config: {
        auth: false,
      },
    },
  ],
};
