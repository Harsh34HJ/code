(function() {
    try {
        var debug = 0;
        var variation_name = "";
        var $;

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

        function waitForjQuery(trigger, delayInterval, delayTimeout) {
            if (!delayInterval) {
                delayInterval = 30;
            }
            if (!delayTimeout) {
                delayTimeout = 15000;
            }
            var interval = setInterval(function() {
                if (window.jQuery !== undefined) {
                    clearInterval(interval);
                    trigger(window.jQuery);
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }

        function onLoadMktoForms2(trigger, delayInterval, delayTimeout) {
            var intervalForMktoForms2 = setInterval(
                function() {
                    if (typeof window.MktoForms2 != 'undefined') {
                        clearInterval(intervalForMktoForms2);
                        trigger();
                    }
                }, delayInterval);
            setTimeout(function() {
                clearInterval(intervalForMktoForms2);
            }, delayTimeout);
        }

        function live(selector, event, callback, context) {
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent('on' + type, handler);
                else el.addEventListener(type, handler);
            }
            this.Element && function(ElementPrototype) {
                ElementPrototype.matches = ElementPrototype.matches ||
                    ElementPrototype.matchesSelector ||
                    ElementPrototype.webkitMatchesSelector ||
                    ElementPrototype.msMatchesSelector ||
                    function(selector) {
                        var node = this,
                            nodes = (node.parentNode || node.document).querySelectorAll(selector),
                            i = -1;
                        while (nodes[++i] && nodes[i] != node);
                        return !!nodes[i];
                    };
            }(Element.prototype);

            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found, el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        function parentClass() {
            document.querySelectorAll('.mktoForm input').forEach((element, index) => {
                var name = element.getAttribute('name');
                if (element.closest('.mktoFormRow')) {
                    element.closest('.mktoFormRow').classList.add(name);
                }
            });
        }

        function neverbounce() {
            _NBSettings = {
                apiKey: 'public_ae4f79b9aa58df9ed79ba99b1150e8a8'
            }
        }

        function neverbounceDOM() {
            document.addEventListener("DOMContentLoaded", function(event) {
                var emailFieldId = 'Email';
                var emailFieldTarget = document.getElementById(emailFieldId);
                emailFieldTarget.setAttribute('data-nb', '');
            });
        }

        function neverbounceValidate() {
        	// live('body', 'nb:registered', function(event) {
            document.querySelector('body').addEventListener('nb:registered', function(event) {
                document.getElementsByClassName('mktoButton').disabled = true;
                // Get field using id from registered event
                let field = document.querySelector('[data-nb-id="' + event.detail.id + '"]');
                // Handle results (API call has succeeded)
                field.addEventListener('nb:result', function(e) {
                    if (e.detail.result.is(_nb.settings.getAcceptedStatusCodes())) {
                        // Do stuff for good email
                        document.getElementsByClassName('mktoButton').disabled = false;
                    } else {
                        // Do stuff for bad email
                        document.getElementsByClassName('mktoButton').disabled = true;
                        if(document.querySelector('.nb-feedback')){
                        	if(document.querySelector('.nb-feedback .nb-result').innerText.trim() == 'Invalid email'){
                        		document.querySelector('.nb-feedback .nb-result').innerText = 'Must be valid work email. example@yourdomain.com';
                        	}
                        }
                    }
                });
            });
        }

        /* Variation Init */
        function init() {
            document.body.classList.add('dice-90_1');
            /*if (window.location.href.includes('techhub.dice.com')) {
                document.body.classList.add('techhub-dice-90_1');
                // parentClass();
            }
            if (window.location.href.includes('www.dice.com')) {
                document.body.classList.add('dice-90_1');
                // parentClass();
            }
            if (window.location.pathname == '/2019-homepagebannertest.html') {
                document.body.classList.add('HBT-2019');
            }*/

            var jsElm = document.createElement("script");
            // set the type attribute
            jsElm.type = "text/javascript";
            // make the script element load file
            jsElm.src = "https://cdn.neverbounce.com/widget/dist/NeverBounce.js"
            // finally insert the element to the body element in order to load the script
            document.body.appendChild(jsElm);

            /* start your code here */
            neverbounceDOM();
            neverbounce();
            parentClass();
            neverbounceValidate();
            waitForjQuery(function(jQuery) {
                $ = window.jQuery;
                onLoadMktoForms2(function() {
                    MktoForms2.whenReady(function(form) {
                        parentClass();
                        live('.mktoForm #Email', 'keypress', function(e) {
                            if (e.key === "Enter") {
                                e.preventDefault();
                            }
                        });
                        live('.mktoForm #Email', 'keyup', function(e) {
                            var inter = setInterval(function() {
                                if (document.querySelectorAll('html body .mktoForm .Email div[id^="nb-field"]').length == 1) {
                                    if (document.querySelector('html body .mktoForm .Email div[id^="nb-field"]').classList.contains('nb-success')) {
                                        document.querySelector('.mktoForm .Email').classList.add('nb-success');
                                        document.querySelector('.mktoForm .Email').classList.remove('nb-error');
                                        clearInterval(inter);
                                    }
                                    if (document.querySelector('html body .mktoForm .Email div[id^="nb-field-"]').classList.contains('nb-error')) {
                                        document.querySelector('.mktoForm .Email').classList.add('nb-error');
                                        document.querySelector('.mktoForm .Email').classList.remove('nb-success');
                                        clearInterval(inter);
                                    }
                                }
                            }, 50);
                        });
                        live('.mktoButtonWrap > #tempStep1Btn', 'click', function(e) {
                            if (document.querySelector('.multi-step-step1.multi-step-show')) {
                            	if (document.querySelector('.mktoForm #FirstName').value == "" && document.querySelector('.mktoForm #LastName').value == "" && document.querySelector('.mktoForm #Email').value == "" ){
                            		document.querySelector('.mktoButtonWrap > button').click();
                            	}
                            }
                        });
                    });
                }, 500, 15000);
            });
        }
        /* Initialize variation */
        waitForElement(".mktoForm", init, 500, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();