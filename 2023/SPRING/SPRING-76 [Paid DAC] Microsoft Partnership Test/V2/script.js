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
  var feForm=  '         <section class="fe-msf_step" id="fe-step3">' +
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
  var feHeroLogo =''+ 
  '  <div class="partnershipRatingWrapper ">'+ 
  '      <div class="partnershipWrapper"><span class="prefixText">In partnership with</span>'+ 
  '          <picture>'+ 
  '              <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_1.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_2.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_3.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.webp 3x, "'+ 
  '                  type="image/webp" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_1.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_2.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_3.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.webp 3x, ">'+ 
  '              <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_1.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_2.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_3.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.jpg 3x, "'+ 
  '                  type="image/jpg" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_1.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_2.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_3.0,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.jpg 3x, ">'+ 
  '              <img class="partnerLogo lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_auto,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.webp" data-src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_40,q_auto,f_webp,dpr_auto,fl_lossy/v1557315639/homepage-assets/career-tracks/sp-dac/hero-banner/partner-microsoft.webp"'+ 
  '                  alt="">'+ 
  '          </picture>'+ 
  '      </div>'+ 
  '  </div>';
  var selectCourseOptions = {
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
    "/landing/data-analytics-career-track/": {
      course_name: "Data Analytics Career Track",
      link: "https://springboardedu.typeform.com/to/Mz6O40",
      workshop_id: 63
    }
  };
  window._vis_opt_queue = window._vis_opt_queue || [];
    function initHero() {
      if(window.screen.width < 768){
        document.querySelector('[class^="style__HeroWrapper"] .textWrapper > a').insertAdjacentHTML('afterend', feForm);
      }
      else{
      document.querySelector('[class^="style__HeroWrapper"] .textWrapper').insertAdjacentHTML('afterend', feForm);
      }
      updateHeroImage();
     
      var insertInterval = setInterval(function () {
        if(!document.querySelector('.fe-hero')){
          document.querySelector('[class^="style__HeroWrapper"]').parentElement.classList.add('fe-hero');
        }
        if(!document.querySelector('.summary')){
       document.querySelector('[class^="style__HeroWrapper"] .textWrapper .header').insertAdjacentHTML('beforebegin', '<p class="summary"><span class="fe-Job"> Job guaranteed</span><span class="fe-bootcamp">online bootcamp</span></p>');
       document.querySelector('[class^="style__HeroWrapper"] .textWrapper .description').insertAdjacentHTML('afterend', feHeroLogo)
        }
        var msfContent1 = document.querySelectorAll('.fe-msf_step');
        //console.log('hello',msfContent, !msfContent);		
       
        // if (!msfContent.length) {	
        //   document.querySelector('.hLGZWg').parentElement.insertAdjacentHTML("afterend",feLogoSection);	
        // }	
        if(!msfContent1.length){
          if(window.screen.width < 940){
            document.querySelector('[class^="style__HeroWrapper"] .textWrapper > a').insertAdjacentHTML('afterend', feForm);
          }
          else{
          document.querySelector('[class^="style__HeroWrapper"] .textWrapper').insertAdjacentHTML('afterend', feForm);
          }
          updateHeroImage();
        }
        }, 20);	
      setTimeout(function () {
        clearInterval(insertInterval);
      },8000);
      
      // window.Moraf.create('[class^="style__HeroWrapper"]', function($el) {
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
               // begin application 	
               FEHelper.live('mousedown','.applicationFormWrapper form.start-application-form button',function(){	
                email = document.querySelector('.applicationFormWrapper form.start-application-form .formGroup.formGroupEmail input').value;	
                // validate the email	
                var validate = /^([A-Za-z0-9_\+\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;	
                if (email.match(validate)) {	
                  window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(301);});	
                }	
              })	
              FEHelper.live('keypress','.applicationFormWrapper form.start-application-form .formGroup.formGroupEmail input',function(event){	
                if (event.key === "Enter") {	
                  email = document.querySelector('.applicationFormWrapper form.start-application-form .formGroup.formGroupEmail input').value;	
                  // validate the email	
                  var validate = /^([A-Za-z0-9_\+\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;	
                  if (email.match(validate)) {	
                    window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(301);});	
                  }	
                }	
              })
              FEHelper.live('mousedown','.fe-msf_step-inr button.fe_msf-submit.primary-button',function(){	
                email = document.querySelector('.fe-msf_step-inr input.fe_form-input').value;	
                // validate the email	
                var validate = /^([A-Za-z0-9_\+\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;	
                if (email.match(validate)) {	
                  window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(301);});	
                }	
              })	
              FEHelper.live('keypress','.fe-msf_step-inr input.fe_form-input',function(event){	
                if (event.key === "Enter") {	
                  email = document.querySelector('.fe-msf_step-inr input.fe_form-input').value;	
                  // validate the email	
                  var validate = /^([A-Za-z0-9_\+\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;	
                  if (email.match(validate)) {	
                    window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(301);});	
                  }	
                }	
              })
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
        showError();
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
            function getParameterByName(name, url = window.location.href) {
              name = name.replace(/[\[\]]/g, '\\$&');
              var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                      results = regex.exec(url);
              if (!results) return null;
              if (!results[2]) return '';
              return decodeURIComponent(results[2].replace(/\+/g, ' '));
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
     function updateHeroImage(){
        var heroImage = '<div class="hero-image"><img src="https://res.cloudinary.com/springboard-images/image/upload/fl_lossy,q_auto/vwo-exp-assets/Spring-76/Microsoft_logo.svg" alt="Microsoft Logo"></div>';
          if(!document.querySelector('html body [class^="style__HeroWrapper"] .partnershipRatingWrapper .hero-image') && document.querySelector('html body [class^="style__HeroWrapper"] .partnershipRatingWrapper .partnershipWrapper')){
          document.querySelector('html body [class^="style__HeroWrapper"] .partnershipRatingWrapper .partnershipWrapper').insertAdjacentHTML('afterend', heroImage);
          }
        if(!document.querySelector('html body [class^="style__HeroWrapper"] .textWrapper > .hero-image') && document.querySelector('html body [class^="style__HeroWrapper"] .textWrapper > #fe-step3')){
          document.querySelector('html body [class^="style__HeroWrapper"] .textWrapper > #fe-step3').insertAdjacentHTML('afterend',heroImage);
          }	
          if(!document.querySelector('html body [class^="style__HeroWrapper"] > .hero-image') && document.querySelector('html body [class^="style__HeroWrapper"] > #fe-step3')){
          document.querySelector('html body [class^="style__HeroWrapper"] > #fe-step3').insertAdjacentHTML('afterend',heroImage);
          }
    }
    FEHelper.onLoadElement('[class^="style__HeroWrapper"] .textWrapper',initHero, 50, 10000);   
    FEHelper.onLoadElement('[class^="style__HeroWrapper"] #fe-step3',updateHeroImage, 500, 10000);
  })();
  