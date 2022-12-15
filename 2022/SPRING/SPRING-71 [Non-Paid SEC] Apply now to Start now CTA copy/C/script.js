(function() {
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }
    window._vis_opt_queue = window._vis_opt_queue || [];
    waitForElm('.start-application-form').then(function(elm) {
        elm.addEventListener('submit', function() {
           if(elm.classList.contains('HfUfE')){
             window._vis_opt_queue.push(function() {
                  _vis_opt_goal_conversion(299);
             });
           }
        });
    });
})();
