// ==UserScript==
// @name         Spira Opener & Owner
// @namespace    http://use.i.E.your.homepage/
// @version      1.5
// @description  enter something useful
// @match        http://thefactory.crossknowledge.com/*/Incident/*
// @match        https://thefactory.crossknowledge.com/*/Incident/*
// @exclude      http://thefactory.crossknowledge.com/*/Incident/List.aspx*
// @exclude      https://thefactory.crossknowledge.com/*/Incident/List.aspx*
// @updateURL    https://github.com/fchastanet/TamperMonkeyCrossknowledgeSpira/blob/master/spiraOpenerOwner.js
// @downloadURL  https://github.com/fchastanet/TamperMonkeyCrossknowledgeSpira/blob/master/spiraOpenerOwner.js
// @copyright    2012+, You
// @grant        none
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

    // Create QA Team and a PHP Team button
    if (dropDownId == 'cplMainContent_ddlOwner') {
        var qaButton = document.createElement("button");
        qaButton.innerHTML = "QA Team";
        referenceNode.parentNode.insertBefore(qaButton, referenceNode.nextSibling);

        qaButton.onclick = function() {
            return buttonOnCLick(dropDownId, "QA Team");
        };

        var teamButton = document.createElement("button");
        var teamButtonLabel = "";
        if(document.URL.match(/http(s)?:\/\/thefactory.crossknowledge\.com\/10\/*/)){
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

createButton('cplMainContent_ddlOwner');
createButton('cplMainContent_ddlOpener');
createButton('cplMainContent_customFields_Custom_01');
createButton('cplMainContent_tblFields_Custom_05');
createButton('cplMainContent_tblFields_Custom_02');
