const ora = require('ora'),
  getWeather = require('../utils/weather'),
  getLocation = require('../utils/location');

module.exports = async (args) => {
  const spinner = ora().start();

  console.log(args);

  const location =
    args.location ||
    args.l ||
    (await getLocation().then(function(location) {
      console.log(location);
      return location;
    }));

  console.log(`Fetching 10-Day forecast for ${location}`);

  getWeather(location)
    .then(function(weather) {
      spinner.stop();

      console.log(`

      10-Day Forecast for ${location}:

      `);

      weather.forecast.forEach((item) =>
        console.log(
          `\t${item.date} - Low: ${item.low}° | High: ${item.high}° | ${
            item.text
          }`
        )
      );

      console.log('\n');
    })
    .catch(function(err) {
      spinner.stop();
      console.error(err);
    });
};
