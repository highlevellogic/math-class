const fs = require('fs');
const readLine = require('readline');
// const table = require('table');
const plotly = require('plotly')('rogerfgay','TZf0HE2WaF2Q2K022XVR');

exports.readArray = function (fileName) {

// if (!fs.existsSync(theRootPath))

var lineReader = readLine.createInterface({
  input: fs.createReadStream(fileName)
});

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
});
}
exports.writeArray = function (fileName,array) {
  var file = fs.createWriteStream(fileName);
  file.on('error', function(err) { /* error handling */ });
  array.forEach(function(v) { file.write(v.join(', ') + '\n'); });
  file.end();
}
exports.addArray = function (array,func) {
  var result=0;
  array.forEach(function(v) { v.forEach(function(w) {result+=w;}) });
  console.log("addArray: " + result);
  return result;
}
exports.setArray = function (array) {
  return JSON.stringify({array:array});
}
exports.getArray = function (array) {
  return JSON.parse(array).arr;
}
// TZf0HE2WaF2Q2K022XVR

exports.plot1 = function () {
  Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}
  
var z_data=[ ]
for(i=0;i<24;i++)
{
  z_data.push(unpack(rows,i));
}

var data = [{
           z: z_data,
           type: 'surface'
        }];
  
var layout = {
  title: 'Mt Bruno Elevation',
  autosize: false,
  width: 500,
  height: 500,
  margin: {
    l: 65,
    r: 50,
    b: 65,
    t: 90,
  }
};
Plotly.newPlot('myDiv', data, layout);
});
}