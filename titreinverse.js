// ==UserScript==
// @name       Mise [IN:] en debut de titre
// @namespace  http://use.i.E.your.homepage/
// @version    1.2
// @description  enter something useful
// @match      http://thefactory.crossknowledge.com/14/*
// @match		http://thefactory.crossknowledge.com/10/*
// @exclude    http://thefactory.crossknowledge.com/10/Incident/List.aspx*
// @exclude 	http://thefactory.crossknowledge.com/14/Incident/List.aspx*
// @updateURL  https://github.com/Astyan42/userscripts/raw/master/titreinverse.js
// @downloadURL  https://github.com/Astyan42/userscripts/raw/master/titreinverse.js
// @copyright  2012+, You
// ==/UserScript==

var title = document.getElementById('cplMainContent_lblIncidentTitle');

var inValue = /\[(IN:[0-9]*)\]/i.exec(title.innerHTML);
title.innerHTML = '<a href="http://prod.epistema.com/spira/?project=10&artifact=' + inValue[1] + '">' + inValue[0] + '</a> ' + title.innerHTML.replace(inValue[0], '');

var rqValue = /\[(RQ:[0-9]*)\]/i.exec(title.innerHTML);
if (rqValue != null)
{
 title.innerHTML = '<a href="http://prod.epistema.com/spira/?project=11&artifact=' + rqValue[1] + '">' + rqValue[0] + '</a>' + title.innerHTML.replace(rqValue[0], '');
}