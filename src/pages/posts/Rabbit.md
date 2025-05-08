---
layout: '@/templates/BasePost.astro'
title: Rabbit - Pet-Powered Habit Tracker
description: A gamified habit-tracking mobile application that transforms building habits into nurturing a virtual pet
pubDate: 2024-05-08T00:00:00Z
imgSrc: '/assets/images/rabbitLogo.png'
imgAlt: 'Rabbit App Logo'
---

# Rabbit: Pet-Powered Habit Tracker

## Overview

Rabbit is a gamified habit-tracking mobile application that transforms the routine of building healthy habits into a delightful experience of nurturing a virtual pet. As users complete their daily habits, they directly impact the happiness and growth of their digital companion, creating a powerful motivation loop that makes habit formation more engaging and rewarding.

![App Splash Screen](/assets/images/rabbit-splash.png)

## The Challenge

Habit-building apps often struggle with user retention because traditional progress tracking can feel mechanical and disconnected from meaningful outcomes. My goal was to design an application that creates an emotional connection between users' actions and visible results, making habit formation more enjoyable and sustainable.

## Key Features

### 🐰 Virtual Pet Companion
Users care for a virtual pet that responds to their habit completion. The pet's happiness, evolution, and appearance directly reflect the user's consistency.

![Pet Home Screen](/assets/images/rabbit-home.jpg)

### ✅ Comprehensive Habit Tracking
The app supports various habit frequencies (daily, weekly, monthly) with streak tracking, reminders, and detailed progress visualization.

### 🌟 Evolution System
As users maintain consistency, their pet evolves through different stages from "First Step" to "Master of Habits," creating meaningful milestones in the habit journey.

### 🎨 Customization
Users can personalize their experience by customizing their pet with different accessories and environments that unlock as they progress.

### 📊 Progress Analytics
Detailed insights into habit completion rates, streak history, and pet happiness trends help users understand their progress.

## Software Engineering Skills Demonstrated

### 📱 React Native & Expo Development
Built with React Native and Expo to ensure cross-platform compatibility while maintaining native performance and feel. The UI is responsive, with custom animations that enhance the user experience.

### 🏗️ Architecture Design
Implemented a structured architecture with clear separation of concerns:
- **Models**: Well-defined data models with encapsulated logic (Pet.js, Habit.js)
- **Services**: Modular services for specific functionality (AuthService, NotificationService, etc.)
- **Contexts**: Global state management with Context API
- **Screens**: Component-based UI with clean separation of display and logic

### 🔄 State Management
Used React's Context API with custom hooks to manage global state, making data accessible throughout the application while maintaining performance through careful state updates.

### 🔥 Firebase Integration
Implemented real-time database synchronization with Firebase Firestore, enabling:
- Instant UI updates when data changes
- Offline support with local persistence
- Efficient data synchronization
- Secure data access with user authentication

### 🔒 Authentication System
Developed a robust authentication system that supports:
- Email/password authentication
- Google Sign-In integration
- Password reset functionality
- User profile management

### 📱 Mobile-First UX Design
Created a thoughtful mobile experience with:
- Intuitive navigation with bottom tabs
- Responsive layouts that adapt to different screen sizes
- Smooth animations for engaging interactions
- Haptic feedback and sound effects for immersion

### 🔔 Notification System
Engineered a comprehensive notification system that:
- Sends habit reminders at scheduled times
- Notifies users of pet status changes
- Celebrates milestone achievements
- Supports user-configurable notification preferences

## Technical Challenges & Solutions

### Challenge: Complex Pet Evolution Logic
Needed to create a pet that evolved based on multiple factors including habit consistency, time, and interaction quality.

**Solution:** Implemented an object-oriented model for the pet with encapsulated methods that calculate evolution eligibility based on a comprehensive scoring system. This allowed for complex behavior while keeping the interface simple.

### Challenge: Real-time Synchronization
Required seamless syncing of habit completion and pet status across devices.

**Solution:** Leveraged Firebase's real-time database capabilities with custom subscription services that maintain consistent state, handle race conditions, and provide offline support.

### Challenge: Performance with Animation
Balancing smooth animations with efficient rendering for low-end devices.

**Solution:** Used optimized sprite-based animations with careful component memoization and selective re-rendering to maintain 60fps even during complex interactions.

## GitHub Repository

[GitHub Repository: HabitRabbit](https://github.com/skyboak/HabitRabbit)

## Download the App

**Coming Soon**

*Rabbit will be available on iOS and Android platforms.

## Conclusion

Rabbit represents a thoughtful fusion of gamification principles with habit-building psychology. By creating an emotional connection between users and their virtual pets, the app transforms the sometimes tedious process of habit formation into a delightful journey of growth and achievement.

This project showcases my abilities in mobile development, state management, real-time data synchronization, and creating engaging user experiences. It demonstrates not just technical implementation skills, but also an understanding of user psychology and motivation in product design.