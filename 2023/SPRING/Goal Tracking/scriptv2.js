(function() {
    try {
        /*-----------------------
  section data 
  -----------------------*/
        var FeHelper = this;
        //wait for element to load
        FeHelper.doWhenElementLoaded = function(
            selector,
            trigger,
            delayInterval,
            delayTimeout
        ) {
            if (
                document &&
                document.querySelectorAll(selector) &&
                document.querySelectorAll(selector).length > 0
            ) {
                trigger();
            } else {
                var interval = setInterval(function() {
                    if (
                        document &&
                        document.querySelectorAll(selector) &&
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
        };
        // pure live click
        FeHelper._on = function(event, selector, callback, context) {
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
        };
        /*-----------------------
        init is the main controller
        --------------------*/
        FeHelper.validateEmail = function(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(email.toLowerCase())) {
                return true;
            }
            return false;
        }
        /* HP FUNC */
        FeHelper.formValidation = function() {
            var form = document.querySelector('.h-b-application-form > form');
            if (form.classList.contains('ng-valid')) {
                return true;
            }
            return false;
        }
        /* INIT HP FUNC */
        FeHelper.init = function() {
            var pagePath = window.location.pathname;
            window.VWO = window.VWO || [];
            window._vis_opt_queue = window._vis_opt_queue || []; //, .start-application-button
            FeHelper._on('click', '.fe-button, .h-b-application-form > form button', function(e) {
                if (FeHelper.formValidation()) {
                    window.VWO.push(['track.goalConversion', 4]);
                    window._vis_opt_queue.push(function() {
                        _vis_opt_goal_conversion(210);
                    });
                }
            });
            /*FeHelper._on('focusin', '.h-b-application-form > form input[type="email"], .applicationFormWrapper .formGroupEmail input[type="text"], .fe-msf .fe_form-input, .fe_msf-form .fe_form-input, input.fe_form-input, .primary-input.email, .fe_form input', function() {
                if (this.value) {
                    if (!FeHelper.validateEmail(this.value)) {
                        window.VWO.push(['track.goalConversion', 5]);
                        window._vis_opt_queue.push(function() {
                            _vis_opt_goal_conversion(209);
                        });
                    }
                }
            });
            FeHelper._on('focusout', '.h-b-application-form > form input[type="email"], .applicationFormWrapper .formGroupEmail input[type="text"], .fe-msf .fe_form-input, .fe_msf-form .fe_form-input, input.fe_form-input, .primary-input.email, .fe_form input', function() {
                if (this.value) {
                    if (!FeHelper.validateEmail(this.value)) {
                        window.VWO.push(['track.goalConversion', 5]);
                        window._vis_opt_queue.push(function() {
                            _vis_opt_goal_conversion(209);
                        });
                    }
                }
            });*/
            /*New UI Goal: Email Enter*/
            FeHelper._on('focusin', '[class^="styles__HeroBannerWRWrapper-sc"] [class^="styles__MainWrapper-sc"] input[type="email"], #apply-now [class^="styles__InputWithButtonWrapper-sc"] input[type="email"]', function() {
                if (this.value) {
                    if (!FeHelper.validateEmail(this.value)) {
                        window.VWO.push(['track.goalConversion', 5]);
                        window._vis_opt_queue.push(function() {
                            _vis_opt_goal_conversion(209);
                        });
                    }
                }
            });
            /*New UI Goal: Email Enter*/
            FeHelper._on('focusout', '[class^="styles__HeroBannerWRWrapper-sc"] [class^="styles__MainWrapper-sc"] input[type="email"], #apply-now [class^="styles__InputWithButtonWrapper-sc"] input[type="email"]', function() {
                if (this.value) {
                    if (!FeHelper.validateEmail(this.value)) {
                        window.VWO.push(['track.goalConversion', 5]);
                        window._vis_opt_queue.push(function() {
                            _vis_opt_goal_conversion(209);
                        });
                    }
                }
            });
            /*Begin Application*/
            /*FeHelper._on('click', '.applicationFormWrapper .formGroup button, .fe_msf-submit, .start-application-button, button.fe_msf-submit.primary-button', function(e) {
                if (document.querySelector('.applicationFormWrapper .formGroupEmail input[type="text"], .fe_form input, input.fe_form-input, .input-form .primary-input.email')) {
                    var input = document.querySelector('.applicationFormWrapper .formGroupEmail input[type="text"], .fe_form input, input.fe_form-input, .input-form .primary-input.email').value;
                    if (!FeHelper.validateEmail(input)) {
                        window.VWO.push(['track.goalConversion', 4]);
                        window._vis_opt_queue.push(function() {
                            _vis_opt_goal_conversion(210);
                        });
                    }
                }
            });*/
            /*New UI Hero Form Goal: Start Application*/
            FeHelper._on('click', '[class^="styles__HeroBannerWRWrapper-sc"] [class^="styles__MainWrapper-sc"] + button', function() {
                var email = document.querySelector('[class^="styles__HeroBannerWRWrapper-sc"] [class^="styles__MainWrapper-sc"] input[type="email"]').value;
                if (!FeHelper.validateEmail(email)) {
                    var goalNumber;
                    if (pagePath == '/') {
                        //Home
                        goalNumber = 315;
                    } else {
                        //default
                        goalNumber = 210;
                    }
                    window.VWO.push(['track.goalConversion', 4]);
                    window._vis_opt_queue.push(function() {
                        _vis_opt_goal_conversion(goalNumber);
                    });
                }
            });
            /*New UI Bottom Form Goal: Begin Application*/
            FeHelper._on('click', '#apply-now [class^="styles__InputWithButtonWrapper-sc"] button', function() {
                var email = document.querySelector('#apply-now [class^="styles__InputWithButtonWrapper-sc"] input[type="email"]').value;
                if (!FeHelper.validateEmail(email)) {
                    var goalNumber;
                    if (pagePath == '/') {
                        //Home
                        goalNumber = 210;
                    } else if (pagePath == '/courses/tech-sales-career-track/') {
                        //TSC
                        goalNumber = 248;
                    } else if (pagePath == '/courses/data-science-career-track/') {
                        //DSC
                        goalNumber = 295;
                    } else if (pagePath == '/courses/data-analytics-career-track/') {
                        //DAC
                        goalNumber = 305;
                    } else if (pagePath == '/courses/cyber-security-career-track/') {
                        //CSC
                        goalNumber = 246;
                    } else if (pagePath == '/courses/software-engineering-career-track/') {
                        //SEC
                        goalNumber = 245;
                    } else if (pagePath == '/courses/ui-ux-design-career-track/') {
                        //IXC
                        goalNumber = 249;
                    } else if (pagePath == '/courses/ux-career-track/') {
                        //UXC
                        goalNumber = 300;
                    } else {
                        //default
                        goalNumber = 210;
                    }
                    window.VWO.push(['track.goalConversion', 4]);
                    window._vis_opt_queue.push(function() {
                        _vis_opt_goal_conversion(goalNumber);
                    });
                }
            });
            /*new*/
            FeHelper._on('click', '.hero-banner-container .option-content', function() {
                FeHelper.doWhenElementLoaded('.input-form button', function() {
                    FeHelper._on('click', '.input-form button', function(e) {
                        if (document.querySelector('.input-form input')) {
                            var input = document.querySelector('.input-form input').value;
                            if (!FeHelper.validateEmail(input)) {
                                window.VWO.push(['track.goalConversion', 4]);
                                window._vis_opt_queue.push(function() {
                                    _vis_opt_goal_conversion(210);
                                });
                            }
                        }
                    }, 10, 200);
                }, 50, 15000);
            }, 10, 200);
            /**/
            FeHelper._on('click', '.request-syllabus-form form .buttonWrapper  button, .request-syllabus-contact-form .buttonWrapper button', function(e) {
                FeHelper.doWhenElementLoaded('.request-syllabus-form .imageWrapper, .request-syllabus-contact-form .imageWrapper', function() {
                    window._vis_opt_queue = window._vis_opt_queue || [];
                    window._vis_opt_queue.push(function() {
                        _vis_opt_goal_conversion(228);
                    });
                }, 50, 15000);
            });
            //Spring newsLater custom goal triggered 
            if (window.location.href.indexOf('https://www.springboard.com/blog/') != -1) {
                var send = XMLHttpRequest.prototype.send
                XMLHttpRequest.prototype.send = function() {
                    this.addEventListener('load', function() {
                        if (this.responseURL.indexOf('https://www.springboard.com/blog-subscribe/') != -1) {
                            var data = JSON.parse(this.responseText);
                            if (data.result == 'success') {
                                window._vis_opt_queue = window._vis_opt_queue || [];
                                window._vis_opt_queue.push(function() {
                                    _vis_opt_goal_conversion(229);
                                });
                            }
  
                        }
                    })
                    return send.apply(this, arguments)
                }
            }
        }
        FeHelper.doWhenElementLoaded('body', FeHelper.init, 50, 15000);
    } catch (err) {
        // console && console.log(err);
    }
  })();