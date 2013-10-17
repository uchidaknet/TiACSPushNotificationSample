TiACSPushNotificationSample(){
==================================================
This is a Titanium Sample Application that support PushNotification with ACS for Android and iOS.  

HOW TO
--------------------------------------------------
### Get provisioning file for push notification
Set up Apple iOS Develop Center, install provisioning file to your computer.  

### Set up ACS
See this sample page.  
[http://www.titaniumtutorial.com/2012/06/appcelerator-cloud-push-notification-in.html](http://www.titaniumtutorial.com/2012/06/appcelerator-cloud-push-notification-in.html)

### Titanium Module Setup(tiapp.xml)  
Add these module settings to `tiapp.xml`  

```xml
<module platform="commonjs" version="2.3.1">ti.cloud</module>  
<module platform="android" version="2.1.0">ti.cloudpush</module>
```

### Set up User ID & Password to use ACS.  
Set your ACS account to these files.  

`/ui/common/CloudPush4Android.js`  
`/ui/common/CloudPush4iOS.js`

```javascript
var loginUser = 'input user id';
var password = 'input password';
```

### Build & Run, finish.  

};
==================================================
© 2013 [Keisuke Uchida](http://uchidak.net) All rights reserved.