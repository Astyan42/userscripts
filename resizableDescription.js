// ==UserScript==
// @name       description resizable spira
// @namespace  http://use.i.E.your.homepage/
// @version    0.2
// @description  enter something useful
// @match      http://thefactory.crossknowledge.com/14/*
// @match		http://thefactory.crossknowledge.com/10/*
// @exclude    http://thefactory.crossknowledge.com/10/Incident/List.aspx*
// @exclude 	http://thefactory.crossknowledge.com/14/Incident/List.aspx*
// @updateURL  https://github.com/Astyan42/userscripts/raw/master/resizableDescription.js
// @downloadURL  https://github.com/Astyan42/userscripts/raw/master/resizableDescription.js
// @copyright  2012+, You
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==


$(".rteDiv").css("resize", "both");
$(".rteDiv").parent().parent().css("height", "auto");