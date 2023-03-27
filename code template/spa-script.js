(function(){
    let bodyClass = 'test-demo';
    var pathsToCheckUrls = [
        { path:"/products/" },
        { path:"/collections/all/products/" },
        { path:"/collections/product-name/products/" }
    ];	
    
    function loadTest() {
        document.querySelector('body').classList.add(bodyClass);
    }

    function removeTest() {
        document.querySelector('body').classList.remove(bodyClass);
    }

    history.pushState = (function(f) {
        return function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function(f) {
        return function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.replaceState);
    window.addEventListener('popstate', function() {
        window.dispatchEvent(new Event('locationchange'));
    });
    window.addEventListener('locationchange', function() {
        url = location.href;
        urlCheck(url);
    });
    var url = location.href;
    urlCheck(url);
    
    function urlCheck(url) {
        var allUrlString = '';
        const pathsToCheckUrls = pathsToCheck.map(function(pth){
            return pth.path;
        });
        if (pathsToCheckUrls.indexOf(window.location.pathname) >= 0) {
            allUrlString = window.location.href;
        }
        if (isSameUrl(url, allUrlString, true)) {
            loadTest();
        } else {
            removeTest();
        }
    }
    
    function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
        currentUrl = currentUrl.includes("#") ? currentUrl.slice(0, currentUrl.indexOf("#")) : currentUrl;
        specifiedUrl = specifiedUrl.includes("#") ? specifiedUrl.slice(0, specifiedUrl.indexOf("#")) : specifiedUrl;
        if (!includeQueryParams)
            currentUrl = currentUrl.includes("?") ? currentUrl.slice(0, currentUrl.indexOf("?")) : currentUrl;
        if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
            return true;
        return false;
    }
    
    function insertBefore(el, referenceNode) {
	    referenceNode.parentNode.insertBefore(el, referenceNode);
	}

	function insertAfter(el, referenceNode) {
	    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
	}
    
    function waitForElm(selector) {
	    return new Promise(function(resolve) {
	        if (document.querySelector(selector)) {
	            return resolve(document.querySelector(selector));
	        }
	        const observer = new MutationObserver(function(mutations) {
	            if (document.querySelector(selector)) {
	                resolve(document.querySelector(selector));
	                observer.disconnect();
	            }
	        }).observe(document.body, {childList: true,subtree: true});
	    });
	}
})();