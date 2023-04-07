(function() {
    var FEHelper = {
        onLoadElement: function(selector, trigger, delayInterval, delayTimeout) {
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
        },
        after: function(targetElement, afterElement) {
            if (targetElement) {
                targetElement.insertAdjacentHTML('afterend', afterElement);
            }
        },
        insertAfter: function(afterElement, targetElement) {
            targetElement.parentNode.insertBefore(
                afterElement,
                targetElement.nextSibling
            );
        },
        append: function(targetElement, appendElement) {
            if (targetElement) {
                targetElement.insertAdjacentHTML('beforeend', appendElement);
            }
        },
        prepend: function(targetElement, prependElement) {
            if (targetElement) {
                targetElement.insertAdjacentHTML('afterbegin', prependElement);
            }
        },
        live: function(selector, event, callback, context) {
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
        },
        trackGAEvent: function($eventCategory, $eventAction, $eventLabel) {
            if ('ga' in window) {
                ga.getAll()[0].send('event', {
                    eventCategory: $eventCategory,
                    eventAction: $eventAction,
                    eventLabel: $eventLabel,
                });
            }
        },
        updateInnerHtml: function(ele, value) {
            if (ele) {
                ele.innerHTML = value;
            }
        },
        getScript: function (source, callback) {
		  var el = document.createElement("script");
		  el.onload = callback;
		  el.src = source;
		  document.body.appendChild(el);
		}
    };
    var newTemplate = '<div class="step-wrapper-0">\
		<div class="info-wrapper">\
			<h1 class="title">Where tech connects</h1>\
			<h4 class="sub-title">Be a part of the Dice community, where more than half of U.S. technology professionals come to land their next job; as an analyst, designer, developer and many more, regardless of your level.\
			</h4>\
			<div class="option-wrapper">\
				<div class="step-option" bm-option="1">\
					<h4 class="title">Tech Professionals</h4>\
					<div class="inner-wrapper"><img src="https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/tech+_professionals.png" alt="Tech Professionals">\
					<p class="detail">I\'m interested in a tech job.</p></div>\
					<a href="javascript:void(0)" class="primary-cta">Create free profile</a>\
				</div>\
				<div class="step-option" bm-option="2">\
					<h4 class="title">Employers & Recruiters</h4>\
					<div class="inner-wrapper"><img src="https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/employers_%26_recruiters.png" alt="Employers & Recruiters">\
					<p class="detail">I\'m looking to hire tech talent.</p></div>\
					<div class="cta-wrapper">\
						<a href="https://www.dice.com/hiring/contact-us" class="secondary-cta">Source Jobs</a>\
						<a href="https://www.dice.com/hiring/contact-us" class="primary-cta">Post a job</a>\
					</div>\
				</div>\
			</div>\
		</div>\
		<div class="slider-wrapper">\
			<div class="splide">\
			    <div class="splide__arrows">\
					<button class="splide__arrow splide__arrow--prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9949 10.9951C15.1824 11.1826 15.2877 11.4369 15.2877 11.7021C15.2877 11.9672 15.1824 12.2215 14.9949 12.4091L10.4019 17.0021C10.2156 17.1846 9.96482 17.2863 9.70399 17.285C9.44317 17.2837 9.19339 17.1795 9.00896 16.995C8.82452 16.8106 8.72032 16.5608 8.71901 16.3C8.71769 16.0392 8.81936 15.7884 9.00192 15.6021L12.9019 11.7021L9.00192 7.80207C8.81936 7.61578 8.71769 7.36497 8.71901 7.10414C8.72032 6.84331 8.82452 6.59354 9.00896 6.4091C9.19339 6.22467 9.44317 6.12047 9.70399 6.11915C9.96482 6.11784 10.2156 6.21951 10.4019 6.40207L14.9949 10.9951Z" fill="#2B2927"/></svg></button>\
					<button class="splide__arrow splide__arrow--next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9949 10.9951C15.1824 11.1826 15.2877 11.4369 15.2877 11.7021C15.2877 11.9672 15.1824 12.2215 14.9949 12.4091L10.4019 17.0021C10.2156 17.1846 9.96482 17.2863 9.70399 17.285C9.44317 17.2837 9.19339 17.1795 9.00896 16.995C8.82452 16.8106 8.72032 16.5608 8.71901 16.3C8.71769 16.0392 8.81936 15.7884 9.00192 15.6021L12.9019 11.7021L9.00192 7.80207C8.81936 7.61578 8.71769 7.36497 8.71901 7.10414C8.72032 6.84331 8.82452 6.59354 9.00896 6.4091C9.19339 6.22467 9.44317 6.12047 9.70399 6.11915C9.96482 6.11784 10.2156 6.21951 10.4019 6.40207L14.9949 10.9951Z" fill="#2B2927"/></svg></button>\
			    </div>\
				<div class="splide__track">\
				<ul class="splide__list">\
					<div class="splide__slide">\
						<img src="https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/jon.png" alt="Jon" class="auth-img">\
						<div class="auth-info-wrapper">\
							<p class="auth-review">"Exceptionally easy. Impressive algorithm for suggesting related jobs."</p>\
							<h4 class="auth-name tp">— Jon A.</h4>\
							<h6 class="auth-role">Software Engineer</h6>\
						</div>\
					</div>\
					<div class="splide__slide">\
						<img src="https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/asgn_inc.png" alt="ASGN Inc" class="auth-img">\
						<div class="auth-info-wrapper">\
							<p class="auth-review">"One of the best databases out there to find IT candidates." </p>\
							<h4 class="auth-name er">— ASGN Inc.</h4>\
							<h6 class="auth-role">IT Consulting Company</h6>\
						</div>\
					</div>\
					<div class="splide__slide">\
						<img src="https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/optum.png" alt="Optum" class="auth-img">\
						<div class="auth-info-wrapper">\
							<p class="auth-review">"By partnering with Dice, we are really closing the gap for our go-to-market strategy of brand awareness and candidate pipelining."</p>\
							<h4 class="auth-name er">— Lindsey Davis, Optum</h4>\
							<h6 class="auth-role">Health Services Innovation Company</h6>\
						</div>\
					</div>\
				</ul>\
				</div> \
			</div>\
		</div>\
	</div>';

    var sideContent = '<div class="content-wrapper">\
	    <ul class="list">\
	      <li>\
	        <img src="https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/startup.png" alt="Startup">\
	        <div class="text"><div class="bold-text">Discover 100k jobs posted weekly</div>Get matched with roles that fit your skills and interests — then Easy Apply in just a few clicks.</div>\
	      </li>\
	      <li>\
	        <img src="https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/email_marketing.png" alt="Email Marketing">\
	        <div class="text"><div class="bold-text">Find your ideal tech culture</div>Get a firsthand look at a company\'s tech culture (and how you fit into it) before you ever apply.</div>\
	      </li>\
	      <li>\
	        <img src="https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/user_profile.png" alt="User Profile">\
	        <div class="text"><div class="bold-text">Get tech career advice</div>Level up with free industry insights and career tools to help you stand out and get hired.</div>\
	      </li>\
	    </ul>\
	    <div class="logo-wrapper">\
	      <p class="title">Thousands of top tech employers hire on Dice, including...</p>\
	      <picture>\
	          <source media="(min-width: 767px)" srcset="https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/client_logo_desk_tab.png">\
	          <source media="(min-width: 310px)" srcset="https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/client_logo_mob.png">\
	          <img src="https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/client_logo_desk_tab.png" alt="Client Logos">\
	      </picture>\
	    </div>\
	  </div>';

    var mainContent = '<div class="info-wrapper"><h2 class="title">Find the right tech job, on your terms</h2><h4 class="sub-title">Access industry-leading tools and resources to build your skills, boost your visibility and land one of the thousands of tech jobs posted on Dice today.</h4></div>';

    var titleForm = '<div class="title-wrapper"><h4 class="title">Tech Professionals</h4><p class="sub-title">Be seen and get hired. </br>Create your free Dice profile today.</p><h4 class="content">Already have an account? <a class="sign-in" href="https://www.dice.com/dashboard/login">Sign in</a></h4></div>';

    var backButton = '<div class="back-wrapper"><a class="back" href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.78033 0.96967C6.07322 1.26256 6.07322 1.73744 5.78033 2.03033L1.81066 6L5.78033 9.96967C6.07322 10.2626 6.07322 10.7374 5.78033 11.0303C5.48744 11.3232 5.01256 11.3232 4.71967 11.0303L0.21967 6.53033C-0.0732233 6.23744 -0.0732233 5.76256 0.21967 5.46967L4.71967 0.96967C5.01256 0.676777 5.48744 0.676777 5.78033 0.96967Z" fill="#195581"/></svg>Back</a></div>';
    
    var contactSales = '<li class="contact-sales"><a href="https://techhub.dice.com/2018-SR-contact-us.html" target="_self" class="btn-link">Contact Sales</a></li>';

    function init() {
        //Add template
        if(!document.querySelector('.step-wrapper-0')){
            initCSS();
            document.body.classList.add('dice-97');
            document.querySelector('.adscore-container').classList.add('hide-elm', 'step-wrapper-1');
        	document.querySelector('.adscore-container').insertAdjacentHTML('beforebegin', newTemplate);
        	FEHelper.getScript("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js",function () {
	        	if(document.querySelector('.splide')) {
			        var splide = new Splide(".splide", {
			            type: 'loop',
			            perPage: 3,
			            perMove: 1,
			            autoplay: true,
			            autoWidth: true,
			            autoheight: true,
			            interval: 5000,
			            gap: '20px',
			            focus: 'center',
			        });
			        splide.mount();
			    }
	        });
        }
        if (document.querySelector('.registrationHeader') && !document.querySelector('.registrationHeader .content-wrapper')) {
            FEHelper.updateInnerHtml(document.querySelector('.registrationHeader'), sideContent);
        }
        if (document.querySelector('.adscore-banner .container .row') && !document.querySelector('.adscore-banner .container .info-wrapper')) {
            FEHelper.prepend(document.querySelector('.adscore-banner .container'), mainContent);
        }
        if (document.querySelector('.navbar-header a[href="/home/home-feed"]')) {
            document.querySelector('.navbar-header a[href="/home/home-feed"]').setAttribute('href','/');
        }
        if (document.querySelector('div#menu-toggle .navbar-right.hidden-xs')  && !document.querySelector('div#menu-toggle .navbar-right.hidden-xs .contact-sales')) {
    		FEHelper.prepend(document.querySelector('div#menu-toggle .navbar-right.hidden-xs'), contactSales);
        }
        if (document.querySelector('div#menu-toggle .navbar-right.visible-xs')  && !document.querySelector('div#menu-toggle .navbar-right.visible-xs .contact-sales')) {
    		FEHelper.prepend(document.querySelector('div#menu-toggle .navbar-right.visible-xs'), contactSales);
        }
        var formTarget = document.querySelector('.registration-section');
        if (formTarget) {
        	if(!document.querySelector('.registration-section .back-wrapper')){
            	FEHelper.append(formTarget, backButton);
        	}
        	if(!document.querySelector('.registration-section .title-wrapper')){
            	FEHelper.prepend(formTarget, titleForm);
        	}
            var index = 1;
            document.querySelectorAll('.registration-section #people .form-group').forEach(function(el) {
                el.classList.add('input-wrap-' + index);
                index++;
                if (el.classList.contains('input-wrap-4')) {
                    el.querySelector('.help-block').classList.add('ng-hide');
                }
                if (el.classList.contains('input-wrap-5') && el.classList.contains('ng-hide')) {
                    el.classList.remove('ng-hide');
                }
            });
            if (document.querySelector('#people #email')) {
                document.querySelector('label[for="email"]').innerHTML = 'Email Address';
                document.querySelector('#people #email').setAttribute('placeholder', 'Email Address');
            }
            if (document.querySelector('#people #password')) {
                document.querySelector('label[for="password"]').innerHTML = 'Password';
                document.querySelector('#people #password').setAttribute('placeholder', 'Password');
            }
            if (document.querySelector('#people #passwordConfirmation')) {
                document.querySelector('label[for="passwordConfirmation"]').innerHTML = 'Re-enter Password';
                document.querySelector('#people #passwordConfirmation').setAttribute('placeholder', 'Re-enter Password');
            }
        }
        if (document.querySelector('.register-button-start') && !document.querySelector('.registration-section .privcay-text')) {
            document.querySelector('.register-button-start').insertAdjacentHTML('afterend', '<p class="privcay-text">By registering, you are agreeing to Dice\'s <a href="/about/privacy-policy" target="_blank">Privacy Policy</a> and <a href="/about/terms-and-conditions" target="_blank">Terms of Use</a> — and to receive emails from Dice with information about your job search.</p>');
        }
        //Step-1
        if (document.querySelector('.step-wrapper-0 .option-wrapper .step-option[bm-option="1"] a.primary-cta')) {
        	FEHelper.live('.step-wrapper-0 .option-wrapper .step-option[bm-option="1"] a.primary-cta', 'click', function() {
                document.querySelector('.step-wrapper-0').classList.add('hide-elm');
                if (document.querySelector('.step-wrapper-1').classList.contains('hide-elm')) {
                    document.querySelector('.step-wrapper-1').classList.remove('hide-elm');
                }
            	window.scrollTo(0, 0);
            });
        }
        //Back
        if (document.querySelector('.step-wrapper-1 .back-wrapper .back')) {
        	FEHelper.live('.step-wrapper-1 .back-wrapper .back', 'click', function() {
                document.querySelector('.step-wrapper-1').classList.add('hide-elm');
                if (document.querySelector('.step-wrapper-0').classList.contains('hide-elm')) {
                    document.querySelector('.step-wrapper-0').classList.remove('hide-elm');
                }
                window.scrollTo(0, 0);
            });
        }
        FEHelper.live('.step-wrapper-0 .option-wrapper .step-option[bm-option="1"] a', 'click', function() {
            FEHelper.trackGAEvent("funnelenvy","click","Create free profile CTA");
        });
        FEHelper.live('.step-wrapper-0 .option-wrapper .step-option[bm-option="2"] a.primary-cta', 'click', function() {
            FEHelper.trackGAEvent("funnelenvy","click","Post a job CTA");
        });
        FEHelper.live('.step-wrapper-0 .option-wrapper .step-option[bm-option="2"] a.secondary-cta', 'click', function() {
            FEHelper.trackGAEvent("funnelenvy","click","Source talent CTA");
        });
        FEHelper.live('.step-wrapper-1 .adscore-banner #people .form-group .form-control', 'click', function() {
            FEHelper.trackGAEvent("funnelenvy","click","Form engagement");
        });
        FEHelper.live('.step-wrapper-1 .adscore-banner .back-wrapper .back', 'click', function() {
            FEHelper.trackGAEvent("funnelenvy","click","Back button");
        });
        document.body.style.opacity = '1';
    }
    //if error occur while DOM manipulation
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 5000);
    //add script on body for cache
    function initCSS() {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    function loadTest() {
        document.body.style.opacity = "0";
        setTimeout(function() {
            init();
        }, 1000);
    }
    FEHelper.onLoadElement('body', loadTest, 50, 10000);
    /*Style*/
    var link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.type = "text/css";
    link2.href = "https://fe-test-dev.s3.amazonaws.com/Dice/DICE-97/code/style-v5.css";
    document.getElementsByTagName("head")[0].appendChild(link2);
})();