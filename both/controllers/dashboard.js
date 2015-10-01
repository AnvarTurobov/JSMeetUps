DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('mymeetups');
  },

});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
