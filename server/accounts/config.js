Meteor.startup(function() {
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
      appId: "xxxxxxxxxxxxxxxxxxxx",
      secret: "xxxxxxxxxxxxxxxxxxx"
    }
  },
  { upsert: true }
  );

  // Add Google configuration entry
  ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
      clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      client_email: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
      secret: "XXXXXXXXXXXXXXXXXXXXXXXX"
    }
  },
  { upsert: true }
  );

  // Add Twitter configuration entry
  ServiceConfiguration.configurations.update(
    { service: "twitter" },
    { $set: {
      consumerKey: "XXXXXXXXXXXX",
      secret: "XXXXXXXX"
    }
  },
  { upsert: true }
  );

  // Add GitHub configuration entry
  ServiceConfiguration.configurations.update(
    { service: "github" },
    { $set: {
      clientId: process.env.GITHUB_CLIENT_ID,
      secret: process.env.GITHUB_SECRET
    }
  },
  { upsert: true }
  );

});