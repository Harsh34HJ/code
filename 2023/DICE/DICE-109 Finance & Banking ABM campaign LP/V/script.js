(function() {
    'use strict';
    var shared = {
        ID: "financebanking",
        VARIATION: "1",
        CLIENT: "Dice",
        FORMURL: "//app-sjg.marketo.com",
        FORMCODE: "318-VQK-428",
        FORMID: "4480",
        TYURL: "/hiring/contact-us/thank-you",
        VIDEOLINK: "https://player.vimeo.com/video/832399342?h=ec51b3bfc7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    };
    var step = 1;
    var isEmailValid = false;
    var isFirstNameValid = false;
    var isLastNameValid = false;
    const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6893 5.93934C16.2751 5.35355 17.2249 5.35355 17.8107 5.93934L26.8107 14.9393C27.3964 15.5251 27.3964 16.4749 26.8107 17.0607L17.8107 26.0607C17.2249 26.6464 16.2751 26.6464 15.6893 26.0607C15.1036 25.4749 15.1036 24.5251 15.6893 23.9393L22.1287 17.5H6.25C5.42157 17.5 4.75 16.8284 4.75 16C4.75 15.1716 5.42157 14.5 6.25 14.5H22.1287L15.6893 8.06066C15.1036 7.47487 15.1036 6.52513 15.6893 5.93934Z" fill="#4D7880"/></svg>`;

    const bulletIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="26" viewBox="0 0 48 26" fill="none"><path d="M5.13 0.910156L0 25.0902H9.93L15.06 0.910156H5.13Z" fill="#CC0000"/><path d="M21.1901 0.910156L16.0601 25.0902H25.9901L31.1201 0.910156H21.1901Z" fill="#1C4A50"/><path d="M37.2501 0.910156L32.1201 25.0902H42.0501L47.1801 0.910156H37.2501Z" fill="#BFD3D7"/></svg>`;

    const heartIcon = `<svg class="heart-logo" xmlns="http://www.w3.org/2000/svg" width="65" height="35" viewBox="0 0 65 35" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M60.7215 0H9.85604C8.85379 0.000167147 7.89264 0.396343 7.18395 1.10141C6.47525 1.80647 6.07704 2.7627 6.07687 3.75981L6.07053 26.9188C6.07497 26.9522 6.07687 26.985 6.07687 27.0184C6.07687 30.4271 3.69556 33.2835 0.5 34.0426H60.7215C61.7237 34.0421 62.6846 33.6457 63.3932 32.9405C64.1017 32.2354 64.4998 31.2792 64.5 30.2821V3.75981C64.4998 2.76281 64.1017 1.80668 63.3931 1.10163C62.6846 0.396583 61.7236 0.00033427 60.7215 0Z" fill="#BE3432"/><path d="M42.2216 9.50953C38.3641 5.87067 33.8571 10.8091 33.8571 10.8091C33.8571 10.8091 29.3502 5.87067 25.4927 9.50953C19.9918 14.7079 27.9922 24.065 33.8571 25.874C39.7221 24.013 47.7421 14.7079 42.2216 9.50953Z" fill="white"/></svg>`;

    const modifyForm = {
        addClass: function(formLabel) {
            for (var i = 0; i < formLabel.length; i++) {
                if (i <= 2) {
                    formLabel[i].closest(".mktoFormRow").classList.add("fe_step1");
                    formLabel[i].closest(".mktoFormRow").classList.add("fe_show");
                } else {
                    formLabel[i].closest(".mktoFormRow").classList.add("fe_step2");
                }
            }
        },
        removeError: function(formRow) {
            setTimeout(() => {
                for (var i = 0; i < formRow.length; i++) {
                    if (formRow[i].querySelector(".mktoError") != null) {
                        formRow[i].querySelector(".mktoError").remove();
                        formRow[i].querySelector("input").blur();
                    }
                }
            }, 20);
        },
        changeButtonText: function() {
            var btn = document.querySelector("form button[type='submit']");
            if (step === 1) {
                btn.textContent = "Continue";
            } else {
                btn.textContent = "Submit";
            }
        },
        showSecondStep: function(formLabel) {
            for (var i = 0; i < formLabel.length; i++) {
                var field = formLabel[i].closest(".mktoFormRow");
                if (field.classList.contains("fe_step1")) {
                    field.classList.remove("fe_show");
                } else {
                    field.classList.add("fe_show");
                    document.querySelector('.mktoForm').classList.add('fe-form-step2');
                    if (document.querySelector('.mktoForm').classList.contains('fe-form-step1')) {
                        document.querySelector('.mktoForm').classList.remove('fe-form-step1');
                    }
                }
            }
        },
        checkFieldValidate: function(steps) {
            for (var i = 0; i < steps.length; i++) {
                var input = steps[i].querySelector("input");
                if (input.classList.contains("mktoInvalid") || input.value.length === 0) {
                    return false;
                }
            }
            return true;
        },
        triggerNextStep: function(steps, formRow, formLabel) {
            setTimeout(function() {
                var isValid = modifyForm.checkFieldValidate(steps);
                if (isValid && step === 1 && isFirstNameValid && isEmailValid && isLastNameValid) {
                    modifyForm.removeError(formRow);
                    modifyForm.showSecondStep(formLabel);
                    step++;
                    modifyForm.changeButtonText();
                    document.querySelector('.hero-wrap .step-wrap .current-step').innerHTML = step;
                }
            }, 50);
        },
        triggerBackStep: function(steps, formLabel) {
            setTimeout(function() {
                step--;
                document.querySelector('.hero-wrap .step-wrap .current-step').innerHTML = step;
                for (var i = 0; i < formLabel.length; i++) {
                    var field = formLabel[i].closest(".mktoFormRow");
                    if (field.classList.contains("fe_step2")) {
                        field.classList.remove("fe_show");
                    } else {
                        field.classList.add("fe_show");
                        document.querySelector('.mktoForm').classList.add('fe-form-step1');
                        if (document.querySelector('.mktoForm').classList.contains('fe-form-step2')) {
                            document.querySelector('.mktoForm').classList.remove('fe-form-step2');
                        }
                    }
                }
                // trackGAEvents('click', 'Back_button');
            }, 50);
        },
        validateEmail: function(form) {
            var emailElem = form.getFormElem().find("#Email");
            var excludeEmail = ["gmail", "yahoo", "hotmail", "aol", "me", "icloud", "comcast", "msn", "att", "ios", "outlook", "inbox", "mail", "hotmail", "live", "verizon", "bellsouth", "charter", "earthlink", "mac", "cox", "email", "cloudassociates", "ril", "work", "w", "gmai", "microsoft", "ail", "suddenlink", "ymail", "asdasd", "abc", "ya", "yah", "ccb", "aa", "aim"];
            var vals = form.vals();
            var str = vals.Email.split("@").pop();
            var domain = str.slice(0, str.indexOf("."));
            if (excludeEmail.indexOf(domain.toLowerCase()) != -1 || !validateEmail(vals.Email)) {
                if (emailElem.hasClass('mktoValid')) {
                    emailElem.removeClass('mktoValid').addClass('mktoInvalid');
                }
                form.showErrorMessage("Must be valid work email. example@yourdomain.com", emailElem);
                isEmailValid = false;
            } else {
                isEmailValid = true;
            }
        },
        validateFirstName: function(form) {
            var firstName = form.getFormElem().find("#FirstName");
            var vals = form.vals();
            var str = vals.FirstName;
            str = String(str);
            str = str.split('');
            if (str && str.length == 1) {
                if (firstName.hasClass('mktoValid')) {
                    firstName.removeClass('mktoValid').addClass('mktoInvalid');
                }
                form.showErrorMessage("Must be a valid first name.", firstName);
                isFirstNameValid = false;
            } else if (str && str.length < 1) {
                if (firstName.hasClass('mktoValid')) {
                    firstName.removeClass('mktoValid').addClass('mktoInvalid');
                }
                form.showErrorMessage("This field is required.", firstName);
                isFirstNameValid = false;
            } else {
                isFirstNameValid = true;
            }
        },
        validateLastName: function(form) {
            var lastName = form.getFormElem().find("#LastName");
            var vals = form.vals();
            var str = vals.LastName;
            str = String(str);
            str = str.split('');
            if (isFirstNameValid) {
                if (str && str.length == 1) {
                    if (lastName.hasClass('mktoValid')) {
                        lastName.removeClass('mktoValid').addClass('mktoInvalid');
                    }
                    form.showErrorMessage("Must be a valid last name.", lastName);
                    isLastNameValid = false;
                } else if (str && str.length < 1) {
                    if (lastName.hasClass('mktoValid')) {
                        lastName.removeClass('mktoValid').addClass('mktoInvalid');
                    }
                    form.showErrorMessage("This field is required.", lastName);
                    isLastNameValid = false;
                } else {
                    isLastNameValid = true;
                }
            }
        },
    };

    const addFileToSite = (filePath) => {
        const fileExtension = filePath.slice(filePath.lastIndexOf('.') + 1);
        if (!['js', 'css'].includes(fileExtension)) {
            console.error(`Error: unsupported file type for file path ${filePath}`);
            return;
        }
        const fileElement = fileExtension === 'js' ? document.createElement('script') : document.createElement('link');
        if (fileExtension === 'js') {
            fileElement.src = filePath;
            fileElement.type = 'module';
        } else {
            fileElement.rel = 'stylesheet';
            fileElement.type = 'text/css';
            fileElement.href = filePath;
        }
        fileElement.onerror = () => {
            console.error(`Error loading file: ${filePath}`);
        };
        document.head.appendChild(fileElement);
    };

    const addJsToPage = (src, id, cb, classes) => {
        if (document.querySelector(`#${id}`)) {
            return;
        }

        const s = document.createElement('script');
        if (typeof cb === 'function') {
            s.onload = cb;
        }

        if (classes) {
            s.className = classes;
        }

        s.type = 'text/javascript';
        s.src = src;
        s.setAttribute('id', id);
        document.body.appendChild(s);
    };

    const pollerLite = (conditions, callback, maxTime = 10000) => {
        const POLLING_INTERVAL = 25;
        const startTime = Date.now();
        const interval = setInterval(() => {
            const allConditionsMet = conditions.every((condition) => {
                if (typeof condition === 'function') {
                    return condition();
                }
                return !!document.querySelector(condition);
            });
            if (allConditionsMet) {
                clearInterval(interval);
                callback();
            } else if (Date.now() - startTime >= maxTime) {
                clearInterval(interval);
                console.error('Polling exceeded maximum time limit');
            }
        }, POLLING_INTERVAL);
    };

    const changeCssProperty = (shadowRoot, selector, property, value) => {
        const element = shadowRoot.querySelector(selector);
        if (element) {
            element.style.setProperty(property, value);
        }
    };

    const onLoadMktoForms2 = (trigger, delayInterval, delayTimeout) => {
        var intervalForMktoForms2 = setInterval(() => {
            // if (typeof window.MktoForms2 != "undefined") {
            if (typeof window.dhi != "undefined" && typeof window.MktoForms2 != "undefined") {
                clearInterval(intervalForMktoForms2);
                trigger();
            }
        }, delayInterval);
        setTimeout(() => {
            clearInterval(intervalForMktoForms2);
        }, delayTimeout);
    };

    const addInputName = (selector) => {
        document.querySelectorAll(selector).forEach((ele) => {
            ele.removeAttribute("input-name");
            if (ele.querySelector('input, select, textarea')) {
                var currentID = ele.querySelector('input, select, textarea').getAttribute('name');
                ele.setAttribute('input-name', 'parent-' + currentID);
            } else {
                ele.setAttribute('input-name', 'parent-noinput');
            }
        });
    };

    const updateFormField = (selector) => {
        document.querySelectorAll(selector).forEach((ele) => {
            if (ele.querySelector('input, select, textarea')) {
                var currentName = ele.querySelector('input, select').getAttribute('name');
                if (currentName == 'FirstName') {
                    currentName = 'First Name';
                }
                if (currentName == 'LastName') {
                    currentName = 'Last Name';
                }
                if (currentName == 'Email') {
                    currentName = 'Email Address';
                }
                if (currentName == 'Phone') {
                    currentName = 'Phone Number';
                }
                if (ele.querySelector('label')) {
                    ele.querySelector('label').innerHTML = currentName + ' <div class="mktoAsterix">*</div>';
                }
                ele.querySelector('input, select').setAttribute('placeholder', currentName);
            }
        });
    };

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

	const trackGAEvents = (action, label) => {
		pollerLite([() => typeof window.ga.getAll === 'function'], () => {
			window.ga.getAll().forEach((tracker) => {
				tracker.send('event', {
				  eventCategory: 'funnelenvy',
				  eventAction: action,
				  eventLabel: label
				});
			});
		});
	};
	
    const setup = () => {
        const {
            ID,
            VARIATION
        } = shared;
        document.documentElement.classList.add(ID);
        document.documentElement.classList.add(`${ID}-${VARIATION}`);
    };

    const primaryCta = (text, link = '#') => {
        return `<dhi-seds-core-button class="section-cta" prominence="primary" sentiment="danger" url="${link}">${text}</dhi-seds-core-button>`;
    };

    const secondaryCta = (text, link = '#') => {
        return `<dhi-seds-core-button class="section-secondary-cta" prominence="secondary" sentiment="danger" url="${link}">${text}</dhi-seds-core-button>`;
    };

    const sectionTitle = (id, title) => {
        return `<dhi-seds-row class="${id}__sectiontitle"><dhi-seds-column size="12"><dhi-seds-typography-heading class="desktop-hide" size="200" weight="bold">${title}</dhi-seds-typography-heading><dhi-seds-typography-heading class="desktop-show" size="250" weight="bold">${title}</dhi-seds-typography-heading></dhi-seds-column></dhi-seds-row>`;
    };

    const heroSection = (id) => {
        const {
            FORMID
        } = shared;
        const companyLogoData = [{
            imgSrc: 'https://fe-test-dev.s3.amazonaws.com/Dice/dice-109/bank-of-america.png',
            altText: 'Bank of America'
        }, {
            imgSrc: 'https://fe-test-dev.s3.amazonaws.com/Dice/dice-109/state-farm.png',
            altText: 'State Farm'
        }, {
            imgSrc: 'https://fe-test-dev.s3.amazonaws.com/Dice/dice-109/capital-one.png',
            altText: 'Capital One'
        }, {
            imgSrc: 'https://fe-test-dev.s3.amazonaws.com/Dice/dice-109/pnc.png',
            altText: 'PNC'
        }, {
            imgSrc: 'https://fe-test-dev.s3.amazonaws.com/Dice/dice-109/northwestern-mutual.png',
            altText: 'Northwestern Mutual'
        }];
        const singleLogoHtml = ({
            imgSrc,
            altText
        }, index) => `<div class="logo-item item-${index + 1}"><img src="${imgSrc}" alt="${altText}"></div>`;
        const heroHtml = `
        <div class="${id}__herosection ${id}__section">
			<dhi-seds-container>
				<dhi-seds-row class="header-wrap">
					<dhi-seds-column size="5" size-lg="10"><dhi-seds-link url="/employer"><dhi-seds-dice-logo prominence="primary"></dhi-seds-dice-logo></dhi-seds-link></dhi-seds-column>
					<dhi-seds-column class="section-cta" size="7" size-lg="2">${secondaryCta('Get Started','#')}</dhi-seds-column>
				</dhi-seds-row>
				<dhi-seds-row class="hero-wrap">
					<dhi-seds-column size="12" size-lg="7">
						<dhi-seds-row>
							<dhi-seds-column size="12" size-lg="12">
								<dhi-seds-typography-display level="h1" class="desktop-show" size="350" weight="bold">Powering finance with the best tech talent</dhi-seds-typography-display>
								<dhi-seds-typography-display level="h1" class="desktop-hide" size="300" weight="bold">Powering finance with the best tech talent</dhi-seds-typography-display>
							</dhi-seds-column>
						</dhi-seds-row>
						<dhi-seds-row>
							<dhi-seds-column size="12">
								<dhi-seds-typography-heading class="desktop-show" size="175" weight="regular" margin="default">To succeed in financial services today, you need top tech professionals — and the right hiring platform to connect you with them.</dhi-seds-typography-heading>
								<dhi-seds-typography-heading class="desktop-hide" size="150" weight="regular" margin="default">To succeed in financial services today, you need top tech professionals — and the right hiring platform to connect you with them.</dhi-seds-typography-heading>
							</dhi-seds-column>
						</dhi-seds-row>
						<dhi-seds-row>
							<dhi-seds-column size="12">
								<dhi-seds-typography-heading class="logo-title" size="150" weight="bold" margin="default">Trusted by top companies</dhi-seds-typography-heading>
								<div class="logo-wrap">
									${companyLogoData.map((data, i) => singleLogoHtml(data, i)).join('\n')}
								</div>
							</dhi-seds-column>
						</dhi-seds-row>
					</dhi-seds-column>
					<dhi-seds-column class="hero-form" size="12" size-lg="5"><div class="multi-step-bm-form-heading"><div class="multi-step-step-sections-bar"><span class="multi-step-step1">1</span><span class="multi-step-step2">2</span><span class="multi-step-progressBar"></span></div></div><form id="mktoForm_${FORMID}"><div class="form-title">Start finding top tech talent!</div><div class="step-wrap">Step <span class="current-step">1</span> of 2</div><div id="disclaimer_${FORMID}" class="disclaimer text-muted text-center mt-4 multi-step-hide"><p>By submitting information I agree to the <a href="/about/privacy-policy" target="_blank">Privacy Policy</a> and <a href="/about/terms-and-conditions" target="_blank">Terms of Use</a>.</p></div></form></dhi-seds-column>
				</dhi-seds-row>
			</dhi-seds-container>
		</div>`;
        return heroHtml;
    };

    const ourFinanceSection = (id) => {
        const sectionData$1 = [{
                title: 'Tech talent for an evolving industry',
                details: 'FinTech. AI. Changing customer demands. Finance is evolving — and Dice is here to help you grow with it.'
            },
            {
                title: 'Branding tools to highlight your unique culture',
                details: 'Dice’s employer branding tools let you highlight your company culture and cutting-edge jobs.'
            },
            {
                title: 'Matches made for your open roles',
                details: 'Filter by factors like desired salary and "likely to switch” to help you find the right people, every time.'
            }
        ];
        const singleListHtml = ({
            title,
            details
        }, index) => `
	    <dhi-seds-column size="12" class="bullet-points">
	        <dhi-seds-row>
	            <dhi-seds-typography-heading level="h3" size="150" weight="bold"><span>${arrowIcon}</span> ${title}</dhi-seds-typography-heading>
	        </dhi-seds-row>
	        <dhi-seds-row>
	            <dhi-seds-typography-heading size="125" weight="regular">${details}</dhi-seds-typography-heading>
	        </dhi-seds-row>
	    </dhi-seds-column>`;

        const ourFinanceHtml = `
	    <div class="${id}__ourfinancesection ${id}__section">
	        <dhi-seds-container>
	        	${sectionTitle(id, 'Our finance, banking and insurance clients have seen')}
	            <dhi-seds-row class="content-wrap">
	            	<dhi-seds-column size="0" size-lg="2"></dhi-seds-column>
		            <dhi-seds-column size="12" size-lg="6">
				        ${sectionData$1.map((data, i) => singleListHtml(data, i)).join('\n')}
					</dhi-seds-column>
					<dhi-seds-column size="12" size-lg="2">
						<div class="result-wrap">
							<div class="apply-rate">
								<dhi-seds-typography-display class="apply-rate-count count" size="400" weight="bold">15%</dhi-seds-typography-display>
								<dhi-seds-typography-heading class="apply-rate-text text" size="150" weight="regular">Apply Rate</dhi-seds-typography-heading>
							</div>
							<div class="divider"></div>
							<div class="applicants-per-job">
								<dhi-seds-typography-display class="applicants-per-job-count count" size="400" weight="bold">5+</dhi-seds-typography-display>
								<dhi-seds-typography-heading class="applicants-per-job-text text" size="150" weight="regular">Applicants Per Job</dhi-seds-typography-heading>
							</div>
						</div>
					</dhi-seds-column>
					<dhi-seds-column size="0" size-lg="2"></dhi-seds-column>
	            </dhi-seds-row>
	        </dhi-seds-container>
	    </div>`;
        return ourFinanceHtml;
    };

    const reviewSection = (id) => {
        const htmlStr = `
        <div class="${id}__revsection ${id}__section ${id}__full-bleed">
            <dhi-seds-container>
                <dhi-seds-row>
                    <dhi-seds-column size="12">
                        ${heartIcon}
                        <dhi-seds-typography-heading class="title-container" size="150" weight="bold">
                            “We have partnered extremely closely with Dice to capitalize on our brand presence. There’s not a lot of solutions in the marketplace focusing on tech talent and for us Dice continues to be a leading solution for us to get in front of the right talent.”
                        </dhi-seds-typography-heading>
                        <dhi-seds-typography-heading class="title-container sub-title" size="150" weight="regular">
                            BNY Mellon
                        </dhi-seds-typography-heading>
                    </dhi-seds-column>
                </dhi-seds-row>
            </dhi-seds-container>
        </div>`;
        return htmlStr;
    };

    const whyChooseSection = (id) => {
        const sectionData = [{
                imgSrc: 'https://fe-test-dev.s3.amazonaws.com/Dice/dice-109/all-the-tech-professionals.svg',
                altText: 'All the tech professionals',
                title: 'All the tech professionals <br>you need are here',
                content: '83% of active tech professionals on Dice are not actively searching for jobs on other sites. *',
            },
            {
                imgSrc: 'https://fe-test-dev.s3.amazonaws.com/Dice/dice-109/you-can-post-jobs.svg',
                altText: 'You can post jobs',
                title: 'You can post jobs <br>without extra fees',
                content: 'You don\'t pay for applications or views. Simply post your jobs and review all qualified candidates.',
            },
            {
                imgSrc: 'https://fe-test-dev.s3.amazonaws.com/Dice/dice-109/you-wont-loose-candidates.svg',
                altText: 'You wont loose candidates',
                title: 'You won’t lose candidates to a <br>long application process',
                content: 'Easy Apply lets tech professionals apply to your jobs in just a few clicks.',
            },
            {
                imgSrc: 'https://fe-test-dev.s3.amazonaws.com/Dice/dice-109/we-take-sourcing.svg',
                altText: 'We take sourcing',
                title: 'We take sourcing and <br>screening off your plate',
                content: 'You’ll work with a dedicated team who will source and screen candidates. All you have to do is hire.',
            },
            {
                imgSrc: 'https://fe-test-dev.s3.amazonaws.com/Dice/dice-109/we-know-tech.svg',
                altText: 'We know tech',
                title: 'We know tech — and the people <br>who make it happen',
                content: 'Millions of tech professionals rely on our experience and expertise to find their next job.',
            }
        ];

        const singleTechHtml = ({
            imgSrc,
            altText,
            title,
            content
        }, index) => `<dhi-seds-column size="12" size-lg="6">
		    <img class="tech-img" src="${imgSrc}" alt="${altText}">
		    <div class="tech-content"><dhi-seds-typography-heading level="h3" class="title-container desktop-show hydrated" size="200" weight="bold">${title}</dhi-seds-typography-heading>
		    <dhi-seds-typography-heading level="h3" class="title-container desktop-hide hydrated" size="150" weight="bold">${title}</dhi-seds-typography-heading>
		    <dhi-seds-typography-heading size="125" weight="regular" class="hydrated">${content}</dhi-seds-typography-heading></div>
		</dhi-seds-column>`;

        const whyChooseHtml = `
	    <div class="${id}__whychoosesection ${id}__section ${id}__full-bleed">
	        <dhi-seds-container>
	            <dhi-seds-row>
	                <dhi-seds-column size="12" size-lg="12">
	                    <dhi-seds-row class="financebanking__sectiontitle"><dhi-seds-column size="12"><dhi-seds-typography-heading class="desktop-hide" size="200" weight="bold">Why to choose Dice as your tech hiring partner</dhi-seds-typography-heading><dhi-seds-typography-display class="desktop-show" size="300" weight="bold">Why to choose Dice as your tech hiring partner</dhi-seds-typography-display></dhi-seds-column></dhi-seds-row>
	                </dhi-seds-column>
	            </dhi-seds-row>
	            <dhi-seds-row class="content-wrap">${sectionData.map((data, i) => singleTechHtml(data, i)).join('\n')}</dhi-seds-row>
	            <dhi-seds-row class="btn-wrap">${primaryCta('Try Dice Today','#')}</dhi-seds-row>
	        </dhi-seds-container>
	    </div>`;
        return whyChooseHtml;
    };

    const solutionsSection = (id) => {
        const {
            VIDEOLINK
        } = shared;
        const sectionData$2 = [{
                title: 'Elevate your posts',
                details: 'Leverage our tech-focused AI to match your open roles with the most relevant candidates.'
            },
            {
                title: 'Source ideal talent',
                details: 'Gain access to millions of tech professionals with complete profiles — and the tools to find which ones best fit your needs.'
            },
            {
                title: 'Network & connect',
                details: 'Dice’s career events can be tailored to your personal hiring needs so you can connect 1:1 with tech professionals searching for their next opportunity.'
            }
        ];
        const singleSolutionHtml = ({
            title,
            details
        }) => `
	    <dhi-seds-column size="12" class="bullet-points">
	        <dhi-seds-row>
	            <dhi-seds-typography-heading level="h3" size="150" weight="bold"><span>${bulletIcon}</span> ${title} </dhi-seds-typography-heading>
	        </dhi-seds-row>
	        <dhi-seds-row>
	            <dhi-seds-typography-heading size="125" weight="regular">${details}</dhi-seds-typography-heading>
	        </dhi-seds-row>
	    </dhi-seds-column> `;

        const whysHtml = `
	    <div class="${id}__solutionssection ${id}__section ${id}__full-bleed">
	        <dhi-seds-container>
	            ${sectionTitle(id, 'Solutions tailormade to your hiring needs')}
	            <dhi-seds-row class="md-col-rev">
	                <dhi-seds-column size="12" size-lg="6">
	                    ${sectionData$2.map((data) => singleSolutionHtml(data)).join('\n')}
	                </dhi-seds-column>
	                <dhi-seds-column class="add-frame" size="12" size-lg="6">
	                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${VIDEOLINK}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Dice: Where Tech Connects"></iframe></div><script src=https://player.vimeo.com/api/player.js></script>
	                </dhi-seds-column>
	            </dhi-seds-row>
	        </dhi-seds-container>
	    </div>`;
        return whysHtml;
    };

    const getStartSection = (id) => {
        const htmlStr = `
        <div class="${id}__getstartsection ${id}__section ${id}__full-bleed">
            <dhi-seds-container class="container">
                <dhi-seds-row class="md-col-rev">
                    <dhi-seds-column size="12" size-lg="12">
                    	<dhi-seds-row class="financebanking__sectiontitle">
                            <dhi-seds-column size="12">
                                <dhi-seds-typography-heading size="200" weight="bold" margin="default">Ready to get started?</dhi-seds-typography-heading>
                            </dhi-seds-column>
                        </dhi-seds-row>
                        <dhi-seds-row>
                            <dhi-seds-column size="12">
                                <dhi-seds-typography-heading class="sub-title" size="150" weight="regular" margin="default">We\'ll take it from here.</dhi-seds-typography-heading>
                            </dhi-seds-column>
                        </dhi-seds-row>
                        <dhi-seds-row>
                            <dhi-seds-column size="12" size-md="12">
                            	${secondaryCta('Hire with Dice','#')}
                            </dhi-seds-column>
                        </dhi-seds-row>
                        <dhi-seds-row>
                    		<dhi-seds-typography-paragraph class="note-text" size="75" weight="regular">*Compared to Indeed, ZipRecruiter, CareerBuilder and Monster</dhi-seds-typography-paragraph>
                        </dhi-seds-row>
                    </dhi-seds-column>
                </dhi-seds-row>
            </dhi-seds-container>
        </div>`;
        return htmlStr;
    };

    const footerSection = (id) => {
        const sectionLinkData = [{
            anchorText: 'Terms &amp; Conditions',
            anchorLink: '/about/terms-and-conditions'
        }, {
            anchorText: 'Privacy Policy',
            anchorLink: '/about/privacy-policy'
        }, {
            anchorText: 'Do Not Sell My Personal Information',
            anchorLink: '/about/ccpa#ccpa-form-anchor'
        }, {
            anchorText: 'CCPA',
            anchorLink: '/about/ccpa'
        }];
        const singleLinkHtml = ({
            anchorText,
            anchorLink
        }, index) => `<dhi-seds-typography-paragraph class="list-item" size="75" weight="regular"><dhi-seds-link url="${anchorLink}">${anchorText}</dhi-seds-link></dhi-seds-typography-paragraph>`;

        const date = new Date();
        const currentYear = date.getFullYear();
        const footerHtml = `<div class="${id}__footersection ${id}__section">
	        <dhi-seds-container>
		        <dhi-seds-row>
		            <dhi-seds-column size="0" size-lg="6"><dhi-seds-typography-paragraph class="copy-right" size="75" weight="regular">Copyright © 1990 - ${currentYear} Dice. All Rights Reserved. <dhi-seds-link url="http://dice.com">Dice</dhi-seds-link> is a <dhi-seds-link url="https://dhigroupinc.com">DHI service</dhi-seds-link>.</dhi-seds-typography-paragraph>
		            </dhi-seds-column>
		            <dhi-seds-column size="0" size-lg="6">
			            <div class="list">${sectionLinkData.map((data, i) => singleLinkHtml(data, i)).join('\n')}</div>
		            </dhi-seds-column>
		        </dhi-seds-row>
		    </dhi-seds-container>
		</div>`;
        return footerHtml;
    }

    const {
        ID
    } = shared;

    var activate = () => {
        setup();

        const header = document.querySelector('dhi-seds-nav-header-employer');
        const landingpage = (id) => `
	    <div class="${id}__landingpage container">
	    	${heroSection(id)}
	        ${ourFinanceSection(id)}
	        ${reviewSection(id)}
	        ${whyChooseSection(id)}
	        ${solutionsSection(id)}
	        ${getStartSection(id)}
	        ${footerSection(id)}
	    </div>`;
        if (document.querySelector(`.${ID}__landingpage`)) return;
        header.insertAdjacentHTML('afterend', landingpage(ID));

        onLoadMktoForms2(() => {
            const {
                FORMURL,
                FORMCODE,
                FORMID,
                TYURL
            } = shared;
            // MktoForms2.loadForm(`${FORMURL}`, `${FORMCODE}`, `${FORMID}`);
            // dhi.marketo.init(`${FORMID}`, `${FORMCODE}`, `${TYURL}`);
            dhi.marketo2.init(4480, "318-VQK-428", "/hiring/contact-us/thank-you", "Continue", "FirstName, LastName, Email", "Get In Touch", "Phone, Company");
            MktoForms2.whenReady((form) => {
                updateFormField('.hero-wrap .mktoForm .mktoFormRow');
                addInputName('.hero-wrap .mktoForm .mktoFormRow');
                var formLabel = document.querySelectorAll(".hero-wrap form[id*='mktoForm'] .mktoFormRow label");
                var steps = document.querySelectorAll(".hero-wrap form[id*='mktoForm'] .mktoFormRow.fe_show");
                var formRow = document.querySelectorAll(".hero-wrap form[id*='mktoForm'] .mktoFormRow");
                document.querySelector('.mktoButtonWrap > button').insertAdjacentHTML('afterend', '<p class="fe-back-button"><img src="https://fe-test-dev.s3.amazonaws.com/Dice/dice-109/arrow-left.svg" alt="Back Arrow"> Back</p>');
                document.querySelector('.mktoForm').classList.add('fe-form-step1');
                modifyForm.addClass(formLabel);
				document.querySelector('.mktoButtonWrap > #tempStep1Btn').addEventListener('click', function(e) {
                    setTimeout(function() {
                        modifyForm.validateEmail(form);
                        modifyForm.validateFirstName(form);
                        modifyForm.validateLastName(form);
                        modifyForm.triggerNextStep(steps, formRow, formLabel);
                    }, 500);
                });
                document.querySelector('.mktoButtonWrap > .fe-back-button').addEventListener('click', function(e) {
                    setTimeout(function() {
                        modifyForm.triggerBackStep(steps, formLabel);
                        if(document.querySelector('#FE-Form-Validator__tempStep1Btn').classList.contains('FE-Form-Validator__hide')){
                        	document.querySelector('#FE-Form-Validator__tempStep1Btn').classList.remove('FE-Form-Validator__hide');
                        }
                        document.querySelector('body').classList.add('FE-Form-Validator__step1');
                        if (document.querySelector('body').classList.contains('FE-Form-Validator__step2')) {
                            document.querySelector('body').classList.remove('FE-Form-Validator__step2');
                        }
                    }, 500);
                });
                document.querySelector('.hero-wrap .hero-form').classList.add('load');
            });
        }, 50, 15000);

        const landingpageElement = document.querySelector(`.${ID}__landingpage`);

        const defaultBtn = landingpageElement.querySelectorAll('dhi-seds-core-button.section-cta');
        const defaultLink = landingpageElement.querySelectorAll('dhi-seds-link');

        const getShadowRoot = (element) => element.shadowRoot;

        defaultBtn.forEach((btn) => {
            pollerLite(
                [() => getShadowRoot(btn) !== null && getShadowRoot(btn).querySelector('a') !== null],
                () => {
                    changeCssProperty(btn.shadowRoot, 'a', 'background-color', '#CE2129');
                    changeCssProperty(btn.shadowRoot, 'a', 'box-shadow', 'inset 0 0 0 #CE2129');
                }
            );
        });

        defaultLink.forEach((link) => {
            pollerLite(
                [() => getShadowRoot(link) !== null && getShadowRoot(link).querySelector('a') !== null],
                () => {
                    changeCssProperty(link.shadowRoot, 'a', 'color', '#FFFFFF');
                }
            );
        });

        document.body.addEventListener('click', (e) => {
            const {
                target
            } = e;
            if (target.closest('dhi-seds-core-button') && target.hasAttribute('url')) {
                const targetUrl = target.getAttribute('url');
                const ctaText = target.closest('dhi-seds-core-button').textContent;
                window.location.pathname = targetUrl;
                // trackGAEvents('click', `${ctaText}`);
            }
        });
    };

    if (window.location.pathname.includes('/hiring/finance-banking')) {
        const mainLayoutSelector = '.layout-main-content-wrapper';
        const cssFile = 'https://seds.prod.design-prod.dhiaws.com/dhi-snake-eyes@0.14.2/dist/dhi-snake-eyes/dhi-snake-eyes.css';
        const jsFile = 'https://seds.prod.design-prod.dhiaws.com/dhi-snake-eyes@0.14.2/dist/dhi-snake-eyes/dhi-snake-eyes.esm.js';
        const mktocssFile = 'https://app-sjg.marketo.com/js/forms2/css/forms2.css';
        const mktothemecssFile = 'https://app-sjg.marketo.com/js/forms2/css/forms2-theme-simple.css';

        const metaNoIndex = document.querySelector('meta[content="noindex"]');
        metaNoIndex?.remove();
        
        addFileToSite(jsFile);
        addFileToSite(cssFile);
        addFileToSite(mktocssFile);
        addFileToSite(mktothemecssFile);

        addJsToPage('//app-sjg.marketo.com/js/forms2/js/forms2.min.js', 'mkto');
        
        // addJsToPage('https://www.dice.com/webfiles/1684267845325/js/dhi/marketo_form.js', 'mkto-add');
        addJsToPage('https://www.dice.com/webfiles/1684267845325/js/dhi/marketo_2_step_form.js', 'mkto-add');
        
        pollerLite([mainLayoutSelector], activate);
    }
})();

(function () {
    'use strict';
      
    /*eslint-disable object-curly-newline */
    /*eslint-disable no-console */
    /*eslint-disable max-len */
    /**
     * Polls the DOM for a condition to be met before executing a callback.
     *
     * @param {array} conditions The array of conditions to check for.
     * @param {function} callback The callback function when all conditions are true.
     * @param {number} maxTime max time the check witll run before abort.
     */
    const pollerLite = (conditions, callback, maxTime = 15000) => {
      const POLLING_INTERVAL = 25;
      const startTime = Date.now();
      const interval = setInterval(() => {
        const allConditionsMet = conditions.every((condition) => {
          if (typeof condition === 'function') {
            return condition();
          }
          return !!document.querySelector(condition);
        });
        if (allConditionsMet) {
          clearInterval(interval);
          callback();
        } else if (Date.now() - startTime >= maxTime) {
          clearInterval(interval);
          console.error('Polling exceeded maximum time limit');
        }
      }, POLLING_INTERVAL);
    };
  
    const addJsToPage = (src, id, cb, classes) => {
      if (document.querySelector(`#${id}`)) {
        return;
      }
  
      const s = document.createElement('script');
      if (typeof cb === 'function') {
        s.onload = cb;
      }
  
      if (classes) {
        s.className = classes;
      }
  
      s.type = 'text/javascript';
      s.src = src;
      s.setAttribute('id', id);
      document.body.appendChild(s);
    };
  
    const addCssToPage = (href, id, classes) => {
      if (document.querySelector(`#${id}`)) {
        return;
      }
  
      const c = document.createElement('link');
      c.setAttribute('id', id);
      c.setAttribute('rel', 'stylesheet');
  
      if (classes) {
        c.className = classes;
      }
  
      c.href = href;
      document.head.appendChild(c);
    };
  
    const gaTracking = (label, action = 'click') => {
      const trackerIDs = [];
      pollerLite([() => typeof window.ga.getAll === 'function'], () => {
        window.ga.getAll().forEach((tracker) => {
          const tracId = tracker.get('trackingId');
  
          if (trackerIDs.includes(tracId)) return;
          tracker.send('event', {
            eventCategory: 'Contact Sales',
            eventAction: action,
            eventLabel: label,
          });
          trackerIDs.push(tracId);
        });
      });
    };
  
    var shared = {
      ID: 'FE-Form-Validator',
      VARIATION: 'control',
      CLIENT: 'Dice',
    };
  
    const validUrls = {
      oldForms: [
        '/hiring/contact-us',
        '/hiring/contact-us/recruitment-package',
        '/2018-WS-contact-us.html',
        '/hiring/contact-us/virtual-career-events',
        '/hiring/contact-us/employer-brand',
        '/hiring/contact-us/sourcing-services',
        '/hiring/contact-us/whats-new',
        '/2017-contact-us.html',
        '/Dice-Contact-Us---RcrPkg_2020v2.html',
        '/hiring/contact-us/partners',
        '/hiring/contact-us/recruitment-services',
      ],
      newForms: ['/hiring/contact-us/homepage', '/hiring/contact-us/homepage-banner', '/hiring/contact-us/webstore','/hiring/finance-banking'],
    };
  
    const continueClickHandler = (event, mktForm, nextStepBtn) => {
      const { ID } = shared;
      const formVariant = validUrls.newForms.includes(window.location.pathname) ? 'newform' : 'oldform';
      const { target } = event;
      const fieldValues = mktForm.getValues();
  
      const { FirstName, LastName, Email } = fieldValues;
      const lastNameField = mktForm.getFormElem().find('#LastName');
  
      if (!document.querySelector(`.${shared.ID}__step1`)) return;
  
      const showNextStep = () => {
        const stpeOneInputs = ['FirstName', 'LastName', 'Email'];
        const stpeTwoInputs = ['Phone', 'Company'];
  
        const getStepRows = (stepInputs) =>
          stepInputs.map((item) => {
            const inputElem = document.getElementById(item);
            return inputElem.closest('.mktoFormRow');
          });
  
        const stepOneRows = getStepRows(stpeOneInputs);
        const stepTwoRows = getStepRows(stpeTwoInputs);
        mktForm.submit();
        stepOneRows.forEach((row) => {
          row.classList.add('fe_hide');
          row.classList.remove('fe_show');
        });
        stepTwoRows.forEach((row) => {
          row.classList.add('fe_show');
          row.classList.add('form-row');
          row.classList.remove('fe_hide');
        });
        document.querySelector('.bm_form_heading').classList.add('step1Complete');
        document.querySelector(`#${ID}__tempStep1Btn`).classList.add(`${ID}__hide`);
        document.querySelector(`#${ID}__tempStep2Btn`).style.display = 'block';
        document.body.classList.remove(`${ID}__step1`);
        document.body.classList.add(`${ID}__step2`);
      };
      const mailHasNativeError = () => {
        const errorField = document.querySelector('#Email + .mktoError');
        if (!errorField) return false;
        const styles = window.getComputedStyle(errorField);
        return styles.getPropertyValue('display') !== 'none';
      };
      const renderNextStep = () => {
        if (formVariant === 'oldform') {
          showNextStep();
        } else if (formVariant === 'newform') {
          nextStepBtn.click();
          target.classList.add(`${ID}__hide`);
  
          if (!mailHasNativeError()) {
            document.body.classList.remove(`${ID}__step1`);
            document.body.classList.add(`${ID}__step2`);
          } else {
            target.classList.remove(`${ID}__hide`);
          }
        }
      };
  
      if (LastName.length === 1) {
        mktForm.showErrorMessage('Must be a valid last name.', lastNameField);
      } else if (FirstName === '' || LastName === '' || Email === '') {
        formVariant === 'newform' ? nextStepBtn.click() : mktForm.submit();
      } else if (FirstName !== '' && LastName.length >= 2 && target.dataset.email && target.dataset.email === 'true') {
        renderNextStep();
        //eslint-disable-next-line no-underscore-dangle
        window._nb.fields.unregisterListener(document.querySelector('input[type="email"]'));
        gaTracking('Step 1 completion');
      } else if (LastName.length >= 2 && target.dataset.email && target.dataset.email === 'false') {
        const NbWrapper = document.querySelector('[id^="nb-field-"]');
        const nbFeedback = document.querySelector('.nb-feedback');
        const clonedNbFeedback = nbFeedback ? nbFeedback.cloneNode(true) : '';
        clonedNbFeedback.id = `${ID}__clonedFb`;
        if (document.querySelector(`#${ID}__clonedFb`)) return;
        nbFeedback.insertAdjacentElement('afterend', clonedNbFeedback);
        clonedNbFeedback.removeAttribute('style');
        NbWrapper.classList.add('nb-error');
        setTimeout(() => {
          NbWrapper.classList.remove('nb-error');
          clonedNbFeedback.remove();
        }, 3000);
      }
    };
  
    /*eslint-disable no-underscore-dangle */
    const emailValidationHandler = (e) => {
      const { type } = e;
      const fakeContinue = document.getElementById(`${shared.ID}__tempStep1Btn`);
  
      if (type === 'nb:result') {
        console.log(e.detail.result);
        //if email is allowed overwrite to positive message
        const { response } = e.detail.result;
        const isAllowed = response.allow_entry && !response.flags.includes('free_email_host');
        const emailMsgContainer = document.querySelector('#Email + .nb-feedback .nb-result');
        if (isAllowed && emailMsgContainer) {
          const validMsg = '<i class="nb-icon-ok"></i>&nbsp;Valid email';
          emailMsgContainer.classList.add('fake-green');
          emailMsgContainer.innerHTML = validMsg;
        }
        const status =
          e.detail.result.is(window._nb.settings.getAcceptedStatusCodes()) &&
          response.allow_entry &&
          !response.flags.includes('free_email_host');
        fakeContinue.dataset.email = status;
      } else if (type === 'nb:clear') {
        const status = e.detail.result && e.detail.result.isError();
        fakeContinue.dataset.email = status;
      } else if (type === 'nb:loading') {
        fakeContinue.dataset.email = false;
      }
    };
  
    const phoneValidationHandler = (mktForm, submitBtn) => {
      const { isValidPhoneNumber } = window.libphonenumber;
      const vals = mktForm.vals();
      const phoneNumStr = vals.Phone;
      const formVariant = validUrls.newForms.includes(window.location.pathname) ? 'newform' : 'oldform';
      if (!document.querySelector(`.${shared.ID}__step2`)) return;
  
      if (!phoneNumStr) {
        mktForm.validate();
        return;
      }
      console.log('isValidPhoneNumber(phoneNumStr)', isValidPhoneNumber(phoneNumStr, 'US'));
  
      if (isValidPhoneNumber(phoneNumStr, 'US')) {
        if (formVariant === 'oldform') {
          mktForm.onValidate(() => {
            mktForm.submittable(true);
          });
        }
  
        submitBtn.click();
        const phoneErrElem = document.querySelector('#Phone + .mktoError');
        if (phoneErrElem) {
          phoneErrElem.style.display = 'none';
        }
        vals.Company !== '' && submitBtn.classList.add('loading');
        return;
      }
      //document.querySelector('#Phone + .mktoError').style.display = 'block';
      const phnElem = mktForm.getFormElem().find('#Phone');
  
      phnElem.removeClass('mktoValid').addClass('mktoInvalid');
      mktForm.showErrorMessage('Must be a phone number.\n 503-555-1212', phnElem);
    };
  
    let timeoutId;
  
    const { ID: ID$2 } = shared;
  
    const handleErrMsg = (isValid, phoneInputField, phone_number, ErrMsg) => {
      const errBlock = document.querySelector(`.${ID$2}__phone-status`);
      errBlock.classList.remove(`${ID$2}__phone-loading`);
      if (isValid) {
        errBlock.innerHTML = 'Valid phone number';
        errBlock.classList.remove(`${ID$2}__phone-err`);
        errBlock.classList.add(`${ID$2}__phone-valid`);
        errBlock.style.display = 'block';
        phoneInputField.classList.remove(`${ID$2}__err`);
        setTimeout(() => {
          errBlock.style.display = 'none';
        }, 2000);
        return;
      }
      const errMsg = `Invalid phone number ${phone_number || ''}${ErrMsg ? `: ${ErrMsg[0]}` : ''}`;
      errBlock.classList.remove(`${ID$2}__phone-valid`);
      errBlock.classList.add(`${ID$2}__phone-err`);
      errBlock.style.display = 'block';
      errBlock.innerHTML = errMsg;
      phoneInputField.classList.add(`${ID$2}__err`);
    };
  
    const showLoader = () => {
      const statusBlock = document.querySelector(`.${ID$2}__phone-status`);
      statusBlock.classList.remove(`${ID$2}__phone-err`);
      statusBlock.classList.remove(`${ID$2}__phone-valid`);
      statusBlock.classList.add(`${ID$2}__phone-loading`);
      statusBlock.style.display = 'block';
      statusBlock.innerHTML = 'Checking ...';
    };
  
    const twilioValidationHandler = (ev, telInputInstance, mktForm, phoneInputField, waitTime = 1) => {
      if (!document.querySelector(`.${ID$2}__step2`)) return;
      const { target } = ev;
  
      const vals = mktForm.vals();
      //Clear any existing timeout
      clearTimeout(timeoutId);
  
      //handleErrMsg(true, phoneInputField);
  
      //Start a new timeout to wait for 2 seconds
      timeoutId = setTimeout(() => {
        const phoneNumber = telInputInstance.getNumber();
        //Make a request to n8n using the phone number
        phoneInputField.classList.remove(`${ID$2}__err`);
        showLoader();
        fetch('https://funnelenvy.app.n8n.cloud/webhook/validatephonenumber', {
          method: 'POST',
          //eslint-disable-next-line object-curly-newline
          body: JSON.stringify({ phoneNumber }),
        })
          .then((response) => response.json())
          .then(({ body }) => {
            console.log(body);
            const { valid, validation_errors, phone_number } = body;
            const userClickedSubmit = target.closest('.mktoButtonWrap');
            if (valid && userClickedSubmit) {
              const submitBtn = document.querySelector('button[type="submit"]');
              vals.Company !== '' && (target.innerText = 'Please Wait');
              submitBtn.click();
            }
            handleErrMsg(valid, phoneInputField, phone_number, validation_errors);
          })
          .catch((error) => console.error('Error sending phone number validation request:', error));
      }, waitTime); //Wait for 2 seconds before making the request
    };
  
    const setup = () => {
      const { ID, VARIATION } = shared;
      document.documentElement.classList.add(ID);
      document.documentElement.classList.add(`${ID}-${VARIATION}`);
    };
  
    /*eslint-disable no-underscore-dangle */
  
    const { ID: ID$1, VARIATION: VARIATION$1 } = shared;
    const telCdnUrl = 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build';
  
    var activate = () => {
      setup();
      const formVariant = validUrls.newForms.includes(window.location.pathname) ? 'newform' : 'oldform';
      const formId = document.querySelector('[name="formid"]').value;
      const mktForm = window.MktoForms2.getForm(formId);
  
      const emailField = document.querySelector('input[type="email"]');
  
      //step 2
      const submitBtn = document.querySelector('button[type="submit"]');
      const nextStepBtn = document.getElementById('tempStep1Btn') || submitBtn;
  
      const emailWrapper = emailField.closest('.mktoFormRow');
  
      emailWrapper.classList.add(`${ID$1}__email-wrapper`);
  
      document.body.classList.add(`${ID$1}__${formVariant}`);
      document.body.classList.add(`${ID$1}__step1`);
      //clear previous data
  
      //render fake continue button
  
      const fakeContinueBtn = `<p id="${ID$1}__tempStep1Btn" class="multi-step-step1-btn">Continue</p>`;
      const fakeSubmitBtn = `<p id="${ID$1}__tempStep2Btn" class="multi-step-step1-btn ">Get In Touch</p>`;
  
      if (!document.getElementById(`${ID$1}__tempStep1Btn`)) {
        nextStepBtn.insertAdjacentHTML('afterend', fakeContinueBtn);
      }
  
      if (!document.getElementById(`${ID$1}__tempStep2Btn`)) {
        submitBtn.insertAdjacentHTML('afterend', fakeSubmitBtn);
      }
  
      const fakeContinue = document.getElementById(`${ID$1}__tempStep1Btn`);
      const fakeSubmit = document.getElementById(`${ID$1}__tempStep2Btn`);
  
      if (emailField.value !== '') {
        fakeContinue.dataset.email = 'true';
      }
  
      emailField.addEventListener('nb:result', (e) => emailValidationHandler(e));
      emailField.addEventListener('nb:clear', (e) => emailValidationHandler(e));
  
      fakeContinue.addEventListener('click', (e) => continueClickHandler(e, mktForm, nextStepBtn));
  
      mktForm.onSuccess(() => gaTracking('Step 2 completion'));
  
      if (VARIATION$1 === 'control') {
        const phnElem = document.querySelector('input[type="tel"]');
        fakeSubmit.addEventListener('click', () => phoneValidationHandler(mktForm, submitBtn));
        phnElem.addEventListener('focus', (e) => {
          const phErrElem = document.querySelector('#Phone + .mktoError');
          if (!e.target.value && phErrElem) {
            document.querySelector('#Phone + .mktoError').style.display = 'block';
            phnElem.classList.add('mktoInvalid');
            phnElem.classList.remove('mktoValid');
            const jqPhElem = mktForm.getFormElem().find('#Phone');
            mktForm.showErrorMessage('Must be a valid phone number.', jqPhElem);
          }
        });
        return;
      }
  
      //Twilio phone number validation
  
      addCssToPage(`${telCdnUrl}/css/intlTelInput.css`, `${ID$1}_intlTelInputCss`);
      addJsToPage(`${telCdnUrl}/js/intlTelInput.min.js`, `${ID$1}_intlTelInputJs`);
  
      const formElem = document.querySelector('form[id^="mktoForm_"]');
      const phoneInputField = formElem.querySelector('input[type="tel"]');
  
      phoneInputField.setAttribute('placeholder', '');
  
      pollerLite([() => window.intlTelInput !== undefined], () => {
        console.log('ini here');
        //setup twilio
        phoneInputField.closest('.mktoFormRow').classList.add(`${ID$1}__adjust`);
  
        if (formElem.querySelector('.iti--allow-dropdown')) {
          return;
        }
  
        //place custom errror container
  
        const errContainer = `<div class="${ID$1}__phone-status" style="display: none;"></div>`;
  
        phoneInputField.insertAdjacentHTML('afterend', errContainer);
  
        const telInputInstance = window.intlTelInput(phoneInputField, {
          utilsScript: `${telCdnUrl}/js/utils.js`,
          initialCountry: 'us',
        });
  
        phoneInputField.addEventListener('focus', () => {
          const statusBlock = document.querySelector(`.${ID$1}__phone-status`);
          statusBlock.style.display = 'none';
        });
        phoneInputField.addEventListener('input', (e) => {
          const VALIDATION_DELAY = 2000;
          twilioValidationHandler(e, telInputInstance, mktForm, phoneInputField, VALIDATION_DELAY);
        });
  
        fakeSubmit.addEventListener(
          'click',
          (e) => twilioValidationHandler(e, telInputInstance, mktForm, phoneInputField)
          //eslint-disable-next-line function-paren-newline
        );
      });
    };
  
    const emailValidationSetup = (ID) => {
      //add neverbounce and register
      const nbScript = 'https://cdn.neverbounce.com/widget/dist/NeverBounce.js';
  
      //eslint-disable-next-line no-underscore-dangle
      window._NBSettings = {
        acceptedMessage: 'Valid email',
        acceptedStatusCodes: [0, 3, 4],
        ajaxMode: false,
        apiKey: 'public_ae4f79b9aa58df9ed79ba99b1150e8a8',
        apiOnly: false,
        autoFieldHookup: false,
        blockFreemail: true,
        blockRoleAccount: false,
        blockThrottledAttempts: false,
        debugMode: false,
        displayPoweredBy: true,
        feedback: true,
        feedbackClass: 'nb-feedback',
        hiddenField: true,
        inputLatency: 600,
        loadingMessage: 'Loading...',
        rejectedMessage: 'Must be valid work email. example@yourdomain.com',
        selector: 'input[type="email"]',
        softRejectMessage: 'Enter a valid email',
        freemailRejectMessage: 'Must be valid work email. example@yourdomain.com',
        roleAccountRejectMessage:
          'Role accounts are not permitted <br />&nbsp;<small style="margin-left: 20px">(i.e. sales@..., support@...)</small>',
        throttleRejectMessage: 'Too many attempts, try again later',
        timeout: 25,
      };
  
      addJsToPage(nbScript, `${ID}__nb`);
    };
  
    const { ID, VARIATION } = shared;
  
    const libPhone = 'https://unpkg.com/libphonenumber-js@1.10.18/bundle/libphonenumber-min.js';
    const RENDER_DELAY = 2000;
    const formVariant = validUrls.newForms.includes(window.location.pathname) ? 'newform' : 'oldform';
    addJsToPage(libPhone, `${ID}__libPhone`);
  
    emailValidationSetup(ID);
    pollerLite(
      [
        'form[id^="mktoForm_"]',
        '#Phone',
        'button[type="submit"]',
        'input[type="email"]',
        () => formVariant === 'oldform' || (!document.querySelector('.async-hide') && document.querySelector('.hydrated')),
        () => VARIATION === '1' || window.libphonenumber !== undefined,
        () => typeof window.MktoForms2.getForm === 'function' && window._nb !== undefined,
      ],
      () => {
        //deleteCookie('formdata');
        //programmatically register email field
        const emailField = document.querySelector('input[type="email"]');
        window._nb.fields.registerListener(emailField, true);
        setTimeout(activate, RENDER_DELAY);
      }
    );
    
  })();