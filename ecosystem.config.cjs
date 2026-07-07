module.exports = {
  apps: [
    {
      name: "fmc-site",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3002 -H 0.0.0.0",
      env: {
        NODE_ENV: "production",
        PORT: "3002",
        HOST: "0.0.0.0",
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
