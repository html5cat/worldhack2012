Meteor.subscribe("photos");

Meteor.subscribe("meta");

Template.worldhack.photos = function () {
    return Photos.find({}, {sort: {brand: -1} });
};

Template.worldhack.meta = function () {
    return Meta.find();
};

Template.worldhack.meta.events = {
    'click': function () {

      Meteor.http.post("http://worldhack.meteor.com/me/brandwarsgraph:adore", {brand: 'http://worldhack.meteor.com/Nikon.html'});

      return false;

    }
};
