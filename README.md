## Motivation

Practicing building a command-line using as few libraries as possible in Node.js. Followed along with [this tutorial](https://timber.io/blog/creating-a-real-world-cli-app-with-node/#publishing-to-npm) however I did not use axios and chose to write my own requests from scratch.

## Getting Started

1. Fork then clone this repo.
2. In the command-line navigate to the root of the project folder.
3. Enter `npm install`.
4. Enter `nodemon`, (NOTE: if you are not using nodemon, enter `node index.js`).
5. You will need api keys from [ipdata.co](ipdata.co). Once you have them make a `.env` at the root of the directory and add them. `IPDATA_API_KEY=<YOUR KEYS HERE>`
6. Use any of the following commands to get weather forecasts and updates.

```
weathercli [command] <options>

current .............. show weather for current
forecast ........... show 10-day weather forecast

version ............ show package version
help ............... show help menu for a command


weathercli current <options>

--location, -l ..... the location to use


weathercli forecast <options>

--location, -l ..... the location to use
```
