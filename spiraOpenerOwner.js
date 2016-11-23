// ==UserScript==
// @name       Spira Opener and Owner
// @namespace  http://use.i.E.your.homepage/
// @version    1.6
// @description  Adds buttons for helping filling fields like opener and owner.
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
    if (referenceNode) {

        // Create QA Team and a PHP Team or NET Team button
        if (dropDownId == 'cplMainContent_ddlOwner') {

            // Create QA button
            var qaButton = document.createElement("button");
            qaButton.innerHTML = "QA Team";
            referenceNode.parentNode.insertBefore(qaButton, referenceNode.nextSibling);
            qaButton.onclick = function() {
                return buttonOnCLick(dropDownId, "QA Team");
            };

            // Create Team button
            var teamButton = document.createElement("button");
            var teamButtonLabel = "";
            if (document.URL.match(/http(s)?:\/\/thefactory.crossknowledge\.com\/10\/*/)
                ||document.URL.match(/http(s)?:\/\/thefactory.crossknowledge\.com\/27\/*/)
                ||document.URL.match(/http(s)?:\/\/thefactory.crossknowledge\.com\/8\/*/)) {
                teamButtonLabel = "NET Team";
            }
            else{
                teamButtonLabel = "PHP-A Team";
            }
            teamButton.innerHTML = teamButtonLabel;
            referenceNode.parentNode.insertBefore(teamButton, referenceNode.nextSibling);
            teamButton.onclick = function() {
                return buttonOnCLick(dropDownId, teamButtonLabel);
            };

            // Create --None-- button
            var noneButton = document.createElement("button");
            noneButton.innerHTML = "Nobody";
            referenceNode.parentNode.insertBefore(noneButton, referenceNode.nextSibling);
            noneButton.onclick = function() {
                return buttonOnCLick(dropDownId, "-- None --");
            };
        }

        // Create Me button
        var meButton = document.createElement("button");
        meButton.innerHTML = "ME";
        referenceNode.parentNode.insertBefore(meButton, referenceNode.nextSibling);
        meButton.onclick = function() {
            var myName = document.querySelector("#tstGlobalNavigation_lblUserFullName").innerHTML;
            return buttonOnCLick(dropDownId, myName);
        };
    }
    
}

// Wait for the page to load before anything
window.onload = function() {
    createButton('cplMainContent_ddlOwner');               // Owner
    createButton('cplMainContent_ddlOpener');              // Detected by
    //createButton('cplMainContent_customFields_Custom_01'); 
    createButton('cplMainContent_customFields_Custom_05'); // Last corrector
    createButton('cplMainContent_customFields_Custom_06'); // Last validator
};
