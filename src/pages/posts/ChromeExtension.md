---
layout: '@/templates/BasePost.astro'
title: Chrome Extension Project
description: My Daily Puzzle Opener
pubDate: 2024-05-16T00:00:00Z
imgSrc: '/assets/images/chromeExtensionIconLarge.png'
imgAlt: 'Image post 6'
---



# 👋 Excited to share my latest small project released on the Chrome Web Store!

Introducing a Chrome extension designed to kickstart your day with fun brain training:

This Chrome extension's sole purpose is to open your favorite Daily puzzles every morning. Once a day when you first open Chrome, all of your favorite puzzles will be there to start your day just right.

The extension currently includes popular puzzles like Wordle, Worldle, NYT Crossword, and more. Plus, it's easy to add your own puzzle to be opened.

## Links

- [GitHub Repository](https://github.com/skyboak/DailyPuzzleOpener_ChromeExtension.git "GitHub Repository")
- [Chrome Web Store Page](https://chromewebstore.google.com/detail/my-daily-puzzle-opener/nkjinednhefadooeaekmlcnhgffeaokj "Chrome Web Store Page")

![First Screenshot of the extension](/assets/images/ExtensionSC1.png)
![Second Screenshot of the extension](/assets/images/ExtensionSC2.png)


Built using the classic HTML, CSS, and JS, with integration of Chrome extensions API and Service workers, this project marks the beginning of an exciting journey into extension development.

## Code Snippet

```javascript
chrome.runtime.onStartup.addListener(() => {
  isNewDay().then(isNew => {
    if (isNew) {
      if (Array.isArray(userPuzzles)) {
        userPuzzles.forEach(puzzle => {
          if (puzzle.enabled) {
            chrome.tabs.create({ url: puzzle.url });
          }
        });
      }

      const today = new Date().toLocaleDateString();
      chrome.storage.local.set({ 'lastCheck': today }, function () {
        console.log('Last check date is set to ' + today);
      });
    }
  });
});
```