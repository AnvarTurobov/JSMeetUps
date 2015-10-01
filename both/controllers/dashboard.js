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
    'submit .update-meetup-form': function(event) {
     var title      = event.target.title.value;
     var email      = event.target.email.value;
     var topics     = event.target.topics.value;
     var type       = event.target.type.value;
     var address    = event.target.address.value;
     var city       = event.target.city.value;
     var postcode   = event.target.postcode.value;
     var meetupdate = event.target.meetupdate.value;
     var id         = event.target.id.value;

     var params = {
      title: title,
      email: email,
      topics: topics,
      type: type,
      address: address,
      city: city,
      postcode: postcode,
      meetupdate: meetupdate,
      updatedAt: new Date()
    }

    Meteor.call('updateMeetup', id, params); 

    toastr.success('Meetup updated');
    Router.go('/dashboard');

    return false;
  }
});
