---
layout: '@/templates/BasePost.astro'
title: MyPerfectPet – Virtual Pet Browser Game
description: A modern, nostalgia-driven Tamagotchi-style game built with React and Tailwind CSS
pubDate: 2025-08-13T00:00:00Z
imgSrc: '/assets/images/myperfectpet-cover.png'
imgAlt: 'MyPerfectPet screenshots collage'
---

# MyPerfectPet: A Modern Take on Tamagotchi

## Overview

**MyPerfectPet** is a browser-based virtual pet game that blends old-school Tamagotchi vibes with modern web tech. Pick an egg, care for your pet, and keep an eye on its needs as you earn coins, buy items, and watch it thrive—on both mobile and desktop.

![Choose Egg Screen](/assets/images/myperfectpet-choose-egg.png)

## The Challenge

Classic pet sims were fun but limited. I wanted the same cozy loop—care, react, reward—while adding:
- Responsive UI that works great on phones and desktops
- Clear status indicators and feedback
- A light economy to make choices meaningful
- Save/load that “just works” with no accounts

## Key Features

- **🥚 Six Unique Eggs** – Each hatches into a different pet with its own charm  
- **🌗 Day/Night Mode** – Ambient feel that follows the clock or your preference  
- **❤️ Real-Time Status Bars** – Hunger, cleanliness, boredom, and health  
- **🛒 In-Game Currency** – Earn coins and purchase care items and boosts  
- **💾 Local Storage Saves** – Continue exactly where you left off  
- **📱 Responsive Design** – Built for both mobile and desktop

## Gameplay Loop

1. **Choose** one of six eggs.  
2. **Hatch** and meet your new companion.  
3. **Care** for needs in real time using the action bar.  
4. **Earn** coins and **buy** items to keep your pet happy.  
5. **Save** progress automatically and come back anytime.

![Main Room UI](/assets/images/myperfectpet-room-ui.png)

## Tech Stack

- **React** – Component architecture for UI and state  
- **Tailwind CSS** – Fast, consistent styling  
- **Custom Sprite Animations** – Drawn in **Aseprite**  
- **Vercel** – Simple, reliable deployment

## Engineering Notes

- **State & Persistence:** Lightweight React state with a tiny persistence layer that syncs key fields to `localStorage`—no auth required.  
- **UI/UX Details:** Icon-first action bar, toast-style feedback, and compact layouts for small screens.  
- **Performance:** Sprite sheets and memoized components to keep interactions smooth.

## Links

- **🎮 Live Demo:** https://myperfectpet.vercel.app/  
- **💻 GitHub:** https://github.com/skyboak/myperfectpet

## Credits

Special thanks to **Reemy Halabi**, **Ronen Fridman**, and **Shai Osmo** for helping bring this adorable project to life.

## Screenshots Gallery

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 64px;">
  <img src="/assets/images/myperfectpet-choose-egg.jpg" alt="Choose your egg" style="width:100%; border-radius:12px;">
  <img src="/assets/images/myperfectpet-status-roomM.jpg" alt="Status bar and actions" style="width:100%; border-radius:12px;">
  <img src="/assets/images/myperfectpet-room.jpg" alt="Pet room with actions" style="width:100%; border-radius:12px; grid-column: span 2;">
  <img src="/assets/images/myperfectpet-title-screen.jpg" alt="Title screen" style="width:100%; border-radius:12px; grid-column: span 2;">
</div>
