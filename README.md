# meteor-env-setting
Simple helper to check environment variable for value before Meteor settings.

Installation
------------
`meteor add fongandrew:env-setting`

Usage
-----
`getEnvSetting("MY_SETTING")` will first look for a `MY_SETTING` environment
variable before checking Meteor.settings.MY_SETTING.

`getEnvSetting("MY_SETTING", true)` will treat a `MY_SETTING` environment 
variable as JSON and parse it accordingly.