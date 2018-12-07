const menus = {
  main: `

    weathercli [command] <options>

    current .............. show weather for current
    forecast ........... show 10-day weather forecast
    
    version ............ show package version
    help ............... show help menu for a command
    
    `,

  current: `

    weathercli current <options>

    --location, -l ..... the location to use
    
    `,

  forecast: `

    weathercli forecast <options>

    --location, -l ..... the location to use
    `
};

module.exports = (args) => {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
