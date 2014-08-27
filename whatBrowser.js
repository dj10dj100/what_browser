/* -- Proper Browser Detection --------------- 
    Author :Daniel Jenkins
    URL : http://www.daniel-jenkins.com
    GitHub : https://github.com/dj10dj100/what_browser
    Use this however you want.
*/

var what = what || {

    browser : {
        isThis: function(callback) {
            this.browser = this.searchString(this.dataBrowser) || "Other";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";

            what.device.browserName = this.browser;
            what.device.browserVersion = this.version;

            if (typeof(callback) == "function") {
                callback(this.browser, this.version);
            }
        },

        searchString: function(data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) != -1) {
                    return data[i].identity;
                }
            }
        },

        searchVersion: function(dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },

        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.userAgent,
            subString: "Safari",
            identity: "Safari"
        }, {
            string: navigator.userAgent,
            subString: "Opera",
            identity: "Opera"
        }]

    },
    /* 
     * Use this to find specific device type on the fly
     * Returns, mobile, type & screen sizes.
     */
    device : {

        _android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        _blackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        _ios: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        _iPhone: function() {
            return navigator.userAgent.match(/iPhone/i);
        },
        _iPad: function() {
            return navigator.userAgent.match(/iPad/i);
        },
        _iPod: function() {
            return navigator.userAgent.match(/iPod/i);
        },
        _opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        _windows: function() {
            return navigator.userAgent.match(/IEMobile|Windows Phone/i);
        },
        _any: function() {
            return (what.device._android() || what.device._blackBerry() || what.device._ios() || what.device._opera() || what.device._windows());
        },
        isMobile: function() {
            if (what.device.screenSize.width <= 550 && what.device._any() == true) {
                return true;
            } else {
                return false;
            }
        },
        isTablet: function() {
            if (what.device.screenSize.width <= 800 && what.device.screenSize.width >= 550) {
                return true;
            } else {
                return false;
            }
        },
        isTouchDevice: function() {
            return 'ontouchstart' in window // works on most browsers 
                || 'onmsgesturechange' in window; // works on ie10
        },
        isDesktop: function() {
            if (what.device.screenSize.width >= 640 && what.device.isTouchDevice() == false) {
                return true;
            } else {
                return false;
            }
        }
    }
}



