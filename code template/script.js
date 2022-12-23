(function() {
    'use strict';
    try {
        var testInfo = {
            className: 'test-test',
            debug: 0,
            testName: 'test',
            testVersion: '0.0.1'
        }
        if (!document.body.classList.contains(testInfo.className)) {
            document.body.classList.add(testInfo.className);
        }
        var utilityFunction = {
            detectOS: function() {
                let userAgent = window.navigator.userAgent;
                let platform = window.navigator.platform;
                let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
                let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
                let iosPlatforms = ['iPhone', 'iPad', 'iPod'];
                let os = null;
                if (macosPlatforms.indexOf(platform) !== -1) {
                    os = 'MacOS';
                } else if (iosPlatforms.indexOf(platform) !== -1) {
                    os = 'iOS';
                } else if (windowsPlatforms.indexOf(platform) !== -1) {
                    os = 'Windows';
                } else if (/Android/.test(userAgent)) {
                    os = 'Android';
                } else if (!os && /Linux/.test(platform)) {
                    os = 'Linux';
                }
                return os;
            },
            detectBrowser: function() {
                let userAgent = window.navigator.userAgent;
                let browser = null;
                if ((userAgent.indexOf("Opera") || userAgent.indexOf("OPR")) != -1) {
                    browser = 'Opera';
                } else if (userAgent.indexOf("Chrome") != -1) {
                    browser = 'Chrome';
                } else if (userAgent.indexOf("Safari") != -1) {
                    browser = 'Safari';
                } else if (userAgent.indexOf("Firefox") != -1) {
                    browser = 'Firefox';
                } else if ((userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
                    browser = 'IE'; //crap
                } else {
                    browser = 'Unknown';
                }
                return browser;
            },
            getScript: function getScript(source, callback) {
                let element = document.createElement('script');
                element.onload = callback;
                element.src = source;
                document.body.appendChild(element);
            },
            getCookie: function(cookieName) {
                let name = cookieName + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            },
            insertBefore: function(referenceSelector, insertingSelector) {
                let referenceElement = document.querySelector(referenceSelector);
                let insertingElement = document.querySelector(insertingSelector);
                referenceElement.parentNode.insertBefore(insertingElement, referenceElement);
            },
            insertAfter: function insertAfter(referenceSelector, insertingSelector) {
                let referenceElement = document.querySelector(referenceSelector);
                let insertingElement = document.querySelector(insertingSelector);
                referenceElement.parentNode.insertBefore(insertingElement, referenceElement.nextSibling);
            },
            jqueryInterval: function(trigger, delayInterval) {
                let checkJquery = setInterval(function() {
                    if (typeof jQuery != 'undefined') {
                        clearInterval(checkJquery);
                        trigger();
                    }
                }, delayInterval);
            },
            onLoadElement: function(selector, trigger, delayInterval, delayTimeout) {
                let checkElement = setInterval(function() {
                    if (document && document.querySelectorAll(selector) && document.querySelectorAll(selector).length > 0) {
                        clearInterval(checkElement);
                        trigger();
                    }
                }, delayInterval);
                setTimeout(function() {
                    clearInterval(checkElement);
                }, delayTimeout);
            },
            pushDataLayer: function(eventName, eventCategory, eventAction, eventLabel) {
                dataLayer = dataLayer || [];
                dataLayer.push({
                    'event': eventName,
                    'eventCategory': eventCategory,
                    'eventAction': eventAction,
                    'eventLabel': eventLabel
                });
            },
            setCookie: function(cookieName, cookieValue, durationDays) {
                let cookieExp = new Date();
                cookieExp.setDate(cookieExp.getDate() + durationDays);
                document.cookie = cookieName + "=" + cookieValue + ";expires=" + cookieExp + ";path=/";
            },
            trackGAEvent: function(eventCategory, eventAction, eventLabel) {
                if ('ga' in window) {
                    ga.getAll()[0].send('event', {
                        eventCategory: eventCategory,
                        eventAction: eventAction,
                        eventLabel: eventLabel,
                    });
                }
            },
            wrapElement: function(element, wrapper) {
                let element = document.querySelector(element);
                let wrapper = document.createElement(wrapper);
                element.parentNode.insertBefore(wrapper, element);
                wrapper.appendChild(element);
            },
            waitForMKtoForm: function(trigger) {
                let checkForm = setInterval(function() {
                    if (window.MktoForms2) {
                        clearInterval(checkForm);
                        trigger();
                    }
                }, 50);
                setTimeout(function() {
                    clearInterval(checkForm);
                }, 10000);
            },
            waitForElement: function(selector) {
                return new Promise(function(resolve) {
                    if (document.querySelector(selector)) {
                        return resolve(document.querySelector(selector));
                    } else {
                        window.DOMContentLoaded = function() {
                            return reject(document.querySelector(selector), "Target element not found.");
                        }
                    }
                    const observer = new MutationObserver(function(mutations) {
                        if (document.querySelector(selector)) {
                            resolve(document.querySelector(selector));
                            observer.disconnect();
                        }
                    });
                    observer.observe(document.body, {
                        childList: true,
                        subtree: true
                    });
                });
            }
        };
    } catch (e) {
        if (testInfo.debug) console.log(e, "Error in Test" + testInfo.testName);
    }
  })();