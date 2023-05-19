(function() {
    'use strict';
    var shared = {
        ID: "Dice-02",
        VARIATION: "1",
        CLIENT: "Dice"
    };
    const setup = () => {
        const {
            ID,
            VARIATION
        } = shared;
        document.documentElement.classList.add(ID);
        document.documentElement.classList.add(`${ID}-${VARIATION}`);
    };
    var activate = () => {
        setup();
        const formId = document.querySelector('[name="formid"]').value;
        const mktForm = window.MktoForms2.getForm(formId);
        const {
            isPossiblePhoneNumber
        } = window.libphonenumber;
        mktForm.onValidate((isValid) => {
            //Get the values
            const vals = mktForm.vals();
            var phoneNumStr = vals.Phone;
            phoneNumStr = String(phoneNumStr);
            phoneNumStr = phoneNumStr.split('');
            if (!phoneNumStr) return;
            //const phoneNumber = phoneNumStr.match(/\d/g).join('');

            if ((isPossiblePhoneNumber(vals.Phone) || isValid) && vals.Company !== '') {
                const phoneErr = document.querySelector('#Phone + .mktoError');
                if (phoneErr) {
                    document.querySelector('#Phone + .mktoError').style.display = 'none';
                }
                mktForm.submittable(true);
                return;
            }
            //document.querySelector('#Phone + .mktoError').style.display = 'block';
            mktForm.submittable(false);
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