// ==UserScript==
// @name         Spira Resolve
// @namespace    http://use.i.E.your.homepage/
// @version      1.1
// @description  enter something useful
// @match        http://thefactory.crossknowledge.com/*/Incident/*
// @match        https://thefactory.crossknowledge.com/*/Incident/*
// @exclude      http://thefactory.crossknowledge.com/*/Incident/List.aspx*
// @exclude      https://thefactory.crossknowledge.com/*/Incident/List.aspx*
// @updateURL    https://github.com/Astyan42/userscripts/raw/master/spiraResolve.js
// @downloadURL  https://github.com/Astyan42/userscripts/raw/master/spiraResolve.js
// @copyright    2012+, You
// ==/UserScript==

function buttonOnCLick(dropDownId, searchItem)
{
    var dropDown = $find(dropDownId);
    var items = dropDown._listDiv._items;


    for (i = 0; i < items.length; i++)
    {
        if(searchItem == items[i].get_text())
        {
            dropDown.set_selectedItem(items[i]);
        }
    }
    return false;
}

function createButton(dropDownId)
{
    var referenceNode = document.querySelector("#" + dropDownId);
    

    // Create Resolve button    
    var lowButton = document.createElement("button");
    lowButton.innerHTML = "SOLVE";
    referenceNode.parentNode.insertBefore(lowButton, referenceNode.nextSibling);
    
    lowButton.onclick = function() {
        return buttonOnCLick(dropDownId, "OK: Resolved in Code");
    };
    
}

createButton('cplMainContent_tblFields_Custom_19');