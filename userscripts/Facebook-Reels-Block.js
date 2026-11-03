// ==UserScript==
// @name        Facebook-Reels-Block
// @description Block Facebook Reels
// @match          *://www.facebook.com/*
// @grant          none
// @inject-into    content
// ==/UserScript==

(function () {
    'use strict';

    function blockReels() {
        document.querySelectorAll('h3').forEach(h3 => {
            if (h3.textContent.trim() === 'Reels') {
                let element = h3;

                // Walk up the DOM to find the section container
                for (let i = 0; i < 4 && element.parentElement; i++) {
                    element = element.parentElement;
                }

                element.style.display = 'none';
                console.log('[FB Reels Block] Hidden', element);
            }
        });
    }

    blockReels();

    const observer = new MutationObserver(() => {
        blockReels();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
