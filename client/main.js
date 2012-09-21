Meteor.subscribe("photos");

Meteor.subscribe("meta");

Template.worldhack.photos = function () {
    return Photos.find();
};

Template.worldhack.meta = function () {
    return Meta.find();
};


Meteor.startup( function() {

  // function getNikonCanonIndex() {

  //   console.log(Meta.find( {"nikonCount"} ));

  // }

  // getNikonCanonIndex();

  // var opts = {
  //   lines: 12, // The number of lines to draw
  //   angle: 0.15, // The length of each line
  //   lineWidth: 0.44, // The line thickness
  //   pointer: {
  //     length: 0.9, // The radius of the inner circle
  //     strokeWidth: 0.035 // The rotation offset
  //   },
  //   colorStart: '#6FADCF',   // Colors
  //   colorStop: '#8FC0DA',    // just experiment with them
  //   strokeColor: '#E0E0E0'   // to see which ones work best for you
  // };
  // var target = document.getElementById('NikonGauge'); // your canvas element
  // var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  // gauge.value = 1250; // set actual value
  // gauge.maxValue = 3000; // set max gauge value

});

