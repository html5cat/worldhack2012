Meteor.subscribe("photos");

Template.worldhack.photos = function () {
    return Photos.find();
};

Template.worldhack.nikonIndex = function () {
    return nikonIndex();
};
