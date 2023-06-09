module.exports = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: "./roster.db3"
  },
  migrations: {
    directory: "./data/migrations"
  },
  seeds: {
    directory: "./data/seeds"
  }
}
