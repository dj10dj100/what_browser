
[![npm](https://img.shields.io/npm/dm/what_browser.svg)]()
[![npm](https://img.shields.io/npm/dt/what_browser.svg)]()
[![npm](https://img.shields.io/npm/v/what_browser.svg)]()

# <a href="https://github.com/dj10dj100/what_browser">WhatBrowser.js</a>

Ever wanted to know what the current Browser is being used in Javascript? 

This module helps *you* to understand what the device and browser the current session is using.

# install
<sup> npm</sup>
```javascript
npm install what_browser
```
<sup> yarn </sup>
``` javascript
yarn add what_browser
```
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


