TiACSPushNotification
=====================

This is Titanium Sample Application that support Titanium PushNotification with ACS for Android and iOS.
ACSを使ったAndroidおよびiOSのTitanium PushNotificationサンプルアプリです。

------
HOW TO
------
1.Set up Apple iOS Develop Center, install provisioning file to your computer.
iOS Develop Centerでpush通知用の設定を行い、プロビジョニングファイルをインストールします。

2.Set up ACS.
ACSを設定します。

See this sample page.
以下を参考にしてください。
http://www.titaniumtutorial.com/2012/06/appcelerator-cloud-push-notification-in.html

3.Titanium Module Setup(tiapp.xml)
tiapp.xmlにモジュール設定を行います。

Add these module settings to tiapp.xml
以下の設定をtiapp.xmlに追加します。

<module platform="commonjs" version="2.3.1">ti.cloud</module>
<module platform="android" version="2.1.0">ti.cloudpush</module>

4.Set up User ID & Password for using ACS.
ACSを利用するためのユーザIDとパスワードを設定します。

/ui/common/CloudPush4Android.js
/ui/common/CloudPush4iOS.js

Set your account.
あなたのアカウントを設定してください。

var loginUser = 'input user id';
var password = 'input password';

5.Build & Run, finish.
ビルドを実行して完了です。



