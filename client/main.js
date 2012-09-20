Meteor.subscribe("photos");

Meteor.subscribe("meta");

Template.worldhack.photos = function () {
    return Photos.find();
};

Template.worldhack.meta = function () {
    return Meta.find();
};
