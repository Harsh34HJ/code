(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "SPRING-73 CSC V1";
        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }
        function live(event, selector, callback, context) {
            /****Helper Functions****/
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent('on' + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this.Element &&
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function(selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(
                                    selector
                                ),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (
                        el &&
                        el.matches &&
                        el !== context &&
                        !(found = el.matches(selector))
                    )
                        el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }
        /* Variation Init */
        window._vis_opt_queue = window._vis_opt_queue || [];
        function init() {
            live('click', 'button.submitButton', function(e) {
                var email = document.querySelector('.formGroupEmail input').value;
                if (validateEmail(email)) {
                    e.preventDefault();
                    e.stopPropagation();
                    sendData(email);
                    window._vis_opt_queue.push(function() {
                        _vis_opt_goal_conversion(246);
                    });
                }
            });
        }
        function sendData(email) {
            var i = getVwoCampaignId();
            var l = getReferrer();
            var data = {
                workshop_id: 98,
                apply: 1,
                js_disabled: 'yes',
                drip_tag_prefix: '',
                email: email
            };
            var gclid = getParameterByName('gclid');
            var feuuid = generateUUID() || uuidv4() || '';
            var data1 = GetReferrerUtmParams();
            var utmParam = '';
            for (var key of Object.keys(data1)) {
                utmParam += '' + key + '=' + data1[key] + '&';
            }
            var gclid = getParameterByName('gclid');
            //	var redirectURL = submitLink + "?referral=" + l[0] + "&referral2=" + l[1] + "&email=" + data.email + "&segmentanonymousid=" + getSegmentAnonymousId() + (i ? "&variationid=" + i : "");
            var redirectURL = "https://springboardedu.typeform.com/to/Omlku5Pg?referral=" + l[0] + "&referral2=" + l[1] + "&segmentanonymousid=" + getSegmentAnonymousId() + "&variationid=" + i + "&gclid=" + gclid + "&email=" + data.email + "" + "&uuid=" + feuuid + "&" + utmParam;;;
            var XHR = new XMLHttpRequest(),
                FD = new FormData();
            // Push our data into our FormData object
            for (var key of Object.keys(data)) {
                FD.append(key, data[key]);
            }
            FD.append('UUID', feuuid);
            FD.append('UTM', JSON.stringify(data1));
            FD.append('gclid', gclid);
            XHR.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    if (data.result == "success")
                        window.location.href = redirectURL;
                }
            };
            // Set up our request
            XHR.open("POST", 'https://api.springboard.com/learning-paths/interested/');
            // Send our FormData object; HTTP headers are set automatically
            XHR.send(FD);
        }
        function getParameterByName(name, url = window.location.href) {
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }
        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(email).toLowerCase())) {
                return true;
            } else {
                return false;
            }
        }
        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
        function getSegmentAnonymousId() {
            var n = decodeURIComponent(getCookie("ajs_anonymous_id"));
            return n = n.replace(/^"(.*)"$/g, "$1"), encodeURIComponent(n);
        }
        function getReferrer() {
            return [window.location.href, getCookie("referer2")];
        }
        function getVwoCampaignId() {
            var n = window._vwo_campaignData,
                t = n ? Object.keys(n) : [],
                e = "";
            return t.map(function(o, l) {
                e += o + "-" + n[o].c + (l !== t.length - 1 ? "_" : "");
            }), e ;
        }
        //get UTM param 
        const GetReferrerUtmParams = () => {
            const utmParams = new URLSearchParams(window.location.search.substring(1));
            let parsedUtmParams = {};
            utmParams.forEach((value, key) => {
                if (key.toLowerCase().startsWith("utm")) {
                    parsedUtmParams[key] = value;
                }
            });
            return parsedUtmParams;
        }
        //get uuid 
        function uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
        //get uuid 
        function generateUUID() {
            var d = new Date().getTime();
            //Timestamp 
            var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
            //Time in microseconds since page-load or 0 if unsupported 
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
                function(c) {
                    var r = Math.random() * 16; //random number between 0 and 16 
                    if (d > 0) { //Use timestamp until depleted 
                        r = (d + r) % 16 | 0;
                        d = Math.floor(d / 16);
                    } else {
                        //Use microseconds since page-load if supported 
                        r = (d2 + r) % 16 | 0;
                        d2 = Math.floor(d2 / 16);
                    }
                    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
        }
        /* Initialise variation */
        waitForElement(".formGroupEmail input", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
