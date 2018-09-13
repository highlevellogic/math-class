
function addArray (array,func) {
  var result=0;
  array.forEach(function(v) { v.forEach(function(w) {result+=w;}) });
  console.log("addArray: " + result);
  return result;
}
function setArray (array) {
  return JSON.stringify({array:array});
}
function getArray (array) {
  return JSON.parse(array).arr;
}
function create2DPlot (xmin,xmax,func) {
  let inc=1;
  let xa=[],ya=[];
  let thisFunc = new Function('x',"return " + func);
  for (var x=xmin; x<=xmax; x+=inc) {
    xa.push(x);
    ya.push(thisFunc(x));
  }
	Plotly.plot( PLOTAREA, [{
	x: xa,
	y: ya }], {
	margin: { t: 0 } } );
}
function create3DPlot (xmin,xmax,ymin,ymax,func) {
  let inc=1;
  let xa=[],ya=[],za=[];
  let thisFunc = new Function('x','y',"return " + func);
  for (var x=xmin; x<=xmax; x+=inc) {
    for (var y=ymin; y<=ymax; y+=inc) {
      xa.push(x);
      ya.push(y);
      za.push(thisFunc(x,y));
    }
  }
  var data=[
    {
      opacity:0.8,
      color:'rgb(300,100,200)',
      type: 'mesh3d',
      x: xa,
      y: ya,
      z: za,
    }
];
Plotly.newPlot(PLOTAREA, data);
}
function plot3D (xa,ya,za) {

  var data=[
    {
      opacity:0.8,
      color:'rgb(300,100,200)',
      type: 'mesh3d',
      x: xa,
      y: ya,
      z: za,
    }
];
Plotly.newPlot(PLOTAREA, data);
}
function plot2D (xa,ya) {
	Plotly.plot(PLOTAREA, [{
	x: xa,
	y: ya }], {
	margin: { t: 0 } } );
}
function plot2DMulti (plots) {
  var plotData=[];
  for (var i=0; i<plots.length; i++) {
    plotData.push(new Plots(plots[i][0],plots[i][1]));
  }
  Plotly.newPlot(PLOTAREA, plotData);
}
function Plots (xA,yA) {
  this.x=xA;
  this.y=yA;
}