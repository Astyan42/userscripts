// ==UserScript==
// @name         Spira Commentaire
// @namespace    http://use.i.E.your.homepage/
// @version      1.8
// @description  enter something useful
// @match        http://thefactory.crossknowledge.com/*/Incident/*
// @match        https://thefactory.crossknowledge.com/*/Incident/*
// @exclude      http://thefactory.crossknowledge.com/*/Incident/List.aspx*
// @exclude      https://thefactory.crossknowledge.com/*/Incident/List.aspx*
// @updateURL    https://github.com/fchastanet/TamperMonkeyCrossknowledgeSpira/blob/master/spiraComment.js
// @downloadURL  https://github.com/fchastanet/TamperMonkeyCrossknowledgeSpira/blob/master/spiraComment.js
// @copyright    2012+, You
// @grant        none
// ==/UserScript==

// Wait for the page to load before anything
document.onreadystatechange = function () 
{
	if (document.readyState == "complete") 
	{
		var button = document.createElement("button");
		button.innerHTML = 'préremplir';
		button.setAttribute("onclick","var templateCommentaire = '<ul><li> <b>Corrected</b></li><li> <b>Problem :</b> <i> mandatory, describe...</i> </li><li> <b>Solution :</b> <i>mandatory, describe...</i></li><li> <b>Tests :</b> <i>mandatory, describe...</i></li><li> <b>Potential Impacts :</b> <i>mandatory, describe...</i> </li><li> <b>@QA (Non Reg.) :</b> <i>mandatory, describe...</i></li><li> <b>Origin :</b> <i>optionnal, regression cause, requirement, ...</i> (for maintenance)</li></ul>';	document.getElementById('cke_3_contents').querySelector('iframe').contentWindow.document.querySelector('body').innerHTML = templateCommentaire;document.getElementById('cke_2_contents').style.height = '200px'; return false;");
		document.querySelector("#cplMainContent_btnNewComment").parentNode.appendChild(button);
		document.querySelector("#cke_3_contents").style.height="170px";
	}
};
