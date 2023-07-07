(function() {
    const debug = 0;
    const variationName = "BOX-270";
    try {
        const CHECK_INTERVAL = 50;
        const TIMEOUT_DURATION = 15000;

        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            let interval = setInterval(function() {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }

        function setTracking() {
            window.s_c_il.forEach(function(value, i) {
                if (value._c == 's_c') {
                    window.s = value;
                }
            });
            if (s.linkTrackVars) {
                s.linkTrackVars = "eVar86";
                s.eVar84 = "Box: clicks on get ebook";
                s.events = "event150";
                s.linkTrackEvents = "event150";
                s && s.tl && s.tl(true, "o", "Box: clicks on get ebook");
            }
        }

        function changeContent(selector, content, link) {
            let el = document.querySelector(selector);
            if (el) {
                el.innerHTML = content;
                el.setAttribute('href', link);
            }
        }

        function live(selector, event, callback, context) {
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            this &&
                this.Element &&
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function(selector) {
                            let node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);

            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    let found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        function setCookie(cname, cvalue, exdays) {
            let d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            let oldVal = getCookie(cname);
            if(!oldVal.includes(cvalue)){
            	document.cookie = cname + "=" + cvalue + "|" + oldVal + ";secure;" + expires + ";domain=box.com;path=/";
            }
        }

        function getCookie(cname) {
            let cookie = {};
            document.cookie.split(';').forEach(function(el) {
                let [key, value] = el.split('=');
                cookie[key.trim()] = value;
            })
            return cookie[cname];
        }

        /* Variation Init */
        function init() {
            const currentLoc = window.location.href;
            /*V2*/
            document.body.classList.add('box-270');
            if (currentLoc.includes('/esignature')) {
                changeContent('.hero .buttons-wrapper .button-secondary', 'Get ebook', '/thankyou/idc-marketscape-esignature');
                live(".hero .buttons-wrapper .button-secondary", "click", function() {
                    setCookie('opt_campaign', 'BOX-270-v1a', 7);
                    setTracking();
                });
            }
            if (currentLoc.includes('/security-compliance')) {
                changeContent('.hero .buttons-wrapper .button-primary', 'Get ebook', '/thankyou/sdp-idc-spotlight-datasecurity');
                live(".hero .buttons-wrapper .button-primary", "click", function() {
                    setCookie('opt_campaign', 'BOX-270-v1a', 7);
                    setTracking();
                });
            }
        }
        waitForElement(".hero .buttons-wrapper", init, CHECK_INTERVAL, TIMEOUT_DURATION);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variationName);
    }
})();