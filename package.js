Package.describe({
  name: 'fongandrew:env-setting',
  summary: 'Helper to first environment variable for value before Meteor ' +
           'settings',
  version: '0.1.0'
});

Package.onUse(function(api) {
  'use strict';

  api.versionsFrom('1.0');
  api.addFiles('env_setting.js');
  api.export(['getEnvSetting'], ['server']);
});
