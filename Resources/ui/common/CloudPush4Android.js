var debugMode = true;
var loginUser = 'input user id!!';
var password = 'input password!!';

//create database
exports.cloudPush4Android = function() {
	var deviceToken;

	var CloudPush = require('ti.cloudpush');
	CloudPush.debug = debugMode;
	CloudPush.enabled = true;
	CloudPush.showTrayNotificationsWhenFocused = true;
	CloudPush.showTrayNotification = true;
	CloudPush.showAppOnTrayClick = true;
	CloudPush.focusAppOnPush = false;

	var Cloud = require('ti.cloud');
	Cloud.debug = debugMode;

	//retrieve Device Token
	CloudPush.retrieveDeviceToken({
		success : function deviceTokenSuccess(e) {
			Ti.API.info('Device Token: ' + e.deviceToken);
			deviceToken = e.deviceToken;
			login();
		},
		error : function deviceTokenError(e) {
			Ti.API.info('Failed to register for push! ' + e.error);
		}
	});

	//Login
	var login = function() {
		Cloud.Users.login({
			login : loginUser,
			password : password
		}, function(e) {
			if (e.success) {
				Ti.API.info("login success");
				defaultSubscribe();
			} else {
				Ti.API.info('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	};

	//Subscribe
	var defaultSubscribe = function() {
		Cloud.PushNotifications.subscribe({
			channel : 'alert',
			device_token : deviceToken,
			type : 'android'
		}, function(e) {
			if (e.success) {
				Ti.API.info('Subscribed for Push Notification!');
			} else {
				Ti.API.info('Error:' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	};

	//Callback when catch a Notification
	CloudPush.addEventListener('callback', function(evt) {
		var data = JSON.parse(evt.payload);
		Ti.API.info(data.android);
		showDialog(data.android.title, data.android.alert);
	});

	//Show dialog
	var showDialog = function(title, body) {
		var dialog = Titanium.UI.createAlertDialog();
		dialog.setTitle(title);
		dialog.setMessage(body);
		dialog.show();
	};

	CloudPush.addEventListener('trayClickLaunchedApp', function(evt) {
		Ti.API.info('Tray Click Launched App (app was not running)');
	});

	CloudPush.addEventListener('trayClickFocusedApp', function(evt) {
		Ti.API.info('Tray Click Focused App (app was already running)');
	});
};
