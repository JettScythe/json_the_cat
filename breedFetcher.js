const request = require('request');
const myArgs = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${myArgs}`, (error, response, body) => {
  if (error) {
    throw error;
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log(`${myArgs} is not a valid breed!`);
  } else {
    console.log(data[0].description);
  }
});