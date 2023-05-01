(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "BOX-275";
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

        var slides =
            '              <li class="glide__slide fe_slider_content lazyloaded">' +
            '                 <div class="fe_slider_content_wrapper">' +
            '                   <div class="fe_left">' +
            '                         <div class="fe_slider_tag"><span>COMING SOON</span></div>' +
            '                         <div class="fe_slider_title">' +
            "                             <h3>Box AI</h3>" +
            "                         </div>" +
            '                         <div class="fe_slider_subtitle">' +
            "                             <p>Unlock the value of your content with enterprise-grade security, privacy, and compliance.</p>" +
            "                         </div>" +
            '                         <div class="fe_slider_btn">' +
            '                             <a href="https://www.box.com/ai">Learn more</a>' +
            "                         </div>" +
            "                   </div>" +
            '                   <div class="fe_right">' +
            '                          <img src="'+awsURL+'Box-AI-Carousel-1.png">' +
            "                   </div>" +
            "                 </div>" +
            "              </li>" +
            '              <li class="glide__slide fe_slider_content lazyloaded">' +
            '                 <div class="fe_slider_content_wrapper">' +
            '                   <div class="fe_left">' +
            '                         <div class="fe_slider_tag"><span>NEW</span></div>' +
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
            "              </li>"+
            '              <li class="glide__slide fe_slider_content lazyloaded">' +
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
            '                          <img src="'+awsURL+'blade-box-sign1-v1-n.png">' +
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
            '          <button class="glide__bullet" data-glide-dir="=2"></button>' +
            "      </div>" +
            "  </div>" +
            "</div>";

        /* Variation Init */
        function init() {
            //insert slider
            var inserSlider = document.querySelector(".hero--half-n-half__vertical-bottom");
            inserSlider && inserSlider.insertAdjacentHTML("afterend", fe_slider);
            
            //change cta text
            document.querySelectorAll('.button-link.modal-video > span:not(.svg-icon)').forEach(function(ele){
            	ele.innerHTML = "Watch webinar";
            });

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
                    var index = glide.index;
                    setTimeout(function() {
                        removeClass(".fe_slider_section .glide__bullet.glide__bullet--active", "glide__bullet--active");
                        var bullet = document.querySelector('.fe_slider_section .glide__bullet[data-glide-dir*="' + index + '"]');
                        if (bullet) {
                            bullet.classList.add("glide__bullet--active");
                        }
                    }, 200);
                });
                document.body.classList.add('load');
            });
        }

        /* Initialize variation */
        var isDesktop = window.matchMedia("(min-width: 1024px)").matches;
	    if (isDesktop) {
	    	document.body.classList.add('box-275');
        	waitForElement(".slideshow.glide", init, 50, 15000);
	    }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();