(function() {
    var FEHelper = {
      doWhenJqueryLoaded: function (todoWhenLoaded) {
        var waitForjQuery = setInterval(
          function () {
            if (typeof window.jQuery != 'undefined') {
              clearInterval(waitForjQuery);
              todoWhenLoaded();
            }
          }, 50);
      },
      onLoadElement: function(selector, trigger, delayInterval, delayTimeout) {
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
      },
      pushEvent: function (eventName) {
        var waitForFunnelEnvy = setInterval(function () {
          if (typeof window.funnelEnvy !== "undefined") {
            clearInterval(waitForFunnelEnvy);
            window.funnelEnvy = window.funnelEnvy || [];
            window.funnelEnvy.push({
              event: eventName
            });
          }
        }, 50);
        setTimeout(function () {
          clearInterval(waitForFunnelEnvy);
        }, 5000);
      },
      before: function(targetElement, beforeElement) {
        if (targetElement) {
          targetElement.insertAdjacentHTML('beforebegin', beforeElement);
        }
      },
      after: function(targetElement, afterElement) {
        if (targetElement) {
          targetElement.insertAdjacentHTML('afterend', afterElement);
        }
      },
      live: function (event, selector, callback, context) {
        /****Helper Functions****/
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
    };
    var feLogoSection =''+ 
  '  <section class="fe-logo-section12">'+ 
  '      <div class="fe-logo-section-inr">'+ 
  '          <h2 class="fe-logo-heading">Springboard grads were hired by...</h2>'+ 
  '          <div class="fe-logo-details">'+ 
  '              <div class="fe-logo-box fe-logo1">'+ 
  '              </div>'+ 
  '              <div class="fe-logo-box fe-logo2">'+ 
  '              </div>'+ 
  '              <div class="fe-logo-box fe-logo3">'+ 
  '              </div>'+ 
  '              <div class="fe-logo-box fe-logo4">'+ 
  '              </div>'+ 
  '              <div class="fe-logo-box fe-logo5">'+ 
  '              </div>'+ 
  '              <div class="fe-logo-box fe-logo6">'+ 
  '              </div>'+ 
  '          </div>'+ 
  '      </div>'+ 
  '  </div>'+    
  '  <div class="fe-job-section">'+ 
  '      <h2 class="fe-job-heading">Online learning with personalized support</h2>'+ 
  '      <div class="fe-job-container">'+ 
  '          <div class="fe-job-details">'+ 
  '              <div class="fe-job-content">'+ 
  '                  <div class="fe-job-content-img">'+ 
  '                      <img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto/v1/homepage-assets/hiw-mentors/personalized-learning-icon.svg" alt="personalized learning">'+ 
  '                  </div>'+ 
  '                  <div class="fe-job-content-text">'+ 
  '                      <h5 class="fe-content-heading">Live learning and collaboration</h5>'+ 
  '                      <p class="fe-content-para">Interact with expert instructors during live classes where you\'ll observe their techniques, ask questions and get feedback.</p>'+ 
  '                  </div>'+ 
  '              </div>'+ 
  '              <div class="fe-job-content">'+ 
  '                  <div class="fe-job-content-img">'+ 
  '                      <img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto/v1/homepage-assets/hiw-mentors/industry-insight.svg" alt="industry insight">'+ 
  '                  </div>'+ 
  '                  <div class="fe-job-content-text">'+ 
  '                      <h5 class="fe-content-heading">Hands-on experience</h5>'+ 
  '                      <p class="fe-content-para">Graduate job-ready with assessments requiring you to prospect, manage pipelines and close deals using actual industry tools.</p>'+ 
  '                  </div>'+ 
  '              </div>'+ 
  '              <div class="fe-job-content">'+ 
  '                  <div class="fe-job-content-img">'+ 
  '                      <img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto/v1/homepage-assets/hiw-mentors/motivation.svg" alt="motivation">'+ 
  '                  </div>'+ 
  '                  <div class="fe-job-content-text">'+ 
  '                      <h5 class="fe-content-heading">Personal career coaching</h5>'+ 
  '                      <p class="fe-content-para">Guidance at every career step, including job search strategy, resume development and mock interviews.</p>'+ 
  '                  </div>'+ 
  '              </div>'+ 
  '          </div>'+ 
  '          <div class="fe-job-image">'+ 
  '              <div class="fe-img-outer"></div>'+ 
  '              <p class="fe-img-para">"Calvin, my career coach, was just as special. He was the one always feeding me compliments while providing feedback on my job search strategy."</p>'+ 
  '              <h4 class="fe-author-name">Kashif Ross</h4>'+ 
  '              <p class="fe-author-designation">UX Analyst at Circulo</p>'+ 
  '          </div>'+ 
  '      </div>'+ 
  '  </div>'+ 
  ' <div class="fe-bootcamp">'+ 
  '          <h2 class="fe-bootcamp-heading">What you\'ll learn in this bootcamp</h2>'+ 
  '      <div class="fe-bootcamp-inr">'+ 
  '          <p class="fe-bootcamp-subheading">The curriculum combines 150+ hours of custom created videos, projects and quizzes with live classes and roleplay assessments.</p>'+ 
  '          <ul class="fe-bootcamp-list">'+ 
  '              <li><img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto,h_25/v1/homepage-assets/icons/icon-checkmark-green.png"> <span>Pipeline development</span></li>'+ 
  '              <li><img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto,h_25/v1/homepage-assets/icons/icon-checkmark-green.png"> <span>Prospect research<span></li>'+ 
  '              <li><img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto,h_25/v1/homepage-assets/icons/icon-checkmark-green.png"> <span>Engagement strategies<span></li>'+ 
  '              <li><img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto,h_25/v1/homepage-assets/icons/icon-checkmark-green.png"><span>Qualification call preparation</span></li>'+ 
  '              <li><img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto,h_25/v1/homepage-assets/icons/icon-checkmark-green.png"><span>Qualification call in action</span></li>'+ 
  '              <li><img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto,h_25/v1/homepage-assets/icons/icon-checkmark-green.png"><span>Handling objections and following up</span></li>'+ 
  '              <li><img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto,h_25/v1/homepage-assets/icons/icon-checkmark-green.png"><span>The sales tech stack</span></li>'+ 
  '              <li><img src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto,h_25/v1/homepage-assets/icons/icon-checkmark-green.png"><span>Succeeding in your new role</span></li>'+ 
  '          </ul>'+ 
  '          <div class="fe-bootcamplink"><a href="https://www.springboard.com/archeio/download/424ffa67c12547bcb7fb0f05aa6203ef/" target="_blank">Syllabus Download ></a>'+ 
  '              <div>'+ 
  '              </div>'+
  '          </section>';
  var feForm=  '<section class="fe-msf_step" id="fe-step3">' +
  '            <div class="fe-msf_step-inr">'+
  '            <h3>Ready to launch your </br>dream career?</h3>'+
  '             <span class= "fe-form-subhead">Apply now to secure your spot.</span>'+
  '           <div class="fe_msf-form">' +
  '              <div class="fe_form-row">' +
  '                 <input type="text" name="email" placeholder="Enter your email" class="fe_form-input">' +
  '              <span class="fe_form-error">' +
  '                  <i class="fa fa-exclamation-circle">!</i>' +
  '  	              <label>This field is required</label>' +
  '              </span>' +
  '              </div>' +
  '              <div class="fe_form-row">' +
  '                 <button class="fe_msf-submit primary-button" type="submit">Apply Now</button>' +
  '              </div>' +
  '              </div>'+
  '         </section>';
  var bmAvater =''+ 
  '  <div class="bm-avatar">'+ 
  '      <div class="avatar-quote">"'+ 
  '          <!-- -->Since Springboard, I\'ve really blended my passion into my work. I got a job on an advanced analytics team'+ 
  '          <!-- -->"'+ 
  '      </div>'+ 
  '      <div class="avatar-image-details-wrapper">'+ 
  '          <div class="avatar-image">'+ 
  '              <picture>'+ 
  '                  <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_1.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.png 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_2.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.png 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_3.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.png 3x, "'+ 
  '                      type="image/webp" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_1.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.png 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_2.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.png 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_3.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.png 3x, ">'+ 
  '                  <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_1.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_2.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_3.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.jpg 3x, "'+ 
  '                      type="image/jpg" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_1.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_2.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_3.0,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.jpg 3x, ">'+ 
  '                  <img class=" lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_auto,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.png" data-src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_52,q_auto,dpr_auto,fl_lossy/v1558688241/homepage-assets/career-tracks/sp-aic/career-coaching/lou.png">'+ 
  '              </picture>'+ 
  '          </div>'+ 
  '          <div class="avatar-details">'+ 
  '              <div class="name">Lou Zhang</div>'+ 
  '              <div class="title">Data Scientist, MachineMetrics</div>'+ 
  '          </div>'+ 
  '      </div>'+ 
  '  </div>';
  selectCourseOptions = {
    "/courses/data-analytics-career-track/": {
      course_name: "Data Analytics Career Track",
      link: "https://springboardedu.typeform.com/to/Mz6O40",
      workshop_id: 63
    },
    "/courses/ai-machine-learning-career-track/": {
      course_name: "ML Engineering Career Track",
      link: "https://springboardedu.typeform.com/to/GWKzyBdh",
      workshop_id: 53
    },
    "/courses/ui-ux-design-career-track/": {
      course_name: "UI/UX Design Career Track",
      link: "https://springboardedu.typeform.com/to/ICSivWSj",
      workshop_id: 77
    },
    "/courses/ux-career-track/": {
      course_name: "UX Career Track",
      link: "https://springboardedu.typeform.com/to/Kmmya26g",
      workshop_id: 27
    },
    "/courses/software-engineering-career-track/": {
      course_name: "Software Engineering Career Track",
      link: "https://springboardedu.typeform.com/to/Ysqdd2w6",
      workshop_id: 79
    },
    "/courses/data-engineering-career-track/": {
      course_name: "Data Engineering Career Track",
      link: "https://springboardedu.typeform.com/to/agzByXZQ",
      workshop_id: 92
    },
    "/courses/tech-sales-career-track/": {
      course_name: "Tech Sales Career Track",
      link: "https://springboardedu.typeform.com/to/qdhAys0p",
      workshop_id: 117
    }
  };
    function initHero() {
      if(window.screen.width < 768){
       // document.querySelector('.content .header').insertAdjacentHTML('afterend', feForm);
      }
      else{
     // document.querySelector('[class^="styles__HeroWrapper"] .content').insertAdjacentHTML('afterend', feForm);
    }
      if(!document.querySelector('.content .pill-text')){
                document.querySelector('.content .description').insertAdjacentHTML('afterend', '<div class="pill-text">Apply today and save $2,900</div>');
            }
      var insertInterval = setInterval(function () {
        document.querySelector('.content .summary').innerHTML='<span class="fe-Job"> Job guaranteed</span><span class="fe-bootcamp">LIVE CLASSES</span>';
        
       document.querySelector('.content h1').innerHTML = 'Launch a tech sales career in 3 months.';
      document.querySelector('.content .description').textContent = 'Build an exciting, well-paid career in tech with live, expert-led training and 1-on-1 career coaching.';
      if(document.querySelector('.partnershipRatingWrapper')){
       document.querySelector('.partnershipRatingWrapper').outerHTML = '<div class="partnershipRatingWrapper"><div class="styles__RatingContainer-igz7cu-1 kiOZyd ratingContainer right"><div class="imageWrapper"><picture><source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_1.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.png 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_2.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.png 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_3.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.png 3x, " type="image/webp" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_1.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.png 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_2.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.png 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_3.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.png 3x, "><source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_1.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_2.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_3.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.jpg 3x, " type="image/jpg" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_1.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_2.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_3.0,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.jpg 3x, "><img class="image lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_auto,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.png" data-src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_80,q_auto,dpr_auto,fl_lossy/v1543559172/homepage-assets/career-tracks/switchup-banner.png"></picture></div><div class="ratingWrapper"><div class="rating"><span>4.69 of 5</span><picture><img class="image lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_15,q_auto,dpr_auto,fl_lossy/v1/homepage-assets/career-tracks/sp-uxc/hero-banner/sp-uxc-stars.png" data-src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_15,q_auto,dpr_auto,fl_lossy/v1/homepage-assets/career-tracks/sp-uxc/hero-banner/sp-uxc-stars.png"></picture></div><div class="ratingText">Student rating on<!-- --> <a href="https://www.switchup.org/bootcamps/springboard" target="_blank">SwitchUp</a></div></div></div></div>';
      }
      // document.querySelector('.partnershipRatingWrapper .ratingWrapper .ratingText a').innerHTML= "SwitchUp";
      // document.querySelector('.partnershipRatingWrapper .ratingWrapper .rating span').innerHTML= "4.68 of 5";
       // var msfContent = document.querySelectorAll('.fe-logo-section12');
        var msfContent1 = document.querySelectorAll('.fe-msf_step');
        //console.log('hello',msfContent, !msfContent);		
       
        // if (!msfContent.length) {	
        //   document.querySelector('.hLGZWg').parentElement.insertAdjacentHTML("afterend",feLogoSection);	
        // }
        
        if(!msfContent1.length){
          if(window.screen.width < 940){
            //document.querySelector('.content .header').insertAdjacentHTML('afterend', feForm);
          }
          else{
          //document.querySelector('[class^="styles__HeroWrapper"] .content').insertAdjacentHTML('afterend', feForm);
          }
           if(!document.querySelector('.content .pill-text')){
                document.querySelector('.content .description').insertAdjacentHTML('afterend', '<div class="pill-text">Apply today and save $2,900</div>');
            }
         
        }
        }, 200);	
      setTimeout(function () {
        clearInterval(insertInterval);
      },8000);
      
      // window.Moraf.create('.LcDzA', function($el) {
      //   $el.after(feForm);
      //   });
      //   window.Moraf.create('.styles__SectionWrapper-h2r7zm-0:nth-child(3)', function($el) {
      //   //  $el.after(feLogoSection);
      //     });
    
          // submit button click
          FEHelper.live('click', '.fe_msf-form button', function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('course page');
            var input = document.querySelector('.fe_form-row input').value;
          dataSend(input);
          });
      
          FEHelper.live('click','.fe_form-row input', function () {
            hideError();
          });
          FEHelper.live('keydown','.fe_form-row input', function (e) {
           console.log('course page');
            var code = (e.keyCode ? e.keyCode : e.which);
            if(code == 13) { //Enter keycode
              e.preventDefault();
              e.stopPropagation();
              var input = this.value;
             dataSend(input);
          }
          });
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
      return n = n.replace(/^"(.*)"$/g, "$1"), encodeURIComponent(n)
    }
     function getReferrer() {
      return [window.location.href, getCookie("referer2")]
    }
      function getVwoCampaignId() {
        var n = window._vwo_campaignData,
          t = n ? Object.keys(n) : [],
          e = "";
        return t.map(function (o, l) {
          e += o + "-" + n[o].c + (l !== t.length - 1 ? "_" : "")
        }), e
      };
     function dataSend(input){
      if (validateEmail(input)) {
        if(document.querySelector('.fe_form .fe_form-input').value.length > 0){
          document.querySelector('.fe_form-error label').innerHTML = "Email address is not valid";
          showError();
        }else{
          document.querySelector('.fe_form-error label').innerHTML = "This field is required";
          showError();  
        }      
      } else {
        // removing error
        hideError();
        var selectedCourse = selectCourseOptions[window.location.pathname];
        sendData('https://www.springboard.com/learning-paths/interested/', {
          apply: 1,
          js_disabled: 'yes',
          workshop_id: selectedCourse.workshop_id,
          email: input
        }, selectedCourse.link);
      }
    }
    function showError() {
      //document.querySelector('.applicationFormWrapper .formGroupEmail .errorMessage').innerText = "This field is required";
      document.querySelector('.fe_msf-form .fe_form-error').style.display = 'block';
    }
      function hideError() {
      document.querySelector('.fe_msf-form .fe_form-error').style.display = 'none';
    }
      function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email.toLowerCase())) {
        return true;
      }
      return false;
    }
      function sendData(url, data, submitLink) {
      var XHR = new XMLHttpRequest(),
        FD = new FormData();
      // Push our data into our FormData object
      var i = getVwoCampaignId();
      var l = getReferrer();
         var gclid = getParameterByName('gclid');
      var feuuid = generateUUID() || uuidv4() || '';
      var data1= GetReferrerUtmParams();
      var utmParam='';
      for (var key of Object.keys(data1)) {
    utmParam+=''+key+'='+data1[key]+'&'; 
      }
      var redirectURL = submitLink + "?referral=" + l[0] + "&referral2=" + l[1] + "&email=" + data.email + "&segmentanonymousid=" + getSegmentAnonymousId() + (i ? "&variationid=" + i : "")+"&uuid="+feuuid+"&gclid="+gclid+"&"+utmParam;
      
      for (var key of Object.keys(data)) {
        FD.append(key, data[key]);
      }
      FD.append('UUID',feuuid);
     FD.append('gclid',gclid);
      XHR.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          window.location.href = redirectURL;
        }
      };
      // Set up our request
      XHR.open('POST', url);
      // Send our FormData object; HTTP headers are set automatically
      XHR.send(FD);
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
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }
      //get uuid 
  function generateUUID() { 
    var d = new Date().getTime();
    //Timestamp 
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;
    //Time in microseconds since page-load or 0 if unsupported 
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, 
      function(c) { var r = Math.random() * 16;//random number between 0 and 16 
        if(d > 0){//Use timestamp until depleted 
          r = (d + r)%16 | 0; d = Math.floor(d/16);
         } else {
           //Use microseconds since page-load if supported 
           r = (d2 + r)%16 | 0; d2 = Math.floor(d2/16);
           } 
           return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16); }); 
          } 
   
    function initLogo() {
      var insertInterval = setInterval(function () {
         var msfContent1 = document.querySelectorAll('.fe-logo-section12');
         if(!msfContent1.length){
          document.querySelector('#logos').insertAdjacentHTML('afterend', feLogoSection);
            if(!document.querySelector('.fe-logo-section12 .new-banner')){
                document.querySelector('.fe-logo-section12 .fe-logo-section-inr').insertAdjacentHTML('afterend', '<div class="new-banner"><h4 class="text">Tech Sales tuition NOW discounted $2,900 — Save up to 37%</h4></div>');
          //  	var header = document.querySelector(".new-banner");
             // var sticky = header.offsetTop;
             //   window.onscroll = function() {
                //if (window.pageYOffset > sticky) {
                //  header.classList.add("sticky");
                //} else {
                //  header.classList.remove("sticky");
                //}
             //   }; 
          }
          // document.querySelector('#logos + div').insertAdjacentHTML('afterend', febootcamp);
          //document.querySelector('div.wrapper + div + div').innerHTML = feLogoSection;
         }
         }, 200);	
       setTimeout(function () {
         clearInterval(insertInterval);
       },5000);
    }
    var feImagesNumber = [
      '<img class=" lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/v1651137244/vwo-exp-assets/transparent_Best_online_bootcamp_course_report_2021.webp" data-src="https://res.cloudinary.com/springboard-images/image/upload/v1651137244/vwo-exp-assets/transparent_Best_online_bootcamp_course_report_2021.webp">',
      '<img class=" lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/v1651137244/vwo-exp-assets/Best_bootcamp_transparent2020.webp" data-src="https://res.cloudinary.com/springboard-images/image/upload/v1651137244/vwo-exp-assets/Best_bootcamp_transparent2020.webp">',
      '<img class=" lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/v1651210562/vwo-exp-assets/transparent_CR_best_bootcamp_2019.webp" data-src="https://res.cloudinary.com/springboard-images/image/upload/v1651210562/vwo-exp-assets/transparent_CR_best_bootcamp_2019.webp">',
    ]
    function initFooter() {
      setTimeout(function(){
        var feImagesLink = document.querySelectorAll('#investors .investerWrapper .container picture');
     for(var i=0; i < feImagesLink.length; i++){
        feImagesLink[i].innerHTML = feImagesNumber[i];
      }
        document.querySelector('.bulletPointWrapper .bulletPoint:nth-child(1) span').innerHTML = "Live, expert-led classes and roleplays";
        document.querySelector('.bulletPointWrapper .bulletPoint:nth-child(2) span').innerHTML = "Personalized career coaching";
        document.querySelector('.bulletPointWrapper .bulletPoint:nth-child(3) span').innerHTML = "1-on-1 mock interviews";
        document.querySelector('.bulletPointWrapper .bulletPoint:nth-child(4) span').innerHTML = "Graduate in just 12 weeks";
        document.querySelector('.bulletPointWrapper .bulletPoint:nth-child(5) span').innerHTML = "Job Guarantee";
        //       document.querySelector('.applicationFormWrapper .header').innerHTML = "Ready to make the career change </br>you've always dreamed of?";
        // document.querySelector('.applicationFormWrapper .description').innerHTML = "The application is free and takes just 5 minutes to complete.";
      // document.querySelector('.applicationFormWrapper .footerText').insertAdjacentHTML('afterend', bmAvater);
    },4000);
    }
     function getParameterByName(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    FEHelper.onLoadElement('[class^="styles__HeroWrapper"]',initHero, 50, 10000);
    FEHelper.onLoadElement('#logos',initLogo, 50, 10000);
    FEHelper.onLoadElement('.bulletPointWrapper .bulletPoint',initFooter,500,30000);
  })();
  