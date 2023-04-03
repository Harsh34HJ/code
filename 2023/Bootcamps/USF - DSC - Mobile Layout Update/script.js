// /* EDITELEMENT */
// vwo_$(".style__RightComponentWrapper-pbmd7u-2").vwoAttr({"id":"apply"});
// /* ADDELEMENT */
// vwo_$(".styles__SiteHeader-sc-107j1hp-5").vwoElement({"position":"before","html":"<div style=\"min-height: 100px; border: 1px solid #ba00ff; width: 100%;\" vwo-element-id=\"1662497641918\"></div>","addElementId":1662497641918});
// /* CONTENT */
// vwo_$("[vwo-element-id='1662497641918']").replaceWith("<div class=\"navbar-wrapper\" style=\"left: 0px !important; top: 0px !important; position: relative !important; display: block !important;\" vwo-element-id=\"1662497641918\"> <nav> <ul class=\"navbar\"> <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#curriculum\" style=\"left: 0px !important; top: 0px !important; position: relative !important; display: block !important;\">Curriculum </a> </li> <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#mentorship\" style=\"left: 0px !important; top: 0px !important; position: relative !important; display: block !important;\">Mentorship </a> </li> <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#apply\" style=\"left: 0px !important; top: 0px !important; position: relative !important; display: block !important;\">Apply Now </a> </li> </ul> </nav> </div>");
// /* EDITELEMENT */
// vwo_$("#curriculum-preview > div:nth-of-type(1)").vwoAttr({"id":"curriculum"});
// /* EDITELEMENT */
// vwo_$("#industry-expert > div:nth-of-type(1)").vwoAttr({"id":""});
// /* EDITELEMENT */
// vwo_$("#fit-learning-into-life > div:nth-of-type(1)").vwoAttr({"id":"mentorship"});

/* EDITELEMENT */
vwo_$(".style__RightComponentWrapper-pbmd7u-2").vwoAttr({"id":"apply"});
//vwo_$(".styles__SiteHeader-sc-107j1hp-5").vwoElement({"position":"before","html":"<div style=\"min-height: 100px; border: 1px solid #ba00ff; width: 100%;\" vwo-element-id=\"1662497641918\"></div>","addElementId":1662497641918});
//vwo_$("[vwo-element-id='1662497641918']").replaceWith("<div class=\"navbar-wrapper\" style=\"left: 0px !important; top: 0px !important; position: relative !important; display: block !important;\" vwo-element-id=\"1662497641918\"> <nav> <ul class=\"navbar\"> <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#curriculum\" style=\"left: 0px !important; top: 0px !important; position: relative !important; display: block !important;\">Curriculum </a> </li> <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#mentorship\" style=\"left: 0px !important; top: 0px !important; position: relative !important; display: block !important;\">Mentorship </a> </li> <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#apply\" style=\"left: 0px !important; top: 0px !important; position: relative !important; display: block !important;\">Apply Now </a> </li> </ul> </nav> </div>");
/* CUSTOM CODE */
function loadTest() {
    var bodyEle = document.body;
    if (bodyEle.classList.contains('test-01')) { return; }
    document.body.classList.add('test-01');
    var running = false;
    var observer = new MutationObserver(function(mutationsList, observer) {
        for (var mutation of mutationsList) {
            if(running) return;
            initTest();
            running = true;
            setTimeout(function () { running = false; }, 100);
        }
    }).observe(document.body, {childList: true, subtree: true});
    function insertBefore(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode);
    }
	function initTest() {
		var newEl = document.createElement('div');
        newEl.innerHTML = '<div class="navbar-wrapper" style="left: 0px !important; top: 0px !important; position: relative !important; display: block !important;"><nav><ul class="navbar"><li class="nav-item"><a class="nav-link" href="#curriculum" style="left: 0px !important; top: 0px !important; position: relative !important; display: block !important;">Curriculum </a></li><li class="nav-item"><a class="nav-link" href="#mentorship" style="left: 0px !important; top: 0px !important; position: relative !important; display: block !important;">Mentorship </a></li><li class="nav-item"><a class="nav-link" href="#apply" style="left: 0px !important; top: 0px !important; position: relative !important; display: block !important;">Apply Now </a></li></ul></nav></div>';
        if(!document.querySelector('.navbar-wrapper')){
        	document.querySelector('[class^=styles__HeaderWrapper-sc]').append(newEl);
        }
	}
}
window.addEventListener('popstate', loadTest);
loadTest();
/* EDITELEMENT */
vwo_$("#curriculum-preview > div:nth-of-type(1)").vwoAttr({"id":"curriculum"});
/* EDITELEMENT */
vwo_$("#industry-expert > div:nth-of-type(1)").vwoAttr({"id":""});
/* EDITELEMENT */
vwo_$("#fit-learning-into-life > div:nth-of-type(1)").vwoAttr({"id":"mentorship"});
