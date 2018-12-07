const ora = require('ora'),
  getWeather = require('../utils/weather'),
  getLocation = require('../utils/location');

module.exports = async (args) => {
  const spinner = ora().start();

  const location =
    args.location ||
    args.l ||
    (await getLocation().then(function(location) {
      return location;
    }));

  console.log(`Fetching current conditions for ${location}`);

  getWeather(location)
    .then(function(weather) {
      spinner.stop();

      console.log(`

      Current conditions in ${location}:

      \t${weather.condition.temp}° ${weather.condition.text}

      `);
    })
    .catch(function(err) {
      spinner.stop();
      console.error(err);
    });
};
