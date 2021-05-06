const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(`${breedName} is not a valid breed!`, null);
      } else {
        callback(null, data[0].description);
      }
    } else {
      callback(error, null);
    }
  });
};

module.exports = fetchBreedDescription;
