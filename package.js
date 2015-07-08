Package.describe({
  name: 'fongandrew:env-setting',
  summary: 'Helper to check environment variable for value before Meteor ' +
           'settings',
  version: '0.1.0',
  git: 'https://github.com/fongandrew/meteor-env-setting.git'
});

Package.onUse(function(api) {
  'use strict';

  api.versionsFrom('1.0');
  api.addFiles('env_setting.js');
  api.export(['getEnvSetting'], ['server']);
});
