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

      Meteor.http.post("http://worldhack.meteor.com/me/brandwarsgraph:adore",
        {brand: 'http://worldhack.meteor.com/Nikon.html'},
        function (error, result) {
                   if (result.statusCode === 200) {
                     console.log("You failed!");
                   }
                 });


      return false;

    }
};
