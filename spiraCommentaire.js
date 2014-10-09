// ==UserScript==
// @name       Spira Commentaire
// @namespace  http://use.i.E.your.homepage/
// @version    1.5
// @description  enter something useful
// @match      http://thefactory.crossknowledge.com/14/*
// @match		http://thefactory.crossknowledge.com/10/*
// @match      https://thefactory.crossknowledge.com/14/*
// @match		https://thefactory.crossknowledge.com/10/*
// @exclude    http://thefactory.crossknowledge.com/10/Incident/List.aspx*
// @exclude 	http://thefactory.crossknowledge.com/14/Incident/List.aspx*
// @updateURL  https://github.com/Astyan42/userscripts/raw/master/spiraCommentaire.js
// @downloadURL  https://github.com/Astyan42/userscripts/raw/master/spiraCommentaire.js
// @copyright  2012+, You
// ==/UserScript==

var tdButton = document.createElement("td");
var button = document.createElement("button");
button.innerHTML = 'pré-remplir';
tdButton.setAttribute("width","70px");
tdButton.appendChild(button);
button.setAttribute("onclick","var templateCommentaire = '<ul><li> <b>Corrigé</b></li><li> <b>Problème :</b> <i> obligatoire, détailler...</i> </li><li> <b>Solution :</b> <i>obligatoire, détailler...</i></li><li> <b>Tests :</b> <i>obligatoire, détailler...</i></li><li> <b>Impacts potentiels :</b> <i>obligatoire, détailler...</i> </li><li> <b>@QA (Non Reg.) :</b> <i>obligatoire, détailler...</i></li><li> <b>@Support :</b> <i>optionnel</i></li><li> <b>Origine :</b> <i>optionnel cause de la régression</i> (pour la maintenance)</li></ul>';	document.querySelector('#cplMainContent_pnlOverview_Comments .rteDiv').innerHTML = templateCommentaire;return false;");
document.querySelector("#cplMainContent_pnlOverview_Comments .rteBack tr").appendChild(tdButton);