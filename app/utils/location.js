const https = require('https');

module.exports = () => {
  return new Promise(function(resolve, reject) {
    const { IPDATA_API_KEY } = process.env;

    const url = `https://api.ipdata.co?api-key=${IPDATA_API_KEY}`;

    https
      .get(url, function(res) {
        var body = '';

        res.on('data', function(chunk) {
          body += chunk;
        });

        res.on('end', function() {
          const { city, region } = JSON.parse(body);
          resolve(`${city}, ${region}`);
        });
      })
      .on('error', function(err) {
        console.log(err);
        reject(err);
      });
  });
};
