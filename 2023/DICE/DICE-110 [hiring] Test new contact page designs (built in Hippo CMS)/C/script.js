(function() {
    const debug = 0;
    const variationName = "dice-110-v0";
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
        
        function trackGAEvents(eventCategory, eventAction, eventLabel) {
            if ('ga' in window) {
                ga.getAll()[0].send('event', {
                    eventCategory: eventCategory,
                    eventAction: eventAction,
                    eventLabel: eventLabel,
                });
            }
        }

        function onLoadMktoForms2(trigger, delayInterval, delayTimeout) {
            let intervalForMktoForms2 = setInterval(function() {
                if (typeof window.dhi != "undefined" && typeof window.MktoForms2 != "undefined") {
                    clearInterval(intervalForMktoForms2);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(intervalForMktoForms2);
            }, delayTimeout);
        }

        function init() {
            document.body.classList.add('dice-110-v0');
            onLoadMktoForms2(function() {
                MktoForms2.whenReady(function(form) {
                    helper.live('.mktoForm #FirstName, .mktoForm #LastName, .mktoForm #Email','click', function(){
				        trackGAEvents('funnelenvy','click','form_engagement');
				    });
				    
				    helper.live('.mktoForm #tempStep1Btn, .mktoForm #FE-Form-Validator__tempStep1Btn','click', function(){
				        let count = 0;
				    	document.querySelectorAll('.mktoFormRow.multi-step-step1').forEach(function(el){
				    		if(el.querySelector('.mktoRequiredField .mktoError')){
				    			count++;
				    		}
				    	});
				    	if(count === 0){
				        	trackGAEvents('funnelenvy','click','step_1_completion');
				    	}
				    });
				    
				    form.onSuccess(function() {
				        trackGAEvents('funnelenvy','click','step_2_completion');
				    });
                });
            });
        }

        /* Initialize variation */
        let selectorEle;
        const currentPath = window.location.pathname;
        currentPath == '/hiring/contact-us/thank-you' ? selectorEle = "body" : selectorEle = ".mktoForm";
    	helper.waitForElement(selectorEle, init, CHECK_INTERVAL, TIMEOUT_DURATION);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variationName);
    }
})();