Package.describe({
  name: "lufeng:validator",
  summary: "Validator for meteor app in server & client side",
  version: "0.0.1",
  git: "https://github.com/keith3/Meteor-Validator.git"
});

Package.onUse(function(api) {
  api.versionsFrom("1.1.0.2");
  api.addFiles('validator.js', ['server', 'client']);
  api.export('validator', ['server', 'client']);	
});
