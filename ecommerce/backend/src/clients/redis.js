const Redis = require("ioredis");
const redis = new Redis({
  port: 13290, // Redis port
  host: "redis-13290.c261.us-east-1-4.ec2.cloud.redislabs.com", // Redis host
  username: "default", // needs Redis >= 6
  password: "zUFSFuhSwwYGzPxERy0rkCXttWwt9uPf",
  db: 0, // Defaults to 0
});

export default redis;
