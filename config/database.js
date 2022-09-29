module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "103.138.88.35"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "ezt15163_order_food"),
      user: env("DATABASE_USERNAME", "ezt15163_root"),
      password: env("DATABASE_PASSWORD", "VyBgUP[]D%7;"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
