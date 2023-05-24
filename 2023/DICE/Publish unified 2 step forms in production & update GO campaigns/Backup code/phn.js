(function () {
    'use strict';
  
    var shared = {
        ID: "DICE-02",
        VARIATION: "1",
        CLIENT: "Dice"
      };
  
    const setup = () => {
      const { ID, VARIATION } = shared;
      document.documentElement.classList.add(ID);
      document.documentElement.classList.add(`${ID}-${VARIATION}`);
    };
  
    //import gaTracking from './services/gaTracking';
    //import shared from './shared/shared';
  
    //const { ID, VARIATION } = shared;
  
    var activate = () => {
      setup(); //use if needed
      //gaTracking('Conditions Met'); //use if needed
      //console.log(ID);
      //-----------------------------
      //If control, bail out from here
      //-----------------------------
      //if (VARIATION === 'control') {
      //}
  
      //-----------------------------
      //Write experiment code here
      //-----------------------------
      //...
  
      const formId = document.querySelector('[name="formid"]').value;
      const mktForm = window.MktoForms2.getForm(formId);
      const phoneField = document.querySelector('input[type="tel"]');
  
      const { isValidPhoneNumber } = window.libphonenumber;
  
      mktForm.onValidate((isValid) => {
        //console.log('🚀 isValid:', isValid);
        //Get the values
        const vals = mktForm.vals();
        const phoneNumStr = vals.Phone;
        if (!phoneNumStr) return;
        //console.log('isValidPhoneNumber(phoneNumStr)', isValidPhoneNumber(phoneNumStr, 'US'));
  
        if (isValid && vals.Company !== '' && isValidPhoneNumber(phoneNumStr, 'US')) {
          document.querySelector('.mktoButtonWrap button').disabled = false;
          mktForm.submittable(true);
          //mktForm.submit();
          //document.querySelector('[name="formid"]').submit();
          return;
        }
        if (document.querySelector('#Phone + .mktoError')) {
            document.querySelector('#Phone + .mktoError').style.display = 'block';
        }
        const phnElem = mktForm.getFormElem().find('#Phone');
        phnElem.removeClass('mktoValid').addClass('mktoInvalid');
        mktForm.showErrorMessage('Must be a phone number.\n 503-555-1212', phnElem);
        mktForm.submittable(false);
        document.querySelector('.mktoButtonWrap button').disabled = true;
      });
  
      phoneField.addEventListener('blur', () => {
        mktForm.validate();
      });
    };
  
    /**
     * Helper append JS to page
     */
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
  
      s.src = src;
      s.setAttribute('id', id);
      //s.setAttribute('crossorigin');
      document.head.appendChild(s);
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
  
    const libPhone = 'https://unpkg.com/libphonenumber-js@1.10.18/bundle/libphonenumber-min.js';
  
    addJsToPage(libPhone, `${shared.ID}__libPhone`);
    pollerLite(['body', '#Phone', () => window.libphonenumber !== undefined], activate);
  
  })();
  