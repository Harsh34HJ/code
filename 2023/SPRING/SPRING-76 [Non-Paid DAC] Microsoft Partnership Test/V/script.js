console.log('sp-14 run camp');
(function () {
  function createCookie(name, value, days) {		
    var expires;		
    if (days) {		
        var date = new Date();		
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));		
        expires = "; expires=" + date.toGMTString();		
    }		
    else {		
        expires = "";		
    }		
    document.cookie = name + "=" + value + expires + "; path=/";		
}
  var debugMode = false;
  var FEHelper = {
    // Wait for element
    onLoadElement: function (selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelectorAll(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    },
    live : function (event, selector, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
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
        addEvent(context || document, event, function (e) {
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
    }
  };
	function fnc_scrollto(to){
    to = parseInt(to);
var i = parseInt(window.pageYOffset);
    if (i < to) {
        var int = setInterval(function() {
            if (i > (to-20)) i += 1;
            else if (i > (to-40)) i += 3;
            else if (i > (to-80)) i += 8;
            else if (i > (to-160)) i += 18;
            else if (i > (to-200)) i += 24;
            else if (i > (to-300)) i += 40;
            else i += 60;
            window.scroll(0, i);
            if (i >= to) clearInterval(int);
        }, 10);
    }
    else {
        var int = setInterval(function() {
            if (i < (to+20)) i -= 1;
            else if (i < (to+40)) i -= 3;
            else if (i < (to+80)) i -= 8;
            else if (i < (to+160)) i -= 18;
            else if (i < (to+200)) i -= 24;
            else if (i < (to+300)) i -= 40;
            else i -= 60;
            window.scroll(0, i);
            if (i <= to) clearInterval(int);
        }, 10);
    }
}
  function removeClasses(){
    document.querySelector('body').classList.remove('fe-homepage');
    document.querySelector('body').classList.remove('fe-uiux-page');
    document.querySelector('body').classList.remove('fe-csc-page');
    document.querySelector('body').classList.remove('fe-dsc-page');
    document.querySelector('body').classList.remove('fe-dec-page'); 
    document.querySelector('body').classList.remove('fe-dscp-page'); 
    document.querySelector('body').classList.remove('fe-sec-page'); 
    document.querySelector('body').classList.remove('fe-dec-page-new'); 
    document.querySelector('body').classList.remove('fe-i2d-page'); 
    document.querySelector('body').classList.remove('fe-i2d-page-new'); 
    document.querySelector('body').classList.remove('fe-uxc-page'); 
    document.querySelector('body').classList.remove('fe-overview-page');
    document.querySelector('body').classList.remove('fe-mentoring-page');
    document.querySelector('body').classList.remove('fe-tuition-page');
    document.querySelector('body').classList.remove('fe-payment-page');
    document.querySelector('body').classList.remove('fe-tech-sales-page');
    document.querySelector('body').classList.remove('fe-tech-blacks-ixc-page');
    document.querySelector('body').classList.remove('fe-tech-blacks-sec-page');
    document.querySelector('body').classList.remove('fe-outcomes-page');
    document.querySelector('body').classList.remove('fe-data-analytics-career-track-page');
    document.querySelector('body').classList.remove('fe-software-engineering-career-track-prep-page');
    document.querySelector('body').classList.remove('fe-scholarships-page');
    document.querySelector('body').classList.remove('fe-digital-marketing-page');
    document.querySelector('body').classList.remove('fe-mentors-page');
    document.querySelector('body').classList.remove('fe-social-media-marketing-page');
    document.querySelector('body').classList.remove('fe-backend-development-java');
    document.querySelector('body').classList.remove('fe-digital-marketing-career-track');
    document.querySelector('body').classList.remove('fe-ui-ux-design-career-track-uk');
    document.querySelector('body').classList.remove('fe-foundations-data');
    document.querySelector('body').classList.remove('fe-foundations-software');
  }
  function listener() {
    /* These are the modifications: */
    window.addEventListener("locationchange", function() {
        removeClasses();
        FEHelper.onLoadElement(".footerLinks", initCourse, 10, 25000);
    });
    history.pushState = ((f) =>
      function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
      })(history.pushState);
    history.replaceState = ((f) =>
      function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
      })(history.replaceState);
    window.addEventListener("popstate", () => {
      window.dispatchEvent(new Event("locationchange"));
    });
  }
  var sliderImages = ["https://res.cloudinary.com/springboard-images/image/upload/v1651061590/vwo-exp-assets/Sping-14/Rise_Kavisha_Shroff_2359_color.webp",
    "https://res.cloudinary.com/springboard-images/image/upload/v1657791416/vwo-exp-assets/Sping-14/Trixy_Woodhouse.png",
    "https://res.cloudinary.com/springboard-images/image/upload/v1651061587/vwo-exp-assets/Sping-14/Esme_Gaisford2359__1.webp",
    "https://res.cloudinary.com/springboard-images/image/upload/v1651061589/vwo-exp-assets/Sping-14/Jeffrey_Surban.webp",
    "https://res.cloudinary.com/springboard-images/image/upload/v1657791416/vwo-exp-assets/Sping-14/Jonathan_King.png"];
  var sliderHealings = ['<b>Kavisha Shroff:</b> from medical research to software operations at Google', '<b>Trixy Woodhouse:</b> from visual merchandiser to UX designer at Nike', '<b>Jeffery Surban:</b> from film production to UX design at Citibank', '<b>Esme Gaisford:</b> from writer to data scientist at Pandora', '<b>Jonathan King:</b> from operations to senior analyst at IBM'];
  
	var exploreIcon = ['<img _ngcontent-c5="" src="https://res.cloudinary.com/springboard-images/image/upload/v1651061586/vwo-exp-assets/Sping-14/Data__General__1.webp" alt="" class="course-logo">', '<img _ngcontent-c5="" src="https://res.cloudinary.com/springboard-images/image/upload/v1651061587/vwo-exp-assets/Sping-14/Design__General__1.webp" alt="" class="course-logo">', '<img _ngcontent-c5="" src="https://res.cloudinary.com/springboard-images/image/upload/v1651061590/vwo-exp-assets/Sping-14/Software_Engineering_Prep_1.webp" alt="" class="course-logo">', '<img _ngcontent-c5="" src="https://res.cloudinary.com/springboard-images/image/upload/v1651061586/vwo-exp-assets/Sping-14/Cybersecurity.webp" alt="" class="course-logo">', '<img _ngcontent-c5="" src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,w_126,q_auto,dpr_auto,fl_lossy/v1643661458/Tech_Sales_General_1.png" alt="" class="course-logo">'];
  function init() {
    document.querySelector('body').classList.add('fe-homepage');
    try {
      var interval = setInterval(function () {
        updateInnerCopy();
        sliderUpdate();
        //vwo_$("html body").vwoCss({"display":"block !important"});
      }, 10);
      setTimeout(function () {
        clearInterval(interval);
      }, 5000);
    }
    catch (e) {
      console.log(e);
    }
  }
  function initCourse() {
    document.querySelector('body').classList.add('fe-course-page');
    var interval = setInterval(function() {
    updateCourse();
    if(window.location.pathname === '/courses/data-science-career-track/' || window.location.pathname === '/courses/data-science-career-track') {
      if(!document.querySelector('.fe-banner-img')){
        document.querySelector('body').classList.add('fe-dec-page');
        document.querySelector('.hoQyHk h1').innerHTML = "Data Science Bootcamp: Pay only after you get a <span>data science job.</span>";
        document.querySelector('.hoQyHk .content').insertAdjacentHTML('afterend', FEHeroImage);
      }
  		
    }
    if(window.location.pathname === '/courses/ui-ux-design-career-track/' || window.location.pathname === '/courses/ui-ux-design-career-track') {
        document.querySelector('body').classList.add('fe-uiux-page');
    }
    if(window.location.pathname === '/courses/cyber-security-career-track/' || window.location.pathname === '/courses/cyber-security-career-track') {
      document.querySelector('body').classList.add('fe-csc-page');
    }
    if(window.location.pathname === '/courses/data-science-career-track/' || window.location.pathname === '/courses/data-science-career-track/') {
      document.querySelector('body').classList.add('fe-dsc-page'); 
    }
    if(window.location.pathname === '/courses/data-science-career-track-prep/' || window.location.pathname === '/courses/data-science-career-track-prep') {
      document.querySelector('body').classList.add('fe-dscp-page'); 
    }
    if(window.location.pathname === '/courses/software-engineering-career-track/' || window.location.pathname === '/courses/software-engineering-career-track') {
      document.querySelector('body').classList.add('fe-sec-page'); 
    }
    if(window.location.pathname === '/courses/data-engineering-career-track/' || window.location.pathname === '/courses/data-engineering-career-track') {
      document.querySelector('body').classList.add('fe-dec-page-new'); 
    }
    if(window.location.pathname === '/courses/introduction-to-analytics/' || window.location.pathname === '/courses/introduction-to-analytics') {
      document.querySelector('body').classList.add('fe-i2d-page'); 
    }
    if(window.location.pathname === '/courses/introduction-to-design/' || window.location.pathname === '/courses/introduction-to-design') {
      document.querySelector('body').classList.add('fe-i2d-page-new'); 
    }
    if(window.location.pathname === '/courses/ux-career-track/' || window.location.pathname === '/courses/ux-career-track') {
      document.querySelector('body').classList.add('fe-uxc-page'); 
    }
    if(window.location.pathname === '/how-it-works/overview/' || window.location.pathname === '/how-it-works/overview') {
      document.querySelector('body').classList.add('fe-overview-page');
    }
    if(window.location.pathname === '/how-it-works/mentoring/' || window.location.pathname === '/how-it-works/mentoring') {
      document.querySelector('body').classList.add('fe-mentoring-page');
    }
    if(window.location.pathname === '/how-it-works/tuition-job-guarantee/' || window.location.pathname === '/how-it-works/tuition-job-guarantee') {
      document.querySelector('body').classList.add('fe-tuition-page');
    }
    if(window.location.pathname === '/how-it-works/payment-options/' || window.location.pathname === '/how-it-works/payment-options') {
      document.querySelector('body').classList.add('fe-payment-page');
    }
    if(window.location.pathname === '/courses/tech-sales-career-track/' || window.location.pathname === '/courses/tech-sales-career-track') {
      document.querySelector('body').classList.add('fe-tech-sales-page');
    }
    if(window.location.pathname === '/courses/blacks-in-tech-ixc/' || window.location.pathname === '/courses/blacks-in-tech-ixc') {
      document.querySelector('body').classList.add('fe-tech-blacks-ixc-page');
    }
    if(window.location.pathname === '/courses/blacks-in-tech-sec/' || window.location.pathname === '/courses/blacks-in-tech-sec') {
      document.querySelector('body').classList.add('fe-tech-blacks-sec-page');
    }
    if(window.location.pathname === '/outcomes/' || window.location.pathname === '/outcomes') {
      document.querySelector('body').classList.add('fe-outcomes-page');
    }
    if(window.location.pathname === '/courses/data-analytics-career-track/' || window.location.pathname === '/courses/data-analytics-career-track') {
      document.querySelector('body').classList.add('fe-data-analytics-career-track-page');
	  updateHeroImage();
    }
    if(window.location.pathname === '/courses/software-engineering-career-track-prep/' || window.location.pathname === '/courses/software-engineering-career-track-prep') {
      document.querySelector('body').classList.add('fe-software-engineering-career-track-prep-page');
    }
    if(window.location.pathname === '/how-it-works/scholarships' || window.location.pathname === '/how-it-works/scholarships/') {
      document.querySelector('body').classList.add('fe-scholarships-page');
    }
    if(window.location.pathname === '/courses/digital-marketing-professional-certificate/' || window.location.pathname === '/courses/digital-marketing-professional-certificate') {
      document.querySelector('body').classList.add('fe-digital-marketing-page');
    }
    if(window.location.pathname === '/mentors' || window.location.pathname === '/mentors/') {
      document.querySelector('body').classList.add('fe-mentors-page');
    }
    if(window.location.pathname === '/courses/social-media-marketing-professional-certificate' || window.location.pathname === '/courses/social-media-marketing-professional-certificate/') {
      document.querySelector('body').classList.add('fe-social-media-marketing-page');
    }
    if(window.location.pathname === '/courses/backend-development-java-career-track' || window.location.pathname === '/courses/backend-development-java-career-track/') {
      document.querySelector('body').classList.add('fe-backend-development-java');
    }
    
    if(window.location.pathname === '/courses/digital-marketing-career-track' || window.location.pathname === '/courses/digital-marketing-career-track/') {
      document.querySelector('body').classList.add('fe-digital-marketing-career-track');
    }
    
    if(window.location.pathname === '/courses/ui-ux-design-career-track-uk' || window.location.pathname === '/courses/ui-ux-design-career-track-uk/') {
      document.querySelector('body').classList.add('fe-ui-ux-design-career-track-uk');
    }
    if(window.location.pathname === '/courses/foundations-to-core-data-science' || window.location.pathname === '/courses/foundations-to-core-data-science/') {
      document.querySelector('body').classList.add('fe-foundations-data');
    }
    if(window.location.pathname === '/courses/foundations-to-core-software-engineering' || window.location.pathname === '/courses/foundations-to-core-software-engineering/') {
      document.querySelector('body').classList.add('fe-foundations-software');
    }
    vwo_$("body").vwoCss({"visibility":"visible !important"});
    },20);
    setTimeout(function () {
      clearInterval(interval);
      if(window.location.pathname != '/courses/digital-marketing-professional-certificate' || window.location.pathname != '/courses/digital-marketing-professional-certificate/') {
        if(!document.querySelector('.tabsWrapper .tabHeaderWrapper .tabList div > b')){
          var feList = document.querySelectorAll('.tabsWrapper .tabHeaderWrapper .tabList div');
          for (var i = 0; i < feList.length; i++) {
            var innerData = feList[i].innerHTML;
            var index = i;
            feList[i].innerHTML = '<b>Topic ' + (index + 1) + ': </b>' + innerData;
          }         
        }
            vwo_$("body").vwoCss({"visibility":"visible !important"});
      }
  }, 5000);
  }
  //assets pre load 
  function preLoad() {
    var img = new Image();
    img.src = "https://res.cloudinary.com/springboard-images/image/upload/v1651061586/vwo-exp-assets/Sping-14/banner-background.svg";
    img.style.display = "none";
    document.body.appendChild(img);
    var img1 = new Image();
    img1.src = "https://res.cloudinary.com/springboard-images/image/upload/v1651061585/vwo-exp-assets/Sping-14/Bg-home-1.webp";
    img1.style.display = "none";
    document.body.appendChild(img1);
    //add font 
    var newStyle = document.createElement('style');
    newStyle.src = "https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/SPRING-14/Athelas.otf";
    document.body.appendChild(newStyle);
  }
  //update slider images and few icons
  function sliderUpdate() {
    var exploreSlide = document.querySelectorAll('#explore-programs .courses picture');
    for (var i = 0; i < exploreSlide.length; i++) {
      exploreSlide[i].innerHTML = exploreIcon[i];
    }
    if(document.querySelector('.swiper-slide.swiper-slide-duplicate[data-swiper-slide-index="0"] img'))
    document.querySelector('.swiper-slide.swiper-slide-duplicate[data-swiper-slide-index="0"] img').src = "https://res.cloudinary.com/springboard-images/image/upload/v1651061590/vwo-exp-assets/Sping-14/Rise_Kavisha_Shroff_2359_color.webp";
    if(document.querySelector('.swiper-slide.swiper-slide-duplicate[data-swiper-slide-index="0"] img')){
      document.querySelector('.swiper-slide.swiper-slide-duplicate[data-swiper-slide-index="0"] picture').insertAdjacentHTML('afterend', '<p class="fe-image-heading">'+sliderHealings[0]+'</p>');
    }
    var slides = document.querySelectorAll('.swiper-container .swiper-slide:not(.swiper-slide-duplicate) picture img');
    for (var i = 0; i < slides.length; i++) {
      slides[i].src = sliderImages[i];
      if(slides[i].closest('.alumni-pic').querySelector('.fe-image-heading') == null) {
        slides[i].closest('picture').insertAdjacentHTML('afterend', '<p class="fe-image-heading">'+sliderHealings[i]+'</p>');
      }
    }
   vwo_$("body").vwoCss({"visibility":"visible !important"});
  }
  function updateInnerCopy() {
    //Removing inline style of homepage banner
    updateInnerHtml(document.querySelector('.hero-banner-container .hero-banner-visited-title'), 'Time to make the</br> <span>career change</span> you\’ve always wanted');
    // document.querySelector('.hero-banner-container .hero-banner-visited-title').innerHTML = 'Time to make the</br> <span>career change</span> you\’ve always wanted';
    updateInnerHtml(document.querySelector('.hero-banner-container .hero-banner-visited-title'), 'Time to make the</br> <span>career change</span> you\’ve always wanted');
         
    updateInnerHtml(document.querySelector('.content-container .hero-banner-title'), 'Learn online <br> with a<span>job guarantee</span>');
    //  document.querySelector('.content-container .hero-banner-title').innerHTML  = 'Learn online <br> with a<span>job guarantee</span>';
    updateInnerHtml(document.querySelector('.desktop-container .quiz-card p.text'), 'Find the right Data Science course for you');
    updateInnerHtml(document.querySelector('.quiz-link .spb-secondary-button .secondary-button'), 'Take our course quiz');
    updateInnerHtml(document.querySelector('.header-container.homepage .links li:nth-child(4) .bold-on-hover'), 'Student Success');
    updateInnerHtml(document.querySelector('.springboard-reviews-container .review:nth-child(2) .review-data'), '2,500+');
    updateInnerHtml(document.querySelector('.springboard-reviews-container .review:first-child .review-data'), '4.8');
    updateInnerHtml(document.querySelector('.springboard-reviews-container .review:first-child .review-for'), 'Based on 395 reviews');
    updateInnerHtml(document.querySelector('.springboard-reviews-container .review:last-child .review-for'), '*For Data Science program students');
    
    updateInnerHtml(document.querySelector('.explore-programs-container .header-container .title'), 'Explore our job <span>focused programs</span>');
    updateInnerHtml(document.querySelector('.job-guarantee-container h3.title'), 'A proven approach to landing your <span>dream job</span>');
    updateInnerHtml(document.querySelector('.support-network-container h3.title'), 'Work with a team that’s </br> <span>invested in your success</span>');
    updateInnerHtml(document.querySelector('.industry-mentor-container  h3.title'), 'Learn 1-on-1, from an </br> <span>industry insider.</span>');
    updateInnerHtml(document.querySelector('.career-container h3.title'), 'Get set up for<span>job success</span> </br> from the start');
    updateInnerHtml(document.querySelector('#Financing .jDwoSa'), 'Our<span>payment options</span>');
    updateInnerHtml(document.querySelector('.build-network-container h3.title'), 'Build your<span>professional network</span>');
    updateInnerHtml(document.querySelector('h3.styles__Title-sc-1pu81u5-2.buEpwR'), 'Ready to<span>advance your career?</span>');
    vwo_$("body").vwoCss({"visibility":"visible !important"});
  }
  //update inner html 
  function updateInnerHtml(ele, value) {
    if (ele) {
      ele.innerHTML = value;
    }
  }
  function updateHeroImage(){
	  var heroImage = '<div class="hero-image"><img src="https://res.cloudinary.com/springboard-images/image/upload/fl_lossy,q_auto/vwo-exp-assets/Spring-76/Microsoft_logo.svg" alt="Microsoft Logo"></div>';
  	  if(!document.querySelector('.fe-data-analytics-career-track-page [class^="styles__HeroWrapper"] .hero-image')){
		document.querySelector('.fe-data-analytics-career-track-page [class^="styles__HeroWrapper"] .content').insertAdjacentHTML('afterend', heroImage);
  	  }
  }
  // Course Page Image
var FEHeroImage = ''+
'<div class="fe-banner-img">'+
'<img src="https://res.cloudinary.com/springboard-images/image/upload/v1651061588/vwo-exp-assets/Sping-14/Hero-Image.webp">'+
'</div>';
var feLogosSos =''+ 
'  <picture>'+ 
'      <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.webp 3x, "'+ 
'          type="image/webp" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.webp 3x, ">'+ 
'      <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.jpg 3x, "'+ 
'          type="image/jpg" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.jpg 3x, ">'+ 
'      <img class=" lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_auto,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.webp" data-src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_auto,fl_lossy/v1595403758/homepage-assets/career-tracks/sp-uxc/meet-alumni/uxc-facebook.webp">'+ 
'  </picture>'+ 
'  <picture>'+ 
'      <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/Airbnb_SOS.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/Airbnb_SOS.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/Airbnb_SOS.webp 3x, "'+ 
'          type="image/webp" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/Airbnb_SOS.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/Airbnb_SOS.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/Airbnb_SOS.webp 3x, ">'+ 
'      <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/Airbnb_SOS.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/Airbnb_SOS.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/Airbnb_SOS.jpg 3x, "'+ 
'          type="image/jpg" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/Airbnb_SOS.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/Airbnb_SOS.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/Airbnb_SOS.jpg 3x, ">'+ 
'      <img class=" lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_auto,fl_lossy/v1653665702/Airbnb_SOS.webp" data-src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_auto,fl_lossy/v1653665702/Airbnb_SOS.webp">'+ 
'  </picture>'+ 
'  <picture>'+ 
'      <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.webp 3x, "'+ 
'          type="image/webp" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.webp 3x, ">'+ 
'      <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.jpg 3x, "'+ 
'          type="image/jpg" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.jpg 3x, ">'+ 
'      <img class=" lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_auto,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.webp" data-src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_auto,fl_lossy/v1653665702/2000px-Google_2015_logo.svg.webp">'+ 
'  </picture>'+ 
'  <picture>'+ 
'      <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.webp 3x, "'+ 
'          type="image/webp" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.webp 3x, ">'+ 
'      <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.jpg 3x, "'+ 
'          type="image/jpg" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.jpg 3x, ">'+ 
'      <img class=" lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_auto,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.webp" data-src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_auto,fl_lossy/v1653665702/LinkedIn%20Logo-SOS.webp">'+ 
'  </picture>'+ 
'  <picture>'+ 
'      <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/Nike_SOS.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/Nike_SOS.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/Nike_SOS.webp 3x, "'+ 
'          type="image/webp" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/Nike_SOS.webp 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/Nike_SOS.webp 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/Nike_SOS.webp 3x, ">'+ 
'      <source media="(min-width: 322px)" data-srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/Nike_SOS.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/Nike_SOS.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/Nike_SOS.jpg 3x, "'+ 
'          type="image/jpg" srcset="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_1.0,fl_lossy/v1653665702/Nike_SOS.jpg 1x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_2.0,fl_lossy/v1653665702/Nike_SOS.jpg 2x, https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_3.0,fl_lossy/v1653665702/Nike_SOS.jpg 3x, ">'+ 
'      <img class=" lazyloaded" src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_auto,fl_lossy/v1653665702/Nike_SOS.webp" data-src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,h_45,q_auto,dpr_auto,fl_lossy/v1653665702/Nike_SOS.webp">'+ 
'  </picture>';
  //update course page data 
  function updateCourse(){
    if(window.location.pathname === '/courses/data-science-career-track/' || window.location.pathname === '/courses/data-science-career-track') {
       updateInnerHtml(document.querySelector('#syllabus h5'), "What you'll learn");
    updateInnerHtml(document.querySelector('#pricing h5'), "Pricing");
    updateInnerHtml(document.querySelector('#pricing .description p'), 'Get a full refund within 7 days if you’re not happy with the course. If you don’t get a job within 6 months of completion, you’ll receive a full refund. <strong><a href="https://www.springboard.com/archeio/download/ed470f14c94842bbba62d51d1ebb55f9/">See job guarantee eligibility terms</a></strong>');
    }
   
    if(window.location.pathname === '/outcomes/' || window.location.pathname === '/outcomes') {
      updateInnerHtml(document.querySelector('.phpnv'), 'Ready to<span> take the next step?</span>');
    }
    if(window.location.pathname === '/mentors' || window.location.pathname === '/mentors/') {
      updateInnerHtml(document.querySelector('.phpnv'), 'Ready to<span> take the next step?</span>');
    }
    if(window.location.pathname === '/courses/ui-ux-design-career-track-uk' || window.location.pathname === '/courses/ui-ux-design-career-track-uk/') {
      updateInnerHtml(document.querySelector('#pricing .header'),'Tuition');        
    }
    
    if(window.location.pathname === '/courses/digital-marketing-professional-certificate/' || window.location.pathname === '/courses/digital-marketing-professional-certificate') {
      
      updateInnerHtml(document.querySelector('#hero .content .summary'), '8-weeks • 100% online • 1-on-1 mentorship');
      updateInnerHtml(document.querySelector('#courseStart .enrollmentCard:nth-of-type(2) .cardText'), 'Deadline for enrollments');
      updateInnerHtml(document.querySelector('#courseStart .footerText'), 'Enrollments deadline is in');
  
      updateInnerHtml(document.querySelector('.emailFormWrapper .cta-button'), 'Enroll Now');
    }
    if(window.location.pathname === '/courses/ux-career-track/' || window.location.pathname === '/courses/ux-career-track') {
      updateInnerHtml(document.querySelector('html body.fe-course-page.fe-uxc-page #hero .description'), 'Learn UX design. Build a unique portfolio. Land your dream design role.');
    }
    
    if(window.location.pathname === '/courses/social-media-marketing-professional-certificate/' || window.location.pathname === '/courses/social-media-marketing-professional-certificate') {
      updateInnerHtml(document.querySelector('html body.fe-course-page.fe-social-media-marketing-page #hero .summary'), '8-weeks • 100% online • 1-on-1 mentorship');
      updateInnerHtml(document.querySelector('#CTA .bulletPoint:nth-child(1) span'), 'Access to the 60-hour curated curriculum');
      updateInnerHtml(document.querySelector('#secondaryNav + #logos .logos-container'), feLogosSos);
      
    }
        if(window.location.pathname === '/courses/backend-development-java-career-track/' || window.location.pathname === '/courses/backend-development-java-career-track' || window.location.pathname === '/courses/digital-marketing-career-track/' || window.location.pathname === '/courses/digital-marketing-career-track' || window.location.pathname === '/courses/ui-ux-design-career-track-uk/' || window.location.pathname === '/courses/ui-ux-design-career-track-uk') {
      updateInnerHtml(document.querySelector('.applicationFormWrapper p.description'), 'Join 10,000+ learners <img src="https://res.cloudinary.com/springboard-images/image/upload/q_auto,dpr_auto,fl_lossy/v1/homepage-assets/new-homepage/team-stripe.webp">');
      
      updateInnerHtml(document.querySelector('#CTA .applicationFormWrapper .preFooterText'), 'Spots are limited, and we accept qualified applicants on a first come, first served basis.');
      
      updateInnerHtml(document.querySelector('#CTA .applicationFormWrapper .footerText'), 'The application is free and takes just 5 minutes to complete.');
    }
    if(window.location.pathname === '/courses/cyber-security-career-track/'){
	  updateInnerHtml(document.querySelector('.fe-csc-page #Tuition .description > p'), 'The full tuition of the program is $11,340. If you don\’t get a job within 6 months of completion, you\’ll receive a full refund. Read the full Job Guarantee eligibility terms and conditions <a href="https://www.springboard.com/archeio/download/a12793ff07c7442d99f93b1c9bceeca8/">here</a>');
    }
    // if(window.location.pathname === '/courses/ux-career-track/' || window.location.pathname === '/courses/ux-career-track') {
    //   updateInnerHtml(document.querySelector('#mentors .dzRYSV:nth-child(1) h3.gIjJBg'), 'Matched to suit your goals and schedule');  
    //   updateInnerHtml(document.querySelector('#mentors .dzRYSV:nth-child(2) h3.gIjJBg'), 'You set the agenda');  
    //   updateInnerHtml(document.querySelector('#mentors .dzRYSV:nth-child(3) h3.gIjJBg'), 'On-demand mentors');  
    // }
        vwo_$("body").vwoCss({"visibility":"visible !important"});
  }
  // function updateWork(){
  //   updateInnerHtml(document.querySelector('#Career + div .phpnv'), 'Ready to<span>advance your career?</span>');
  //   updateInnerHtml(document.querySelector('.jqxRMJ + .kXbQKd .phpnv'), 'Ready to<span>advance your career?</span>');
  // }
  createCookie('spring-14', true, 365);
  // Window object
      if (debugMode) console.log("init");
      try {
        if (window.location.pathname === '/') {
          FEHelper.onLoadElement('.hero-banner-container', init, 10, 20000);
        }
        else {
          FEHelper.onLoadElement('#syllabus h5, #comparisonTable, #application, .linkSectionsWrapper', initCourse, 10, 20000);
        }
        FEHelper.onLoadElement('body', preLoad, 10, 15000);
      } catch (err) {
        if (debugMode) console.log(err.message, "Error in Spring14");
      }
    //if(!window.listenerAdded){
      listener();
    //  window.listenerAdded = true
    //}
})();
setTimeout(function() {
	vwo_$("body").vwoCss({"visibility":"visible !important"});
}, 5000);
