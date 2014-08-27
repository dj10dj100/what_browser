whatbrowser.js
============

Ever tried to tell what the current browser is being used in Javascript? 

Well I have, Hundreds of times - so after a bit of refinement I've added all the bits of code I've used in the past into one succinct object.

# What browser am I using?

A simple javascript file that can be included to a webpage to use for browser detection,

It's great to target older browsers, IE6, IE7, IE8 and older versions of Safari, Chrome, Firefox, Opera.

```javascript
what.browser.isThis(function(device,version){ 
	console.log(device,version)
});
```

Includes detection for mobile devices, it'll tell you if the device is : 

### android: 

```javascript
what.device._android()
```

### blackBerry:, ios, iPhone, iPad, iPod, opera, windows.

Use this to find out if the current browser is:

#If the browser is Touch Enabled:

```javascript
what.browser.isThis(function(device,version){ 
	console.log(device,version)
});

#If the browser is desktop:

#If the browser is Tablet :

#If the browser is Mobile :


