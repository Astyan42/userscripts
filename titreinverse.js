// ==UserScript==
// @name       Put [IN:] or [RQ:] at the beginning of the title.
// @namespace  http://use.i.E.your.homepage/
// @version    1.5
// @description  Adds [IN:xxxxx] or [RQ:xxxxx] at the beginning of the title. It is usefull if you want to copy-paste the title when you commit something because it is required by the hook.
// @match      http://thefactory.crossknowledge.com/14/*
// @match		http://thefactory.crossknowledge.com/10/*
// @match      https://thefactory.crossknowledge.com/14/*
// @match		https://thefactory.crossknowledge.com/10/*
// @exclude    http://thefactory.crossknowledge.com/10/Incident/List.aspx*
// @exclude 	http://thefactory.crossknowledge.com/14/Incident/List.aspx*
// @copyright  2012+, You
// ==/UserScript==

// Wait for the page to load before anything
$(window).load(function() {

    var inValue = document.getElementById("cplMainContent_lblIncidentId");
    if (inValue) {
        inValue = inValue.innerHTML;
        var incidentTitle = document.getElementById("cplMainContent_lblIncidentTitle");
        incidentTitle.innerHTML = inValue + " " + incidentTitle.innerHTML;
    }

    var rqValue = document.getElementById("cplMainContent_lblRequirementId");
    if (rqValue) {
        rqValue = rqValue.innerHTML;
        var rqTitle = document.getElementById("cplMainContent_lblRequirementName");
        rqTitle.innerHTML = "[" + rqValue + "] " + rqTitle.innerHTML;
    }
});
