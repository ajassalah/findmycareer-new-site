module.exports = {
  apps: [
    {
      name: "fmc-site",
      cwd: __dirname,
      script: "server.js",
      env: {
        NODE_ENV: "production",
        PORT: "3002",
        HOST: "0.0.0.0",
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
