if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

(function() {
	if (Ti.Platform.name == 'iPhone OS') {
		var CloudPush4iOS = require('ui/common/CloudPush4iOS');
		CloudPush4iOS.cloudPush4iOS();
	} else {
		var CloudPush4Android = require('ui/common/CloudPush4Android');
		CloudPush4Android.cloudPush4Android();
	}

	var Window;
	Window = require('ui/handheld/ApplicationWindow');
	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	new ApplicationTabGroup(Window).open();
})();
