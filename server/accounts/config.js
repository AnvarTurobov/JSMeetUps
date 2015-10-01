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
      clientId: "0f90e849f997ef974e39",
      secret: "6f87531d4a9f29b0186a61cc9b5321ab1839d88b"
    }
    },
    { upsert: true }
  );

});