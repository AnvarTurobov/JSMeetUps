Meetups.allow({
  'insert': function() {
    return true;
  },
  'update': function() {
    return true;
  },
  'remove': function() {
    return true;
  }
});



/*Original
Meetups.allow({
  'insert': function(userId, doc) {
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId;
  },
  'remove': function(userId, doc) {
    return userId;
  }
});*/
