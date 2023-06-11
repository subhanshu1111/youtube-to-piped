// ==UserScript==
// @name         YouTube URL redirection
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirects youtube.com to piped.kavin.rocks directly
// @author       Subhanshu Prasad
// @match        *://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Redirect youtube.com to piped.kavin.rocks directly
    function redirectURL() {
        window.location.replace('https://piped.kavin.rocks' + window.location.pathname + window.location.search);
    }

    // Redirect when the DOM is ready
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        redirectURL();
    } else {
        document.addEventListener('DOMContentLoaded', redirectURL);
    }
})();
