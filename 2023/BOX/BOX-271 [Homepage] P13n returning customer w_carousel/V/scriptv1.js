(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "BOX-271";
        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }
        // wait for the slick
        function waitForGlide(trigger) {
            var interval = setInterval(function() {
                if (window.Glide) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function() {
                clearInterval(interval);
            }, 15000);
        }

        function changeContent(selector, content) {
            var el = document.querySelector(selector);
            if (el) {
                el.innerHTML = content;
            }
        }

        function removeClass(el, className) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.remove(className);
            }
        }

        function live(selector, event, callback, context) {
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this &&
                this.Element &&
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
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
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        /* Variation functions */
        var awsURL = 'https://fe-test-dev.s3.amazonaws.com/box/Box-271/';
        var arrowSvg =
            "" +
            '  <svg width="24px" height="43px" viewBox="0 0 24 43" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">' +
            '    <path d="M19.9782 0L0 21.5297L20 43.0796" transform="matrix(-1 0 0 1 22 2)" id="Stroke-3" fill="none" fill-rule="evenodd" stroke="#131313" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />' +
            "  </svg>";

        var fe_btn =
            "" +
            '     <a about="/node/76161" class="button-primary" href="https://account.box.com/login" target="_self">Log in</a>' +
            '     <a about="/node/76166" class="button-primary--light" href="/resources/downloads" target="_self">Download apps</a>';

        var slides =
            '              <li class="glide__slide fe_slider_content one lazyloaded">' +
            '                 <div class="fe_slider_content_wrapper">' +
            '                   <div class="fe_left">' +
            '                         <div class="fe_slider_tag"><span>NEW</span></div>' +
            '                         <div class="fe_slider_title">' +
            "                             <h3>Box Sign</h3>" +
            "                         </div>" +
            '                         <div class="fe_slider_subtitle">' +
            "                             <p>Stop overpaying for e-signatures. Empower your teams with natively integrated Box Sign, included in Business plans and above.</p>" +
            "                         </div>" +
            '                         <div class="fe_slider_btn">' +
            '                             <a href="https://www.box.com/esignature">Learn more</a>' +
            "                         </div>" +
            "                   </div>" +
            '                   <div class="fe_right">' +
            '                          <img src="'+awsURL+'blade-box-sign1-v1.png">' +
            "                   </div>" +
            "                 </div>" +
            "              </li>" +
            '              <li class="glide__slide fe_slider_content two lazyloaded">' +
            '                 <div class="fe_slider_content_wrapper">' +
            '                   <div class="fe_left">' +
            '                         <div class="fe_slider_tag"><span>BETA</span></div>' +
            '                         <div class="fe_slider_title">' +
            "                             <h3>Box Canvas</h3>" +
            "                         </div>" +
            '                         <div class="fe_slider_subtitle">' +
            "                             <p>Unleash your creativity and turn ideas into action with our new visual collaboration capabilities.</p>" +
            "                         </div>" +
            '                         <div class="fe_slider_btn">' +
            '                             <a href="https://www.box.com/canvas">See it in action</a>' +
            "                         </div>" +
            "                   </div>" +
            '                   <div class="fe_right">' +
            '                          <img src="'+awsURL+'blade-box-canvas2-v1.png">' +
            "                   </div>" +
            "                 </div>" +
            "              </li>";

        var fe_slider =
            "" +
            '<div class="fe_slider_section">' +
            '  <div class="glide fe_slider_wrapper">' +
            '      <div class="glide__track" data-glide-el="track">' +
            '          <ul class="glide__slides ">' +
            slides +
            slides +
            "          </ul>" +
            "      </div>" +
            '      <div class="glide__arrows" data-glide-el="controls">' +
            '          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">' +
            arrowSvg +
            "</button>" +
            '          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">' +
            arrowSvg +
            "</button>" +
            "      </div>" +
            '      <div class="glide__bullets" data-glide-el="controls[nav]">' +
            '          <button class="glide__bullet" data-glide-dir="=0"></button>' +
            '          <button class="glide__bullet" data-glide-dir="=1"></button>' +
            "      </div>" +
            "  </div>" +
            "</div>";

        /* Variation Init */
        function init() {
            // change the headline and sub headline
            changeContent(".hero--messaging h1", "Welcome back to <br class='desk-only'/>the Content Cloud");
            changeContent(".hero--messaging h3", "Start collaborating now");

            // added hero CTA
            changeContent(".hero .buttons-wrapper", fe_btn);

            // inser slider
            var inserSlider = document.querySelector(".hero--half-n-half__vertical-bottom");
            inserSlider && inserSlider.insertAdjacentHTML("afterend", fe_slider);
            
            //change cta text
            document.querySelectorAll('.button-link.modal-video > span:not(.svg-icon)').forEach(function(ele){
            	ele.innerHTML = "Watch webinar";
            });
			
            // add hero img/video
            var bannersnack_embed = {"hash":"bdps70009","width":881,"height":600,"t":1673555892,"userId":40644008,"responsive":true,"type":"html5"} || {},
		    protocol = "file:" == window.location.protocol ? "http:" : "";
		    var a = "html5" === bannersnack_embed.type,
		        b = "banners/" + bannersnack_embed.hash + "/" + (void 0 !== bannersnack_embed.networkId ? "adtag/embed/" + bannersnack_embed.networkId : "embed") + "/index.html",
		        b = "dev" === bannersnack_embed.env ? a ? "//d3bed7ljup8c9t.cloudfront.net/" + b : protocol + "//d3bed7ljup8c9t.cloudfront.net/iframe/embed.html" : "local" == bannersnack_embed.env ? a ? "//d3bed7ljup8c9t.cloudfront.net/" + b : protocol + "//d3bed7ljup8c9t.cloudfront.net/iframe/embed.html" : a ? "//cdn.bannersnack.com/" + b : protocol + "//cdn.bannersnack.com/iframe/embed.html",
		        c, d = !1,
		        e, a = a ? ["t", "clickTag", "userId", "responsive", "networkId"] : "hash bgcolor wmode clickTag t useOnSW userId env".split(" ");
		    for (e = 0; c = a[e]; e++) bannersnack_embed[c] && (d ? b += "&" : (b += "?", d = !0), b += c + "=" + encodeURIComponent(bannersnack_embed[c]));
		    a = bannersnack_embed.width;
		    c = bannersnack_embed.height;
		    var f = "bsIframe" + bannersnack_embed.hash + Math.random().toString().substring(2),
		        d = "";
		    if (bannersnack_embed.responsive) {
		        var g = null,
		            h = c / a,
		            a = window.navigator.userAgent.toLowerCase();
		        /iphone|ipod|ipad/.test(a) && (d =
		            "width: 1px; min-width: 100%; max-width: 100%");
		        setInterval(function() {
		            var a = document.getElementById(f);
		            a && a.offsetWidth !== g && (a.style.height = Math.round(a.offsetWidth * h) + "px", g = a.offsetWidth)
		        }, 50);
		        c = a = "100%"
		    }

            changeContent(
                ".hero--half-n-half .hero--image",
                '<iframe id="' + f + '" style="' + d + '" src="' + b + '" width="' + a + '" height="' + c + '" frameborder="0" allow="autoplay" allowtransparency="true" scrolling="no"allowfullscreen></iframe>');
            //<video autoplay muted loop playsinline id="backgroundVideo" poster="'+awsURL+'1-hero-static-welcome+back+to+the+content+cloud+881x600(2x).png"><source src="'+awsURL+'1-hero-static-welcome+back+to+the+content+cloud+video.mp4" type="video/mp4"/></video>

            // moved the logo section
            var logoSection = document.querySelector(".logo-stripe"),
                ctaModule = document.querySelector(".logo-stripe + .cta-module"),
                glideSlide = document.querySelector(".slideshow.glide");
            if (glideSlide) {
                glideSlide.insertAdjacentElement("afterend", ctaModule);
                glideSlide.insertAdjacentElement("afterend", logoSection);
            }

            waitForGlide(function() {
                var glide = new Glide(".glide.fe_slider_wrapper", {
                    type: "carousel",
                    focusAt: "center",
                    animationDuration: 1000,
                    startAt: 0,
                    perView: 1,
                });
                glide.mount();
                glide.on("run", function() {
                    var index = glide.index % 2;
                    setTimeout(function() {
                        removeClass(".fe_slider_section .glide__bullet.glide__bullet--active", "glide__bullet--active");
                        var bullet = document.querySelector('.fe_slider_section .glide__bullet[data-glide-dir*="' + index + '"]');
                        if (bullet) {
                            bullet.classList.add("glide__bullet--active");
                        }
                    }, 200);
                });
            });
        }

        /* Initialize variation */
        var isDesktop = window.matchMedia("(min-width: 1024px)").matches;
	    if (isDesktop) {
	    	document.body.classList.add('box-271');
        	waitForElement(".slideshow.glide", init, 50, 15000);
	    }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();