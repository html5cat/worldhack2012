Meteor.subscribe("photos");

Meteor.subscribe("meta");

Template.worldhack.photos = function () {
    return Photos.find({}, {sort: {brand: -1} });
};

Template.worldhack.meta = function () {
    return Meta.find();
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
