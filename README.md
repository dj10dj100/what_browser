whatbrowser.js
============

Ever tried to tell what the current browser is being used in Javascript? 

Well I have, Hundreds of times - so after a bit of refinement I've added all the bits of code I've used in the past into one succinct object.

# What browser am I using?

A simple javascript file that can be included to a webpage to use for browser detection,

Simply include : 
``<script type="text/javascript" src="whatBrowser.js" ></script>
``

It's great to target older browsers, IE6, IE7, IE8 and older versions of Safari, Chrome, Firefox, Opera.

```javascript
what.browser.isThis(function(device,version){ 
	console.log(device,version)
});
```

Includes detection for mobile devices, it'll tell you if the device is : 

### android: 

```javascript
if(what.device._android() == true){
	//Device is an Android
}
```

### BlackBerry:
```javascript
if(what.device._blackBerry() == true){
	//Device is a BlackBerry
}
```
### iOS 
```javascript
if(what.device._ios() == true){
	//Device is iOS
}
```
### iPhone 
```javascript
if(what.device._iPhone() == true){
	//Device is iPhone
}
```
### iPad 
```javascript
if(what.device._iPad() == true){
	//Device is iPad
}
```
### iPod 
```javascript
if(what.device._iPod() == true){
	//Device is iPod
}
```
### opera Mobile
```javascript
if(what.device._opera() == true){
	//Device is Opera Mobile
}
```
### windows Phone
```javascript
if(what.device._windows() == true){
	//Device is Windows Phone
}
```

Use this to find out if the current browser is:

#If the browser is Touch Enabled:

```javascript
if(what.device.isTouchDevice() == true){
	//Touch Enabled device
}
```

#If the browser is desktop:

```javascript
if(what.device.isDesktop() == true){
	//Desktop device
}
```


#If the browser is Tablet :

```javascript
if(what.device.isTablet() == true){
	//Tablet device
}
```


#If the browser is Mobile :
```javascript
if(what.device.isMobile() == true){
	//Mobile device
}
```

