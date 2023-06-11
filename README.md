# YouTube URL Redirection

This userscript redirects YouTube links to piped.kavin.rocks.

## Installation

1. Install the TamperMonkey extension for your web browser.
2. Click on the TamperMonkey extension and select "Create new script."
3. Copy and paste the contents of the script.js file into the new script.
4. Save the script using `Ctrl + S` (or `Command + S` on macOS).

The script will automatically redirect all YouTube links to piped.kavin.rocks whenever you visit a YouTube page.

## Description

The YouTube URL Redirection userscript redirects any URL matching `*://*.youtube.com/*` to the corresponding URL on piped.kavin.rocks. This allows you to browse YouTube content using the piped frontend, which is a free and open-source alternative to the original YouTube interface.

## Script Details

- **Name:** YouTube URL Redirection
- **Namespace:** http://tampermonkey.net/
- **Version:** 1.0
- **Author:** Subhanshu Prasad
- **Match URLs:** `*://*.youtube.com/*`
- **Grant Permissions:** None

The script uses the `window.location.href` property to replace the current YouTube URL with the corresponding URL on piped.kavin.rocks. It redirects the page by setting the `window.location.href` to the modified URL.

## Contributions

Contributions to this script are welcome! Feel free to submit any bug reports, feature requests, or pull requests.


