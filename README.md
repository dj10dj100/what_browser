whatBrowser.js
============

Ever tried to tell what the current Browser is being used in Javascript? 

Well I have, Hundreds of times - so after a bit of refinement I've added all the bits of code I've used in the past into one small library, feel free to fork it, make changes and suggestions....

# What Browser am I using?

A js module that returns information about the current users browser.

```javascript
import what from 'what_browser';
```

# Browser information
returns device type and version
```javascript
what.Browser.isThis(function(device,version) { 
	console.log(device, version)
});
```

#### If the Browser is Touch Enabled:

```javascript
what.device.isTouchDevice()
```

#### If the Browser is desktop:

```javascript
what.device.isDesktop()
```

#### If the Browser is Tablet :

```javascript
what.device.isTablet()
```


#### If the Browser is Mobile :
```javascript
what.device.isMobile()
```

# Device Detection

## Specific Mobile operating systems 

```javascript
//Android
what.device._android()
//BlackBerry
what.device._blackBerry()
//iOS
what.device._ios(),
```
## Specific models

### iPhone 
```javascript
what.device._iPhone()
```
### iPad 
```javascript
what.device._iPad()
```
### iPod 
```javascript
what.device._iPod()
```
### Opera Mobile
```javascript
what.device._opera()
```
### Windows Phone
```javascript
what.device._windows()
```
Any comments, or questions grab me on twitter @dj10dj100


