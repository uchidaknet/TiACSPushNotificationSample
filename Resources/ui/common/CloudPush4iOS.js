var debugMode = true;
var loginUser = 'input user id!!';
var password = 'input password!!';

//create database
exports.cloudPush4iOS = function() {
	var deviceToken;

	var Cloud = require('ti.cloud');
	Cloud.debug = debugMode;

	Cloud.Users.login({
		login : loginUser,
		password : password
	}, function(e) {
		if (e.success) {
			Ti.API.info("Loggin successfully");
			getDeviceToken();
		} else {
			Ti.API.info("Error :" + e.message);
		}
	});

	//getDeviceToken
	var getDeviceToken = function() {
		Titanium.Network.registerForPushNotifications({
			types : [Titanium.Network.NOTIFICATION_TYPE_BADGE, Titanium.Network.NOTIFICATION_TYPE_ALERT, Titanium.Network.NOTIFICATION_TYPE_SOUND],
			success : function(e) {
				deviceToken = e.deviceToken;
				Ti.API.info("deviceToken = " + deviceToken);
				registerForPush();
			},
			error : function(e) {
				Ti.API.info("Error: " + e.message);
			},
			callback : function(e) {
				Ti.API.info("push notification received" + JSON.stringify(e.data));
				pushNotifyCallback(e);
			}
		});
	};

	//registerForPush
	var registerForPush = function() {
		Cloud.PushNotifications.subscribe({
			channel : 'alert',
			type : 'ios',
			device_token : deviceToken
		}, function(e) {
			if (e.success) {
				Ti.API.info('Success :' + ((e.error && e.message) || JSON.stringify(e)));
			} else {
				Ti.API.info('Error:' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	};

	//Callback when catch a Notification
	var pushNotifyCallback = function(e) {
		Ti.API.info('callback');
		Titanium.Media.vibrate();
		Titanium.UI.iPhone.appBadge = null;
		var data = e.data;
		showDialog(data.title, data.alert);
	};

	//Show dialog
	var showDialog = function(title, body) {
		var dialog = Titanium.UI.createAlertDialog();
		dialog.setTitle(title);
		dialog.setMessage(body);
		dialog.show();
	};
};
