const minimist = require('minimist'),
  error = require('../utils/error');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  var cmd = args._[0] || 'help';

  if (args.version || args.v) {
    cmd = 'version';
  }

  if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'current':
      require('./cmds/current')(args);
      break;
    case 'forecast':
      require('./cmds/forecast')(args);
      break;
    case 'version':
      require('./cmds/version')(args);
      break;
    case 'help':
      require('./cmds/help')(args);
      break;
    default:
      error(`Please enter a valid command`);
      break;
  }
};
