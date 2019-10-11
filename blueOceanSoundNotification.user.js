// ==UserScript==
// @name         Blue Ocean Sound notification
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This will trigger a chrome notification / a sound when a build is finished in jenkins
// @author       You
// @match        http://nceswbprodba75.etv.nce.amadeus.net/blue/organizations/jenkins/*
// @updateURL    https://github.com/Astyan42/userscripts/raw/master/blueOceanSoundNotification.user.js
// @downloadURL  https://github.com/Astyan42/userscripts/raw/master/blueOceanSoundNotification.user.js
// @grant        GM_notification
// @run-at       document-end
// ==/UserScript==

(function() {
    var loadingPageObserver = new MutationObserver(function(loadingMutations) {
        loadingMutations.forEach(function(loadingMutation) {
            console.log(loadingMutation);
            // Waits until page is fully loaded
            if(loadingMutation.oldValue.includes("complete")){
                loadingPageObserver.disconnect();
                let blueOceanHeader = document.querySelectorAll(".BasicHeader.RunDetailsHeader")[0];
                if(blueOceanHeader === undefined || blueOceanHeader.classList.contains("BasicHeader--success") || blueOceanHeader.classList.contains("BasicHeader--failure") || blueOceanHeader.classList.contains("BasicHeader--aborted")){
                    console.log("nothing to do");
                }
                else{
                    console.log("page has been fully loaded");
                    var mutationObserver = new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                            console.log(mutation);
                            let desc = "";
                            if(blueOceanHeader.classList.contains("BasicHeader--success")){
                                desc = "Build Success";
                            }
                            if(blueOceanHeader.classList.contains("BasicHeader--aborted")){
                                desc = "Build Aborted";
                            }
                            if(blueOceanHeader.classList.contains("BasicHeader--failure")){
                                desc = "Build fails";
                            }
                            if(desc !== ""){
                                player.play();
                                GM_notification({text:desc, title:"Jenkins build finished", silent:false, onclick: () => {
                                    window.focus ();
                                }});
                            }
                        });
                    });
                    mutationObserver.observe(blueOceanHeader, {
                        attributes: true,
                        characterData: false,
                        childList: false,
                        subtree: false,
                        attributeOldValue: false,
                        characterDataOldValue: false
                    });
                }
            };
        });
    });

    let player = document.createElement("audio");
    player.src = "https://notificationsounds.com/soundfiles/258be18e31c8188555c2ff05b4d542c3/file-sounds-1126-accomplished.mp3";
    let loadingSelector = "#loadbar"
    let loadingNode = document.querySelectorAll(loadingSelector)
    loadingPageObserver.observe(loadingNode[0], {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
    });
})();