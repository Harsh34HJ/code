(function () {
    try {
      var debug = 0;
      var variation_name = "";
      function waitForElement(selector, trigger, delayInterval, delayTimeout) {
        var interval = setInterval(function () {
          if (
            document &&
            document.querySelector(selector) &&
            document.querySelectorAll(selector).length > 0
          ) {
            clearInterval(interval);
            trigger();
          }
        }, delayInterval);
        setTimeout(function () {
          clearInterval(interval);
        }, delayTimeout);
      }
      function live(selector, event, callback, context) {
        // helper for enabling IE 8 event bindings
        function addEvent(el, type, handler) {
          if (el.attachEvent) el.attachEvent('on' + type, handler);
          else el.addEventListener(type, handler);
        }
        // matches polyfill
        this.Element && function (ElementPrototype) {
          ElementPrototype.matches = ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        }(Element.prototype);
        // live binding helper using matchesSelector
        function live(selector, event, callback, context) {
          addEvent(context || document, event, function (e) {
            var found, el = e.target || e.srcElement;
            while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
            if (found) callback.call(el, e);
          });
        }
        live(selector, event, callback, context);
      }
      var fePopup =''+ 
      '  <div class="fe-popup-66">'+ 
      '      <div class="fe-overlay"></div>'+ 
      '      <div class="fe-content">'+ 
      '           <span class="fe-close">&times;</span>'+
      '           <h2 class="fe-content-heading">We\'re looking forward to speaking with you!</h2>'+
      '          <img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_110,q_auto,dpr_1.0,fl_lossy/v1656524320/rachel-headshot.webp" alt="Rachel">'+ 
      '          <a href="tel:+14159662533" class="fe-call">Call +1 415 966 2533</a>'+ 
      '      </div>'+ 
      '  </div>';
          
      function init() {
        
        document.querySelector('body').classList.add('sp-66');
        if(!document.querySelector('.fe-popup-66')){
          document.querySelector('body').insertAdjacentHTML('beforeend', fePopup);        
        }
         setTimeout(function(){
          
          document.querySelector('#prereq .ctasWrapper > a[href^="tel"]').setAttribute('href', 'tel:+14159662533')
          document.querySelector('#prereq .ctasWrapper > a[href^="tel"] button').innerHTML = 'Call +1 415 966 2533';
           
         }, 1000);
        
        document.querySelector('.fe-popup-66 .fe-close').addEventListener('click', function(){
          document.querySelector('body').classList.remove('fe-popup66-show');
        });
        document.querySelector('.fe-popup-66 .fe-overlay').addEventListener('click', function(){
          document.querySelector('body').classList.remove('fe-popup66-show');
        })
      }
      function init2(){
        setTimeout(function(){
          if(!document.querySelector('.fe-call-button-desktop')){
            document.querySelector('div[class^="styles__SecondaryNavWrapper"] .ctaWrapper > button').insertAdjacentHTML('beforebegin', '<button class="fe-call-button-desktop">Call Us</button>');
          }
          document.querySelector('.fe-call-button-desktop').addEventListener('click', function(){
            document.querySelector('body').classList.add('fe-popup66-show');
          });
    
          // Mobile Button
          if(!document.querySelector('.fe-call-button-mobile')){
            document.querySelector('div[class^="styles__Hero"] .emailFormWrapper > a').insertAdjacentHTML('afterend', '<a href="tel:+14159662533" class="fe-call-button-mobile">Call Us</a>');
            //var fePhoneNumber = document.querySelector('#prereq .ctasWrapper > a[href^="tel"]').getAttribute('href')
            //document.querySelector('.fe-call-button-mobile').setAttribute('href', fePhoneNumber)
          }
        },2000)                  
        
        live('.linksWrapper a[href="/courses/cyber-security-career-track"]', 'mousedown', function () {
          setTimeout(function(){
            if(!document.querySelector('.fe-call-button-desktop')){
              document.querySelector('div[class^="styles__SecondaryNavWrapper"] .ctaWrapper .request-syllabus-form').insertAdjacentHTML('beforebegin', '<button class="fe-call-button-desktop">Call Us</button>');
            }
            document.querySelector('.fe-call-button-desktop').addEventListener('click', function(){
              document.querySelector('body').classList.add('fe-popup66-show');
            });
            // Mobile Button
            if(!document.querySelector('.fe-call-button-mobile')){
              document.querySelector('div[class^="styles__Hero"] .emailFormWrapper > a').insertAdjacentHTML('afterend', '<a href="tel:+14159662533" class="fe-call-button-mobile">Call Us</a>');
    
              //var fePhoneNumber = document.querySelector('#prereq .ctasWrapper > a[href^="tel"]').getAttribute('href')
    
              //document.querySelector('.fe-call-button-mobile').setAttribute('href', fePhoneNumber)
            }
          setTimeout(function(){
          
          document.querySelector('#prereq .ctasWrapper > a[href^="tel"]').setAttribute('href', 'tel:+14159662533')
          document.querySelector('#prereq .ctasWrapper > a[href^="tel"] button').innerHTML = 'Call +1 415 966 2533';
           
         }, 1000);
          },1000)
        });
      }
      window._vis_opt_queue = window._vis_opt_queue || [];
      
      function goal() {
             
        document.querySelector('.start-application-form .submitButton').addEventListener('click',function(){
          email = document.querySelector('.applicationFormWrapper .formGroupEmail input').value;
            // validate the email
            var validate = /^([A-Za-z0-9_\+\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (email.match(validate)) {
              window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(267);});
            }
        })
        document.querySelector('.start-application-form .submitButton').addEventListener('keydown',function(e){
          if (e.key === "Enter"){
            email = document.querySelector('.applicationFormWrapper .formGroupEmail input').value;
            // validate the email
            var validate = /^([A-Za-z0-9_\+\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (email.match(validate)) {
              window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(267);});
            }
          }
        })
      }
      /* Initialise variation */
      waitForElement('.start-application-form .submitButton', goal, 100, 35000);
      
      /* Initialise variation */
      waitForElement('#prereq .ctasWrapper > a[href^="tel"]', init, 100, 35000);
      waitForElement('div[class^="styles__SecondaryNavWrapper"] .ctaWrapper > button', init2, 100, 35000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();
  