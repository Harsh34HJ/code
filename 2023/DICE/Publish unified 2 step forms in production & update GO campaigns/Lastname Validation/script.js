/* -- -- - -------- merge ---------------- */

(function () {
    var FEHelper = {
        // Wait for element
        onLoadElement: function (selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (document && document.querySelectorAll(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        },
        waitforMarketo: function (trigger) {
            var interval = setInterval(function () {
                if (window.MktoForms2) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 10000);
        },
        insertBefore: function (reference_selector, inserting_selector) {
            var reference_element = document.querySelector(reference_selector);
            var inserting_element = document.querySelector(inserting_selector);
            reference_element.parentNode.insertBefore(inserting_element, reference_element);
        },
    };

    var step = 1;
    var isEmailValid = false;
    var isLastNameValid = false;
    var modifyForm = {
        addClass: function (formLabel) {
            for (var i = 0; i < formLabel.length; i++) {
                if (i <= 2) {
                    formLabel[i].closest(".mktoFormRow").classList.add("fe_step1");
                    formLabel[i].closest(".mktoFormRow").classList.add("fe_show"); // show step1 field
                } else {
                    formLabel[i].closest(".mktoFormRow").classList.add("fe_step2");
                }
            }
        },
        removeError: function (formRow) {
            setTimeout(() => {
                for (var i = 0; i < formRow.length; i++) {
                    if (formRow[i].querySelector(".mktoError") != null) {
                        formRow[i].querySelector(".mktoError").remove();
                        formRow[i].querySelector("input").blur();
                    }
                }
            }, 20);
        },
        changeButtonText: function () {
            var btn = document.querySelector("form button[type='submit']");
            if (step === 1) {
                btn.textContent = "Continue";
            } else {
                btn.textContent = "GET IN TOUCH";
                document.querySelector(".multi-step-bm-form-heading").classList.add("step1Complete");
            }
        },
        showSecondStep: function (formLabel) {
            for (var i = 0; i < formLabel.length; i++) {
                var field = formLabel[i].closest(".mktoFormRow");
                if (field.classList.contains("fe_step1")) {
                    field.classList.remove("fe_show", )
                } else {
                    field.classList.add("fe_show");
                }
            }
        },
        checkFieldValidate: function (steps) {
            for (var i = 0; i < steps.length; i++) {
                var input = steps[i].querySelector("input");
                if (input.classList.contains("mktoInvalid") || input.value.length === 0) {
                    return false;
                }
            }
            return true;
        },
        triggerNextStep: function (steps, formRow, formLabel) {
            setTimeout(function () {
                var isValid = modifyForm.checkFieldValidate(steps);
                if (isValid && step === 1 && isEmailValid && isLastNameValid) {
                    modifyForm.removeError(formRow);
                    modifyForm.showSecondStep(formLabel);
                    // control CTA hidden here to
                    TrackGAEvent("funnelenvy", "click", "Email Entered");
                    TrackGAEvent("GA_Step_1_complete", "GA-Clicks", "Step_1_complete");
                    // FEHelper.fePushEvents('DICE-28: Step One Complete');
                    step++;
                    // control cta click for next step
                    document.querySelector(".multi-step-step1-btn").click();
                    modifyForm.changeButtonText();
                    document.querySelector("#additionalLink1").style.display = "none";
                    //move privacy policy section
                    //FEHelper.insertBefore(".fe-job-seeker", ".sales-form-wrapper .privacy-policy");
                    // document.querySelector(".sales-form-wrapper .privacy-policy").style.display = "block";
                }
            }, 50);
        },
        validateEmail: function (form) {
            var emailElem = form.getFormElem().find("#Email");
            var excludeEmail = [
                "gmail",
                "yahoo",
                "hotmail",
                "aol",
                "me",
                "icloud",
                "comcast",
                "msn",
                "att",
                "ios",
                "outlook",
                "inbox",
                "mail",
                "hotmail",
                "live",
                "verizon",
                "bellsouth",
                "charter",
                "earthlink",
                "mac",
                "cox",
                "email",
                "cloudassociates",
                "ril",
                "work",
                "w",
                "gmai",
                "microsoft",
                "ail",
                "suddenlink",
                "ymail",
                "asdasd",
                "abc",
                "ya",
                "yah",
                "ccb",
                "aa",
                "aim",
            ];
            var vals = form.vals();
            var str = vals.Email.split("@").pop();
            var domain = str.slice(0, str.indexOf("."));
            if (excludeEmail.indexOf(domain.toLowerCase()) != -1) {
                form.showErrorMessage("Must be valid work email. example@yourdomain.com", emailElem);
                isEmailValid = false;
            } else {
                isEmailValid = true;
            }
        },
        validateLastName: function (form) {
            var lastName = form.getFormElem().find("#LastName");
            var vals = form.vals();
            var str = vals.LastName
            str = String(str)
            str = str.split('')
            if (str && str.length == 1) {
                form.showErrorMessage("Must be a valid last name.", lastName);
                isLastNameValid = false;
            } else if (str && str.length < 1) {
                form.showErrorMessage("This field is required.", lastName);
                isLastNameValid = false;
            } else {
                isLastNameValid = true;
            }
        }
    };

    var companyHTML =
        "" +
        '  <div class="image-tiles container pt-2">' +
        '      <div class="row">' +
        '          <div class="col">' +
        '              <h2 class="bm_heading">You\'re in good company. Join the thousands of top companies using Dice.</h2>' +
        "          </div>" +
        "      </div>" +
        '      <div class="full-width-line"></div>' +
        '      <div class="row">' +
        '          <div class="col-6 col-lg-2 img-tile has-edit-button">' +
        '              <img src="https://www.dice.com/binaries/content/gallery/dice/leadgen/logos/dell.svg" alt="" height="100px">' +
        "          </div>" +
        '          <div class="col-6 col-lg-2 img-tile has-edit-button">' +
        '              <img src="https://www.dice.com/binaries/content/gallery/dice/leadgen/logos/charles_schwab_corporation_logo.svg" alt="" height="100px">' +
        "          </div>" +
        '          <div class="col-12 col-lg-4 img-tile has-edit-button">' +
        '              <img src="https://www.dice.com/binaries/content/gallery/dice/leadgen/logos/united-health-group.svg" alt="" height="100px">' +
        "          </div>" +
        '          <div class="col-6 col-lg-2 img-tile has-edit-button">' +
        '              <img src="https://www.dice.com/binaries/content/gallery/dice/leadgen/logos/chase-bank-logo-1527027880.png" alt="" height="100px">' +
        "          </div>" +
        '          <div class="col-6 col-lg-2 img-tile has-edit-button">' +
        '              <img src="https://www.dice.com/binaries/content/gallery/dice/leadgen/logos/bah.png" alt="" height="100px">' +
        "          </div>" +
        "      </div>" +
        "  </div>";

    // form heading
    var formheading =
        "" +
        '  <div class="bm_form_heading">' +
        '      <h3 class="">Let\'s Get Started</h3>' +
        '      <p class="bm_form_para">Contact Us for solutions based on your needs.</p>' +
        '         <div class="StepsSection_bar">' +
        '           <span class="step1">1</span>' +
        '           <span class="step2">2</span>' +
        '           <span class="progressBar"></span>' +
        "         </div>" +
        "  </div>";

    var sectionHtml = "" + '  <div class="bmhero_img">' + '      <div class="bm_hero_background"></div>' + "  </div>";

    // left column insert
    var leftcolumn =
        "" +
        '  <div class="static-page-header-wrap">' +
        '      <div class="row">' +
        '          <div class="col-md-10">' +
        "          </div>" +
        "      </div>" +
        '      <div class="static-page-content-wrapper">' +
        '          <div class="static-page-content">' +
        '              <h3 class="bm_left_heding">CONNECT WITH OUR COMMUNITY OF<br /> 9 MILLION QUALITY TECHNOLOGISTS</h3>' +
        '              <p class="bm_left_para"><strong>Our customizable solutions allow you to:</strong></p>' +
        '              <p class="bm_left_para para-img"><img src="https://www.dice.com/binaries/content/gallery/dice/leadgen/icons/red-arrow.png">&nbsp;Post jobs to millions of unique, qualified candidates</p>' +
        '              <p class="bm_left_para para-img"><img src="https://www.dice.com/binaries/content/gallery/dice/leadgen/icons/red-arrow.png">&nbsp;Boost attention to your job postings with branding solutions</p>' +
        '              <p class="bm_left_para para-img"><img src="https://www.dice.com/binaries/content/gallery/dice/leadgen/icons/red-arrow.png">&nbsp;Find talent quickly with access to our database of technologists</p>' +
        '              <p class="bm_left_para para-img"><img src="https://www.dice.com/binaries/content/gallery/dice/leadgen/icons/red-arrow.png">&nbsp;Reach talent fast with prescreened candidates delivered to you</p>' +
        '              <p class="bm_left_para para-img"><img src="https://www.dice.com/binaries/content/gallery/dice/leadgen/icons/red-arrow.png">&nbsp;Connect, interview & hire with confidence and efficiency</p>' +
        '              <p class="bm_left_para para-img"><img src="https://www.dice.com/binaries/content/gallery/dice/leadgen/icons/red-arrow.png">&nbsp;Source and screen top talent through our dedicated team</p>' +
        "          </div>" +
        "      </div>" +
        "  </div>";

    var formTile =
        "" +
        '  <div class="bm_form_heading">' +
        '   <div class="StepsSection_bar">' +
        '     <span class="step1">1</span>' +
        '     <span class="step2">2</span>' +
        '     <span class="progressBar"></span>' +
        "   </div>" +
        "  </div>";
    var jobSeeker =
        '<div class= "fe-job-seeker">Job Seeker? <a target="_blank" href="https://www.dice.com/register"> Register here</a>' +
        '<br>Need support? Email us:<a href="mailto:support@dice.com"><span>support@dice.com</span></a></div>';

    function addContentDICE32() {
        // if(document.querySelector('.bm_form_heading') != null) {
        //   document.querySelector('.bm_form_heading').remove();
        // }
        //;
    }

    function addContentDICE39() {
        document.querySelector("html body .sales-form-wrapper").insertAdjacentHTML("beforebegin", sectionHtml);

        //left column insert
        document.querySelector("html body .sales-form-wrapper").insertAdjacentHTML("afterbegin", leftcolumn);

        // insert company section
        document.querySelector(".footer-logos-wrapper").insertAdjacentHTML("beforeend", companyHTML);

        //jobseeler section inserted
        document.querySelector("#sales-form").insertAdjacentHTML("beforeend", jobSeeker);

        // FEHelper.waitforMarketo(function() {
        //   MktoForms2.whenReady(function (form) {
        //     if(form.getId() == 3076) {
        //       // change button text
        //       modifyForm.changeButtonText();
        //       // form label
        //       var formLabel = document.querySelectorAll(".sales-form-holder form label");
        //       // addClass to form row
        //       modifyForm.addClass(formLabel);
        //       // visible form field
        //       var steps = document.querySelectorAll(".sales-form-holder form .mktoFormRow.fe_show");
        //       // form field
        //       var formRow = document.querySelectorAll(".sales-form-holder form .mktoFormRow");
        //       document.querySelector(".sales-form-holder form button[type='submit']").addEventListener("click", function () {
        //         // triggering multistep
        //         setTimeout(function() {
        //           modifyForm.validateEmail(form);
        //           modifyForm.triggerNextStep(steps, formRow, formLabel);
        //         }, 500)
        //       });
        //     }
        //   });
        // });
    }

    // function addContentDICE29() {
    //   document.querySelector('html body .sales-form-wrapper').insertAdjacentHTML('beforebegin', sectionHtml);

    //   //left column insert
    //   document.querySelector('.sales-form-wrapper .sales-form-inner .column-left .sidebar').insertAdjacentHTML('beforebegin', leftcolumn)

    //   document.querySelector('html body .sales-form-wrapper .column-right .sales-form-holder').insertAdjacentHTML('afterbegin', formheading);
    //   // insert company section
    //   document.querySelector('.footer-logos-wrapper').insertAdjacentHTML('beforeend', companyHTML);

    //   FEHelper.waitforMarketo(function() {
    //     MktoForms2.whenReady(function (form) {
    //       if(form.getId() == 3076) {
    //         // change button text
    //         modifyForm.changeButtonText();
    //         // form label
    //         var formLabel = document.querySelectorAll(".sales-form-holder form label");
    //         // addClass to form row
    //         modifyForm.addClass(formLabel);
    //         // visible form field
    //         var steps = document.querySelectorAll(".sales-form-holder form .mktoFormRow.fe_show");
    //         // form field
    //         var formRow = document.querySelectorAll(".sales-form-holder form .mktoFormRow");
    //         document.querySelector(".sales-form-holder form button[type='submit']").addEventListener("click", function () {
    //           // triggering multistep
    //           setTimeout(function() {
    //             modifyForm.validateEmail(form);
    //             modifyForm.triggerNextStep(steps, formRow, formLabel);
    //           }, 500)
    //         });
    //       }
    //     });
    //   });
    // }

     //  document.addEventListener('DOMContentLoaded', function () {
        // DOM manipulation and other code here
        var interval = setInterval(function () {
            var element = document.querySelector(".mktoForm");
            //console.log('out',element)
            if (element && !document.querySelector(".mktoForm input").value.length == 0) {
             //   console.log(element)
                element.reset();
                setTimeout(function () {
                    clearInterval(interval);
                }, 1500);
            }

        }, 500);
    //});

    function multiStepHandler() {
        //if (document.querySelector("html body .sales-form-wrapper .sales-form-inner .sales-form-holder") != null) {
        //  document
        //    .querySelector("html body .sales-form-wrapper .sales-form-inner .sales-form-holder")
        //    .insertAdjacentHTML("afterbegin", formheading);
        //} else {
        //  document.querySelector('form[id*="mktoForm"]').insertAdjacentHTML("beforebegin", formTile);
        //}

        FEHelper.waitforMarketo(function () {

            MktoForms2.whenReady(function (form) {
                if (true) {
                    if (document.querySelector(".multi-step-step1-btn") != null) {
                        document.querySelector(".multi-step-step1-btn").style.display = "none";
                    }
                    // change button text
                    modifyForm.changeButtonText();
                    // form label
                    var formLabel = document.querySelectorAll("form[id*='mktoForm'] .mktoFormRow label");
                    // addClass to form row
                    modifyForm.addClass(formLabel);
                    // visible form field
                    var steps = document.querySelectorAll("form[id*='mktoForm'] .mktoFormRow.fe_show");
                    // form field
                    var formRow = document.querySelectorAll("form[id*='mktoForm'] .mktoFormRow");
                    document.querySelector("form[id*='mktoForm'] button[type='submit']").addEventListener("click", function () {
                        // triggering multistep
                        setTimeout(function () {
                            modifyForm.validateEmail(form);
                            modifyForm.validateLastName(form);
                            modifyForm.triggerNextStep(steps, formRow, formLabel);
                        }, 500);
                    });

                    form.onSuccess(function () {
                        TrackGAEvent("GA_Step_2_complete", "GA-Clicks", "Step_2_complete");
                        resetFormAndPushState()
                    });
                }
            });
        });
    }

    function TrackGAEvent(eventCategory, eventAction, eventLabel) {
        if ("ga" in window) {
            ga.getAll()[0].send("event", {
                eventCategory: eventCategory,
                eventAction: eventAction,
                eventLabel: eventLabel,
            });
        }
    }

    // if (window.location.pathname == "/hiring/contact-us/" || window.location.pathname == "/hiring/contact-us") {
    //   FEHelper.onLoadElement(
    //     ".media-body .marketo-intro h3 + p",
    //     function () {
    //       var para = document.querySelector(".media-body .marketo-intro h3 + p");
    //       para.innerHTML = "Contact Us for solutions based on your needs.";
    //     },
    //     50,
    //     25000
    //   );
    // }

    // FEHelper.onLoadElement("form", addContentDICE32, 50, 25000);
    // FEHelper.onLoadElement("html body .sales-form-holder", addContentDICE39, 50, 25000);
    FEHelper.onLoadElement('html body form[id*="mktoForm"]', multiStepHandler, 50, 25000);
})();