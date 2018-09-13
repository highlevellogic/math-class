function startMyJS () {
  // plotMy2D();
  // plotMy3D();
  // create2DPlot(0,50,"2*Math.sin(x/5)");
  // create3DPlot(0,50,0,50,"2*Math.sin(x/5)+3*Math.sin(y/5)");
  // compareRange();
   output("Hello World!");
}
function plotMy2D () {
  var x=[],y=[];
  for (var i=-20; i<21; i++) {
    x.push(i);
    y.push(2*Math.sin(i/5));
  }
  plot2D(x,y);
}
function plotMy3D () {
  var x=[],y=[],z=[];
  for (var i=-20; i<21; i++) {
    for (var j=-20; j<21; j++) {
      x.push(i);
      y.push(j);
      z.push(5*Math.sin(i/10)*Math.sin(j/10));
    }
  }
  plot3D(x,y,z);
}
function compareRange () {
  const G=9.8;
  var x,y,xA,yA,c2;
  var plots=[];
  var angle=75;
  var angleIncr=-15;
  var velocity=50; // m/s
  var xIncr=10;
  var v2=2*Math.pow(velocity,2);
  for (var plotIndex=0; plotIndex<5; plotIndex++) {
    t=Math.tan(angle*Math.PI/180);
    c2=Math.pow(Math.cos(angle*Math.PI/180),2);
    xA=[0],yA=[0];
    x=xIncr,y;
    do {
      y=x*t-G*Math.pow(x,2)/(v2*c2);
      if (y>=0) {
        xA.push(x);
        yA.push(y);
      } else {
        xA.push(Math.pow(velocity,2)*Math.sin(2*angle*Math.PI/180)/G);
        yA.push(0);
      }
      x+=xIncr;
    } while (y>0);
    plots.push([xA,yA]);
    angle+=angleIncr;
  }
  plot2DMulti(plots);
}
 // https://stackoverflow.com/questions/37927746/how-to-plot-two-plots-in-the-same-figure-in-plotly-js
