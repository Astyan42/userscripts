// ==UserScript==
// @name         description resizable spira
// @namespace    http://use.i.E.your.homepage/
// @version      0.4
// @description  enter something useful
// @match        http://thefactory.crossknowledge.com/*/Incident/*
// @match        https://thefactory.crossknowledge.com/*/Incident/*
// @exclude      http://thefactory.crossknowledge.com/*/Incident/List.aspx*
// @exclude      https://thefactory.crossknowledge.com/*/Incident/List.aspx*
// @updateURL    https://github.com/Astyan42/userscripts/raw/master/resizableDescription.js
// @downloadURL  https://github.com/Astyan42/userscripts/raw/master/resizableDescription.js
// @copyright    2012+, You
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(".rteDiv").css("resize", "both");
$(".rteDiv").parent().parent().css("height", "auto");