(function(){
	var FEHelper = {
        onLoadElement: function(selector, trigger, delayInterval, delayTimeout) {
            if (
                document &&
                document.querySelectorAll(selector) &&
                document.querySelectorAll(selector).length > 0
            ) {
                trigger();
            } else {
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
        live: function(selector, event, callback, context) {
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent('on' + type, handler);
                else el.addEventListener(type, handler);
            }
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
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found, el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        },
        trackGAEvent: function($eventCategory, $eventAction, $eventLabel) {
            if ('ga' in window) {
                ga.getAll()[0].send('event', {
                    eventCategory: $eventCategory,
                    eventAction: $eventAction,
                    eventLabel: $eventLabel,
                });
            }
        },
        updateInnerHtml: function(ele, value) {
            if (ele) {
                ele.innerHTML = value;
            }
        }
    };
    function loadTest(){
    	document.body.classList.add('dice-104');
    	if(document.querySelector('#navbarDropdown-7')){
            document.querySelector('#navbarDropdown-7').classList.add('hiring-cta');
    	}
    	if(document.querySelector('#smart-toggle-for-employer')){
    		document.querySelector('#smart-toggle-for-employer').classList.add('hiring-cta');
    	}
    	if(document.querySelector('#msmart-toggle-for-employer')){
    		document.querySelector('#msmart-toggle-for-employer').classList.add('hiring-cta');;
    	}
        var check = setInterval(function(){
			if(document.querySelectorAll('dhi-seds-nav-header.hydrated').length > 0 && document.querySelector('dhi-seds-nav-header.hydrated').shadowRoot != null){
				clearInterval(check);
				var targetEle = document.querySelector('dhi-seds-nav-header.hydrated').shadowRoot.querySelector('dhi-seds-nav-header-display.hydrated').shadowRoot.querySelectorAll('.links > ul')[1].querySelectorAll('li')[0];
				targetEle.addEventListener('click', function() {
		            FEHelper.trackGAEvent("funnelenvy","click","For Employers");
		        });
			}
		},500);
        var check2 = setInterval(function(){
			if(document.querySelectorAll('dhi-header.hydrated').length > 0 && document.querySelector('dhi-header.hydrated').shadowRoot != null){
				clearInterval(check2);
				var targetEle1 = document.querySelector('dhi-header.hydrated').shadowRoot.querySelectorAll('dhi-list-item.hydrated')[3].shadowRoot.querySelector('.item');
				targetEle1.addEventListener('click', function() {
		            FEHelper.trackGAEvent("funnelenvy","click","For Employers");
		        });
			}
		},500);
		FEHelper.live('a.hiring-cta', 'click', function() {
            FEHelper.trackGAEvent("funnelenvy","click","For Employers");
        });
    }
    FEHelper.onLoadElement('body', loadTest, 50, 10000);
})();