(function() {
    var FEHelper = {
      onLoadElement: function(selector, trigger, delayInterval, delayTimeout) {
        if (
          document &&
          document.querySelectorAll(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          trigger();
        }
        else {
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
        /****Helper Functions****/
        // helper for enabling IE 8 event bindings
        function addEvent(el, type, handler) {
            if (el.attachEvent) el.attachEvent('on' + type, handler);
            else el.addEventListener(type, handler);
        }
        // matches polyfill
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
        // live binding helper using matchesSelector
        function live(selector, event, callback, context) {
            addEvent(context || document, event, function(e) {
                var found, el = e.target || e.srcElement;
                while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                if (found) callback.call(el, e);
            });
        }
        live(selector, event, callback, context);
      },
      TrackGAEvent : function($eventCategory, $eventAction, $eventLabel) {
        if ('ga' in window) {
            ga.getAll()[0].send('event', {
                eventCategory: $eventCategory,
                eventAction: $eventAction,
                eventLabel: $eventLabel,
            });
        }
      }
    };
  
    var feHeroHTML = '' +
      '<ul>'+
      ' <li>Get discovered by top tech employers.</li>'+
      ' <li>See new matching jobs ASAP.</li>'+
      ' <li>Apply easily to jobs with your profile.</li>'+
      ' <li>Stay current with tech career insights.</li>'+
      '</ul>';
  
    var feContactSalesHTML = '' +
      '  <li>' +
      '      <a href="https://techhub.dice.com/2018-SR-contact-us.html" target="_self" class="btn-link">Contact Sales</a>' +
      '  </li>';
  
    var Banner =''+ 
      '<div class="FeBanner">'+ 
      '<div class="FeBanner-overlay"></div>'+ 
      '<div class="container">'+
      '         <h2 class="fe-headline">Join the leading destination where </br>tech connects</h2>'+ 
      '  </div>'+
      '  </div>';
  
    var stepHTML =''+ 
      ' <div class="fe-multistep fe-show">'+
      '  <div class="fe-step">'+ 
      '      <h4>Let\'s get you started with Dice</h4>'+
      '      <div class="fe-step-option" bm-option="1">'+ 
      '           <input type="radio" id="fe-option1" name="fe-option"/>'+
      '             <label for="fe-option1"><p>I want to start or grow my tech career</p></label>'+
      '      </div>'+ 
      '      <div class="fe-step-option" bm-option="2">'+ 
      '           <input type="radio" id="fe-option2" name="fe-option"/>'+
      '             <label for="fe-option2"><p>I want to hire technologists</p></label>'+
  
      '      </div>'+ 
      '      <div class="fe-step-option" bm-option="3">'+ 
      '         <input type="radio" id="fe-option3" name="fe-option"/>'+
      '             <label for="fe-option3"><p>Neither apply to me</p></label>'+
      '      </div>'+ 
      '      <div class="fe-next">Next</div>'+ 
      '   </div>'+ 
      ' </div>';
   
    var step2HTML = ''+ 
      '  <div class="fe-learn-more-option">'+
      '   <div class="fe-learn-more">'+ 
      '      <h4>Dice helps employers and recruiters connect with the perfect candidates to fill their tech roles.</h4>'+ 
      '      <div class="fe-learn"><a href="https://www.dice.com/">Learn More</a></div>'+
      '      <div class="fe-back">Back</div>'+ 
      '   </div>'+
      '  </div>';
         
    function showRelatedResult(targetOption) {
      document.querySelector('.fe_registration-form .fe-multistep').classList.remove('fe-show');
      switch(targetOption) {
        case '1':
          document.querySelector('.fe_registration-form').classList.add('fe-show-option1'); 
          FEHelper.TrackGAEvent('DICE-55: Technologist Click','GA_Click','DICE-55: Technologist Click');
        break;
        case '2':
          FEHelper.TrackGAEvent('DICE-55: Employer Click','GA_Click','DICE-55: Technologist Click');
          document.querySelector('.fe_registration-form').classList.add('fe-show-option2'); 
          window.location.href = "https://techhub.dice.com/Dice-Contact-Us---RcrPkg_2020v3.html";
        break;
        case '3':
          FEHelper.TrackGAEvent('DICE-55: Neither Click','GA_Click','DICE-55: Neither Click');
          document.querySelector('.fe_registration-form').classList.add('fe-show-option3'); 
         // window.location.href = "https://www.dice.com/";
        break;
      }
    }
         
    function init() {
      if (document.querySelector('.navbar-header a[href="/home/home-feed"]')) {
        document.querySelector('.navbar-header a[href="/home/home-feed"]').setAttribute('href','/');
      }
      // Adjust layout
      document.querySelector('div.registrationHeader').setAttribute('class', 'registrationHeader');
      document.querySelector('div.registrationHeader').nextElementSibling.setAttribute('class', 'fe_registration-form');
      document.querySelector('div.registrationHeader').nextElementSibling.insertAdjacentHTML('afterbegin', stepHTML);
      document.querySelector(".registration-section").insertAdjacentHTML('afterend', step2HTML);
  
      // Update HTML
      document.querySelector('div.registrationHeader').innerHTML = feHeroHTML;
  
      // Update form headlines
       FEHelper.after(document.querySelector('.registration-section .form-title'), '<p class="fe_form-subtitle"><b>Register or</b> <a href="https://www.dice.com/dashboard/login">sign in</a> <span>Dice is always free for job seekers.</span></p>');
  
      // Adjust subscription checkbox
      document.querySelector('.diceCommunications .left-text').innerHTML = 'Send me the latest jobs, product announcements and studies.';
  
      //Button Text changes
      document.querySelector('.form-group .btn-primary').textContent = "Register";
      
      // Adjust agreement
      var fePrivacyTermsDiv = document.querySelector('div.privacyTermsDiv').parentElement.parentElement;
      var feSubmitDiv = document.querySelector('.registration-section .form-group:last-child');
      FEHelper.insertAfter(fePrivacyTermsDiv, feSubmitDiv);
      // Add sign in below form
      FEHelper.prepend(document.querySelector('div#menu-toggle .navbar-right.hidden-xs'), feContactSalesHTML);
      // Add Contact Sales link - mobile
      FEHelper.prepend(document.querySelector('div#menu-toggle .navbar-right.visible-xs'), feContactSalesHTML);
      
      // FEHelper.after(document.querySelector('.fe_registration-form'), Employers);
      FEHelper.after(document.querySelector('.dice-navbar'), Banner);
      document.body.style.opacity = '1';
  
      //add back button
      var feBack= document.createElement('p');
      feBack.innerHTML = "Back";
      feBack.classList.add('fe-back');
      document.querySelector('.registration-section').appendChild(feBack);
      FEHelper.live('.fe_registration-form .fe-multistep .fe-next','click',function(){
        var radioVal;
        var radio = document.querySelectorAll('.fe_registration-form .fe-multistep .fe-step-option input');
        for(var i=0; i< radio.length; i++){
          if(radio[i].checked){
            radioVal = radio[i].parentElement.getAttribute('bm-option');
            showRelatedResult(radioVal);
          
          } 
        }
      });
      FEHelper.live('.fe-back','click',function(){
      document.querySelector('.fe_registration-form .fe-multistep').classList.add('fe-show');
      document.querySelector('.fe_registration-form').classList.remove('fe-show-option3');
      document.querySelector('.fe_registration-form').classList.remove('fe-show-option2');
      document.querySelector('.fe_registration-form').classList.remove('fe-show-option1');   
      });
      FEHelper.live('#people button', 'click', function (e) {
        var fname = document.querySelector('#fname').value;
        var lname = document.querySelector('#lname').value;
        var email = document.querySelector('#email').value;
        if (fname.length == 0 || lname.length == 0 || email.length == 0) {
        }
        else if (!isCaptchaChecked()) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    }
   //if error occur while DOM manipulation
   setTimeout(function(){
    document.body.style.opacity = '1';
  },5000);
  function isCaptchaChecked() {
    return grecaptcha && grecaptcha.getResponse().length !== 0;
  }
  //add image on body for cache
  function initImg(){
    var preLoadImage = new Image();
    preLoadImage.src = 'https://fe-test-dev.s3.amazonaws.com/Dice/Dice-34/banner-image.jpg';
    preLoadImage.style.display = 'none';
    document.body.appendChild(preLoadImage);
  
  
    FEHelper.live('#diceCommunications','click',function(){
      FEHelper.TrackGAEvent(
        "funnelenvy",
        "GA_Clicks",
        "Email_Opt_In_Engagement"
      );
    })
  
    FEHelper.live('.registration-section .register-button-start','click',function(){
      if(document.querySelector('#diceCommunications').checked){
        FEHelper.TrackGAEvent(
          "funnelenvy",
          "GA_Clicks",
          "Submit_form_with_opt_in"
        );
      }
    })
  
    FEHelper.live('.dropdown-menu a[href="/jobs"]','click',function(){
      FEHelper.TrackGAEvent(
        "funnelenvy",
        "GA_Clicks",
        "search_job_clicks"
      );
    })
  
    FEHelper.live('.dropdown-menu a[href="https://www.dhicareerevents.com/dice-event-calendar/"]','click',function(){
      FEHelper.TrackGAEvent(
        "funnelenvy",
        "GA_Clicks",
        "career_events_clicks"
      );
    })
  
  }
   function initMain(){
     document.body.style.opacity = "0";
     setTimeout(function() {
    init();
     },1000);
   }
    FEHelper.onLoadElement('.registration-section .form-title', initMain, 50, 10000);
    FEHelper.onLoadElement('body', initImg, 50, 10000);
  })();