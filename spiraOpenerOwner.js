// ==UserScript==
// @name       Spira Opener & Owner
// @namespace  http://use.i.E.your.homepage/
// @version    1.1
// @description  enter something useful
// @match      http://thefactory.crossknowledge.com/14/*
// @match       http://thefactory.crossknowledge.com/10/*
// @match      https://thefactory.crossknowledge.com/14/*
// @match       https://thefactory.crossknowledge.com/10/*
// @exclude    http://thefactory.crossknowledge.com/10/Incident/List.aspx*
// @exclude     http://thefactory.crossknowledge.com/14/Incident/List.aspx*
// @updateURL  https://github.com/Astyan42/userscripts/raw/master/spiraOpenerOwner.js
// @downloadURL  https://github.com/Astyan42/userscripts/raw/master/spiraOpenerOwner.js
// @copyright  2012+, You
// @grant       none
// ==/UserScript==


function buttonOnCLick(dropDownId, searchItem)
{
    var dropDown = $find(dropDownId);
    var items = dropDown.get_items();

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
    
    // Create QA-Team and a PHP-Team button
    if (dropDownId == 'cplMainContent_ddlOwner') {
        var qaButton = document.createElement("button");
        qaButton.innerHTML = "QA-Team";
        referenceNode.parentNode.insertBefore(qaButton, referenceNode.nextSibling);
        
        qaButton.onclick = function() {
            return buttonOnCLick(dropDownId, "QA- Team");
        }

        var phpButton = document.createElement("button");
        phpButton.innerHTML = "PHP-Team";
        referenceNode.parentNode.insertBefore(phpButton, referenceNode.nextSibling);
        
        phpButton.onclick = function() {
            return buttonOnCLick(dropDownId, "PHP- Team");
        }
    }

    // Create Me button    
    var meButton = document.createElement("button");
    meButton.innerHTML = "ME";
    referenceNode.parentNode.insertBefore(meButton, referenceNode.nextSibling);
    
    meButton.onclick = function() {
        var myName = document.querySelector("#tstGlobalNavigation_mnuUserOptions span").innerHTML;
        return buttonOnCLick(dropDownId, myName);
    };
}

createButton('cplMainContent_ddlOwner');
createButton('cplMainContent_ddlOpener');
createButton('cplMainContent_tblFields_Custom_01');