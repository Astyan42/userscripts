// ==UserScript==
// @name       Mise [IN:] en debut de titre
// @namespace  http://use.i.E.your.homepage/
// @version    1.1
// @description  enter something useful
// @match      http://thefactory.crossknowledge.com/14/*
// @match		http://thefactory.crossknowledge.com/10/*
// @exclude    http://thefactory.crossknowledge.com/10/Incident/List.aspx*
// @exclude 	http://thefactory.crossknowledge.com/14/Incident/List.aspx*
// @updateURL  https://github.com/Astyan42/userscripts/raw/master/titreinverse.js
// @downloadURL  https://github.com/Astyan42/userscripts/raw/master/titreinverse.js
// @copyright  2012+, You
// ==/UserScript==

var title = document.getElementById("cplMainContent_lblIncidentTitle");
var regexPattern = /\[IN:[0-9]*\]/i;
var inValue = regexPattern.exec(title.innerHTML);
title.innerHTML = inValue[0]+" "+title.innerHTML.replace(inValue[0],"");