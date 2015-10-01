DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('mymeetups');
  }
});

DashboardController.helpers({
  'mymeetups': function(){
    return Meetups.find({user: Meteor.userId()})
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
