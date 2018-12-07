const menus = {
  main: `

    weathercli [command] <options>

    current .............. show weather for current
    forecast ........... show 10-day weather forecast
    
    version ............ show package version
    help ............... show help menu for a command
    

    weathercli current <options>

    --location, -l ..... the location to use


    weathercli forecast <options>

    --location, -l ..... the location to use

    `
};

module.exports = (args) => {
  console.log(menus.main);
};
