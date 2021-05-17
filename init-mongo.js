db.createUser({
  user: "microservices-test",
  pwd: "microservices-test",
  roles: [
    {
      role: "readWrite",
      db: "your-database-name",
    },
  ],
});
