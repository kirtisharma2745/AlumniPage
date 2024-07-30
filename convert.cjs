const fs = require('fs');
const csv = require('csvtojson');

csv()
  .fromFile('data.csv')
  .then((jsonObj) => {
    fs.writeFileSync('./public/data.json', JSON.stringify(jsonObj, null, 2));
    console.log('CSV file successfully converted to JSON and saved as public/data.json');
  })
  .catch((err) => {
    console.error('Error converting CSV to JSON', err);
  });
