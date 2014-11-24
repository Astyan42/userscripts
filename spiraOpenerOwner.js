// ==UserScript==
// @name       Spira Opener & Owner
// @namespace  http://use.i.E.your.homepage/
// @version    1
// @description  enter something useful
// @match      http://thefactory.crossknowledge.com/14/*
// @match		http://thefactory.crossknowledge.com/10/*
// @match      https://thefactory.crossknowledge.com/14/*
// @match		https://thefactory.crossknowledge.com/10/*
// @exclude    http://thefactory.crossknowledge.com/10/Incident/List.aspx*
// @exclude 	http://thefactory.crossknowledge.com/14/Incident/List.aspx*
// @updateURL  https://github.com/Astyan42/userscripts/raw/master/spiraOpenerOwner.js
// @downloadURL  https://github.com/Astyan42/userscripts/raw/master/spiraOpenerOwner.js
// @copyright  2012+, You
// @grant		none
// ==/UserScript==


function buttonOnCLick(dropDownId)
{
    var myName = document.querySelector("#tstGlobalNavigation_mnuUserOptions span").innerHTML;

    var dropDown = $find(dropDownId);
    var items = dropDown.get_items();

    for (i = 0; i < items.length; i++)
    {
        if(myName == items[i].get_text())
        {
            dropDown.set_selectedItem(items[i]);
        }
    }
    return false;
}

function createButton(dropDownId)
{
    var el = document.createElement("button");
    el.innerHTML = "ME";
    el.onclick = function() {
        return buttonOnCLick(dropDownId);
    };

    var referenceNode = document.querySelector("#" + dropDownId);
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

createButton('cplMainContent_ddlOwner');
createButton('cplMainContent_ddlOpener');
