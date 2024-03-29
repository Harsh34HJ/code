(function() {
    const debug = 0;
    const variationName = "dice-112-v1";
    try {
        let _$;
        const CHECK_INTERVAL = 50;
        const TIMEOUT_DURATION = 15000;

        !(function(factory) {
            _$ = factory();
        })(function() {
            let bm = function(s) {
                if (typeof s === "string") {
                    this.value = Array.prototype.slice.call(document.querySelectorAll(s));
                }
                if (typeof s === "object") {
                    this.value = [s];
                }
            };
            bm.prototype = {
                live: function(selector, event, callback, context) {
                    function addEvent(el, type, handler) {
                        if (el.attachEvent) el.attachEvent("on" + type, handler);
                        else el.addEventListener(type, handler);
                    }
                    this.Element &&
                        (function(ElementPrototype) {
                            ElementPrototype.matches =
                                ElementPrototype.matches ||
                                ElementPrototype.matchesSelector ||
                                ElementPrototype.webkitMatchesSelector ||
                                ElementPrototype.msMatchesSelector ||
                                function(selector) {
                                    let node = this,
                                        nodes = (
                                            node.parentNode || node.document
                                        ).querySelectorAll(selector),
                                        i = -1;
                                    while (nodes[++i] && nodes[i] != node);
                                    return !!nodes[i];
                                };
                        })(Element.prototype);

                    function live(selector, event, callback, context) {
                        addEvent(context || document, event, function(e) {
                            let found,
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
                },
                waitForElement: function(selector, trigger, delayInterval, delayTimeout) {
                    let interval = setInterval(function() {
                        if (_$(selector).value.length) {
                            clearInterval(interval);
                            trigger();
                        }
                    }, delayInterval);
                    setTimeout(function() {
                        clearInterval(interval);
                    }, delayTimeout);
                },
            };
            return function(selector) {
                return new bm(selector);
            };
        });

        const helper = _$();
        const currentPath = window.location.pathname;
        let currentParams = window.location.search.substring(0);
        let finalParams = '';
        if(currentParams){
        	finalParams = currentParams;
        }

        function trackGAEvents(eventCategory, eventAction, eventLabel) {
            if ('ga' in window) {
                ga.getAll()[0].send('event', {
                    eventCategory: eventCategory,
                    eventAction: eventAction,
                    eventLabel: eventLabel,
                });
            }
        }

        function redirectToNewPage(currentPath,params) {
        	if(currentPath == '/register'){
        		window.open('/why-join-dice'+params, '_self');
        	}
        }

        function init() {
            document.body.classList.add('dice-112-v1');
		    helper.live('dhi-seds-link[url="/career-advice"]','click',function(){
		        trackGAEvents('funnelenvy','click','learn_more');
		    });
		    helper.live('dhi-seds-link[url="mailto:jenny.homan@dhigroupinc.com"]','click',function(){
		        trackGAEvents('funnelenvy','click','get_in_touch');
		    });
        }

        /* Initialize variation */
        redirectToNewPage(currentPath,finalParams);
        if (currentPath == '/why-join-dice') {
            helper.waitForElement('body', init, CHECK_INTERVAL, TIMEOUT_DURATION);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variationName);
    }
})();