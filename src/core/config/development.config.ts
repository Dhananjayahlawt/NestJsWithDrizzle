export default () => ({
  app: {
    port: parseInt(process.env.SERVER_PORT),
  },
  db: {
  connectionString:process.env.CONNECTION_STRING
  },
});
