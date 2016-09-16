// ==UserScript==
// @name       Spira Commentaires
// @namespace  http://use.i.E.your.homepage/
// @version    1.9
// @description  Adds buttons that generate comments templates.
// @match      http://thefactory.crossknowledge.com/14/*
// @match		http://thefactory.crossknowledge.com/10/*
// @match      https://thefactory.crossknowledge.com/14/*
// @match		https://thefactory.crossknowledge.com/10/*
// @exclude    http://thefactory.crossknowledge.com/10/Incident/List.aspx*
// @exclude 	http://thefactory.crossknowledge.com/14/Incident/List.aspx*
// @updateURL  https://github.com/Astyan42/userscripts/raw/master/spiraCommentaire.js
// @downloadURL  https://github.com/Astyan42/userscripts/raw/master/spiraCommentaire.js
// @copyright  2012+, You
// @grant		none
// ==/UserScript==

function addButton(label, onClick, destination) {
    var span = document.createElement("span");
    span.className = "cke_toolbar";
        
    var link = document.createElement("a");
    link.className = "cke_button";
    link.style.border = "1px solid #adadad";
    link.style.backgroundColor = "#e6e6e6";
    link.style.borderRadius = "2px";
    link.style.marginRight = "5px";
    
    var spanLabel = document.createElement("span");
    spanLabel.className = "cke_button_label";
        
    spanLabel.innerHTML = label;
    spanLabel.style.display = "inline";
    link.appendChild(spanLabel);
        
    link.setAttribute("onclick", onClick);
    span.setAttribute("width","200px");
    span.appendChild(link);
    if (document.querySelector(destination)) {
        document.querySelector(destination).appendChild(span);
    }
}

// Wait for the page to load before anything
document.onreadystatechange = function () 
{
    var span;
    var link;
    var label;
	if (document.readyState == "complete") 
	{
        addButton('Pre-fill for opening',
                  "var templateCommentaire = '<ul><li> <b>Context :</b>  </li><li> <b>Revision/build :</b> &nbsp; </li><li> <b>URL :</b>&nbsp; </li><li><b>Current Outcome :</b>  </li><li><b>Intended Outcome :</b>  </li></ul>'; var doc = document.getElementsByClassName('cke_wysiwyg_frame cke_reset'); doc[1].contentWindow.document.body.innerHTML = templateCommentaire ;return false;",
                  "#cplMainContent_pnlOverview_Description .cke_toolbox");
	}
    
    if (document.readyState == "complete") 
    {
        addButton('Pre-fill for closure OK',
                  "var templateCommentaire = '<ul><li><span style=\"background-color: rgb(102, 255, 153);\"><b>Status :</b> <i> Mandatory</i> </li><li><span style=\"background-color: rgb(102, 255, 153);\"><b>Revision or Build :</b> <i> Mandatory</i></span></li><li><span style=\"background-color: rgb(102, 255, 153);\"><b>Context :</b> <i> Mandatory (Phase, Environment, Browser...)</i></span></li><li><span style=\"background-color: rgb(102, 255, 153);\"><b>URL :</b> <i> Mandatory</i></span></li><li><span style=\"background-color: rgb(102, 255, 153);\"><b>Scenario (Screen Capture) :</b> <i> Attachement link optional </i></span></li><li><span style=\"background-color: rgb(102, 255, 153);\"><b>Scenario (Video Capture) :</b> <i> Attachement link optional</i></span></li><li><span style=\"background-color: rgb(102, 255, 153);\"><b>Comments :</b> <i>Details mandatory...</i></span></li></ul>'; var doc = document.getElementsByClassName('cke_wysiwyg_frame cke_reset'); doc[2].contentWindow.document.body.innerHTML = templateCommentaire;return false;",
                  "#cke_cplMainContent_txtResolution .cke_toolbox");
    }
    
    if (document.readyState == "complete") 
    {
        addButton('Pre-fill for closure KO',
                  "var templateCommentaire = '<ul><li><span style=\"background-color: #FE642E;\"><b>Status :</b> <i> Mandatory</i> </li><li><span style=\"background-color: #FE642E;\"><b>Revision or Build :</b> <i> Mandatory</i></span></li><li><span style=\"background-color: #FE642E;\"><b>Context :</b> <i> Mandatory (Phase, Environment, Browser...)</i></span></li><li><span style=\"background-color: #FE642E;\"><b>URL :</b> <i> Mandatory</i></span></li><li><span style=\"background-color:#FE642E;\"><b>Scenario (Screen Capture) :</b> <i> Attachement link optional </i></span></li><li><span style=\"background-color: #FE642E;\"><b>Scenario (Video Capture) :</b> <i> Attachement link optional</i></span></li><li><span style=\"background-color: #FE642E;\"><b>Current Outcome :</b> <i>Details mandatory...</i></span></li><li><span style=\"background-color: #FE642E;\"><b>Intended Outcome :</b> <i>Details mandatory...</i></span></li></ul>'; var doc = document.getElementsByClassName('cke_wysiwyg_frame cke_reset'); doc[2].contentWindow.document.body.innerHTML = templateCommentaire;return false;",
                  "#cke_cplMainContent_txtResolution .cke_toolbox");
    }
    
    if (document.readyState == "complete")
    {
        addButton('Pre-fill for correction',
                  "var templateCommentaire = '<ul><li> <b>Corrigé</b> </li><li> <b>Problème * :</b> obligatoire</li><li> <b>Solution * :</b> obligatoire</li><li> <b>Tests * :</b> obligatoire</li><li> <b>Impacts potentiels :</b> Ø</li><li> <b>@QA (Non Reg.) :</b> Ø</li><li> <b>@Support :</b> Ø</li><li> <b>Origine :</b> Ø</li></ul>'; var doc = document.getElementsByClassName('cke_wysiwyg_frame cke_reset'); doc[2].contentWindow.document.body.innerHTML = templateCommentaire;return false;",
                  "#cke_cplMainContent_txtResolution .cke_toolbox");
    }
};
