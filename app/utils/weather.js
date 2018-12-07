const https = require('https');

module.exports = (location) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodeURIComponent(
        location
      )}%22)&format=json`;

      https
        .get(url, function(res) {
          let body = '';

          res.on('data', function(chunk) {
            body += chunk;
          });

          res.on('end', function() {
            resolve(JSON.parse(body).query.results.channel.item);
          });
        })
        .on('error', function(err) {
          console.error(`Error: ${err}`);
          reject(err);
        });
    }, 2000);
  });
};
