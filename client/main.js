Meteor.subscribe("photos");

Meteor.subscribe("meta");

Template.worldhack.photos = function () {
    return Photos.find({}, {sort: {brand: -1} });
};

Template.worldhack.meta = function () {
    return Meta.find();
};

Template.worldhack.agent = function () {
    return navigator.userAgent;
};

Template.worldhack.ffInstalled = function () {


  if (navigator.mozApps) {
    // //Mozilla web apps
    // install.type = 'mozilla';

    request = navigator.mozApps.getSelf();
    request.onsuccess = function () {
        if (this.result) {
            console.log('installed');

            return 'installed';
        } else {
            return'uninstalled';
        }
    };
  }
};

Template.worldhack.showFF = function () {
  if ((navigator.userAgent.indexOf("Mobile; rv:18.0") > -1) ||
     (navigator.userAgent.indexOf("Firefox/20.0") > -1)) {
      return 'show';
  }
};


Template.item.events = {
    'click': function () {

      Meteor.http.post("http://graph.facebook.com/me/brandwarsgraph:adore",
        {brand: 'http://worldhack.meteor.com/Nikon.html', access_token: 'AAACzYNkXPSoBAJv6fzkZCW337wxVUdHMldiq6g3lbG4txbobgbAZCGI3ZCDfCvpZAXJZCjyhO2cSDh0JM8hhJze1KPX3guQyQZCWg74gJbSAZDZD' },
        function (error, result) {
                   if (result.statusCode === 200) {
                     console.log("You failed!");
                   }
                 });


      return false;

    }
};
