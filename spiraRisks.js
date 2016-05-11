// ==UserScript==
// @name         Spira Risks
// @namespace    http://use.i.E.your.homepage/
// @version      1.1
// @description  enter something useful
// @match        http://thefactory.crossknowledge.com/*/Incident/*
// @match        https://thefactory.crossknowledge.com/*/Incident/*
// @exclude      http://thefactory.crossknowledge.com/*/Incident/List.aspx*
// @exclude      https://thefactory.crossknowledge.com/*/Incident/List.aspx*
// @updateURL    https://github.com/Astyan42/userscripts/raw/master/spiraRisks.js
// @downloadURL  https://github.com/Astyan42/userscripts/raw/master/spiraRisks.js
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
    

    // Create Low button    
    var lowButton = document.createElement("button");
    lowButton.innerHTML = "LOW";
    referenceNode.parentNode.insertBefore(lowButton, referenceNode.nextSibling);
    
    lowButton.onclick = function() {
        return buttonOnCLick(dropDownId, "3-Low (Just dedicated Test)");
    };
    // Create Med button    
    var medButton = document.createElement("button");
    medButton.innerHTML = "MED";
    referenceNode.parentNode.insertBefore(medButton, referenceNode.nextSibling);
    
    medButton.onclick = function() {
        return buttonOnCLick(dropDownId, "2-Medium (specific non-reg required)");
    };
    // Create High button    
    var highButton = document.createElement("button");
    highButton.innerHTML = "HIGH";
    referenceNode.parentNode.insertBefore(highButton, referenceNode.nextSibling);
    
    highButton.onclick = function() {
        return buttonOnCLick(dropDownId, "1-Major (general non-reg required)");
    };
}

createButton('cplMainContent_tblFields_Custom_18');