var dotenv = require('dotenv');
dotenv.load();

module.exports = {
//  development: {
//    buildEnv: 'development', // Override the environment passed to the ember asset build. Defaults to 'production'
//    store: {
//      type: 'redis', // the default store is 'redis'
//      host: 'localhost',
//      port: 6379
//    },
//    assets: {
//      type: 's3', // default asset-adapter is 's3'
//      gzip: false, // if undefined or set to true, files are gziped
//      gzipExtensions: ['js', 'css', 'svg'], // if undefined, js, css & svg files are gziped
//      accessKeyId: '<your-access-key-goes-here>',
//      secretAccessKey: process.env['AWS_ACCESS_KEY'],
//      bucket: '<your-bucket-name>'
//    }
//  },

//  staging: {
//    buildEnv: 'staging', // Override the environment passed to the ember asset build. Defaults to 'production'
//    store: {
//      host: 'staging-redis.example.com',
//      port: 6379
//    },
//    assets: {
//      accessKeyId: '<your-access-key-goes-here>',
//      secretAccessKey: process.env['AWS_ACCESS_KEY'],
//      bucket: '<your-bucket-name>'
//    }
//  },
   production: {
    store: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD
    },
    assets: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_ACCESS_KEY,
      bucket: process.env.AWS_BUCKET
    }
  }
};
