---
layout: '@/templates/BasePost.astro'
title: BrainBuddy - ADHD Task Scheduler
description: An intelligent mobile application that uses complex algorithms to optimize your daily task scheduling based on your personal productivity patterns
pubDate: 2024-06-15T00:00:00Z
imgSrc: '/assets/images/brainbuddyLogo.png'
imgAlt: 'BrainBuddy App Logo'
---

# BrainBuddy: AI-Powered Task Scheduler

## Overview

BrainBuddy is an innovative task scheduling mobile application that leverages AI algorithms to create personalized daily schedules. By understanding your unique productivity patterns, energy levels throughout the day, and task characteristics, BrainBuddy transforms overwhelming to-do lists into achievable, optimized daily plans that work with your natural rhythms, not against them.

![App Splash Screen](/assets/images/brainbuddy-splash.png)


## Video Trailer

<video width="100%" controls>
  <source src="/assets/videos/brainbuddy.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


## The Challenge

Traditional task management apps treat all hours of the day equally, ignoring the fact that our cognitive abilities and energy levels fluctuate throughout the day. Most people struggle with:
- Scheduling complex tasks during low-energy periods
- Overwhelming to-do lists with no clear prioritization
- Static schedules that don't adapt to their productivity patterns
- Decision fatigue when choosing what to work on next

My goal was to create an intelligent system that learns from user behavior and automatically generates optimal schedules, making productivity effortless and personalized.

## Key Features

### 🧠 AI-Powered Schedule Generation
The app's core innovation lies in its sophisticated scheduling algorithm that:
- Scores tasks based on urgency, difficulty, and deadlines
- Matches task complexity with your peak performance times
- Generates three unique schedule options: Priority-based, Balanced, and Grouped
- Learns and adapts from your task completion patterns

![Schedule Options Screen](/assets/images/brainbuddy-schedules.jpg)

### ⏰ Smart Time Management
- **Onboarding Quiz**: Understands your productivity preferences from day one
- **Time Block Allocation**: Respects your available morning and evening hours
- **Adaptive Scheduling**: Updates productivity factors based on real completion data
- **Deadline Intelligence**: Prioritizes tasks with approaching deadlines

### 📊 Comprehensive Task Attributes
Each task is characterized by:
- **Urgency** (1-5 scale): How time-sensitive is this task?
- **Difficulty** (1-5 scale): How mentally demanding is this task?
- **Duration**: Estimated time to complete
- **Tags**: Categorization for better organization
- **Recurrence**: Support for daily, weekly, and monthly recurring tasks

![Task Details Screen](/assets/images/brainbuddy-task-details.jpg)

### 🔔 Intelligent Notifications
- Morning and evening reminders at customizable times
- Task-specific notifications
- Break reminders during focus sessions
- Smart notification scheduling that respects your preferences

### 🎯 Focus Timer
Built-in Pomodoro-style timer that:
- Tracks time spent on each task
- Provides break reminders
- Plays ambient sounds for better concentration
- Integrates with task completion tracking

![Presentation Overview](/assets/images/brainbuddy-presentation.jpg)

## Software Engineering Excellence

### 📱 Architecture & Design Patterns
- **Clean Architecture**: Clear separation between UI, business logic, and data layers
- **Service Layer Pattern**: Modular services for authentication, scheduling, notifications, and preferences
- **Repository Pattern**: Abstracted data access through dedicated service classes
- **Observer Pattern**: Real-time UI updates using Firebase listeners

### 🏗️ Technical Implementation

#### Advanced Scheduling Algorithm
```typescript
// Sophisticated task scoring based on multiple factors
export function calculateTaskScore(
  task: Task,
  userPrefs: UserPreferences,
  timeOfDay: TimeOfDay
): number {
  const urgencyScore = task.urgency * URGENCY_WEIGHT;
  const alignmentScore = calculateAlignmentScore(task.difficulty, userPrefs, timeOfDay);
  const deadlineScore = calculateDeadlineScore(task.deadline);
  
  return urgencyScore * 0.45 + alignmentScore * 0.35 + deadlineScore * 0.20;
}
```

The algorithm considers:
- Task urgency and deadline proximity
- User's productivity patterns for different times of day
- Task difficulty alignment with energy levels
- Category balancing for variety

#### State Management & Performance
- **React Context API**: Efficient global state management
- **Custom Hooks**: Reusable logic for authentication, tasks, and preferences
- **Memoization**: Optimized re-renders for complex schedule calculations
- **Lazy Loading**: Improved initial load times with code splitting

### 🔥 Firebase Integration
Comprehensive use of Firebase services:
- **Authentication**: Email/password with secure session management
- **Firestore**: Real-time database with offline support
- **Cloud Functions**: Server-side logic for complex operations
- **Performance Monitoring**: Track app performance metrics

### 🧪 Testing & Quality Assurance
- **Unit Tests**: Jest testing for algorithms and utilities
- **Integration Tests**: Service layer testing with mocked Firebase
- **Type Safety**: Full TypeScript coverage preventing runtime errors
- **Error Boundaries**: Graceful error handling throughout the app

## Technical Challenges & Solutions

### Challenge: Schedule Generation Performance
Generating three unique, optimized schedules for dozens of tasks could be computationally expensive.

**Solution:** Implemented efficient sorting algorithms, memoization for score calculations, and introduced controlled randomness to ensure schedule variety without repeated calculations.

### Challenge: Learning User Patterns
Accurately adapting to user productivity patterns without overwhelming them with questions.

**Solution:** Developed a feedback learning system that subtly adjusts productivity factors based on actual task completion times, using exponential moving averages for smooth adaptation.

### Challenge: Notification Reliability
Ensuring notifications work consistently across different Android versions and iOS.

**Solution:** Implemented a robust notification system using Expo's notification API with fallback mechanisms and comprehensive error handling.



## Screenshots Gallery

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px;">
  <img src="/assets/images/brainbuddy-dashboard.jpg" alt="Dashboard" style="width:100%; border-radius:12px;">
  <img src="/assets/images/brainbuddy-add-task.jpg" alt="Add Task" style="width:100%; border-radius:12px;">
  <img src="/assets/images/brainbuddy-schedules.jpg" alt="Schedule" style="width:100%; border-radius:12px;">
  <img src="/assets/images/brainbuddy-settings.jpg" alt="Settings" style="width:100%; border-radius:12px;">
  <img src="/assets/images/brainbuddy-focus-timer.jpg" alt="Focus Timer" style="width:100%; border-radius:12px;">
  <img src="/assets/images/brainbuddy-FreeTime-Selection.jpg" alt="FreeTime Selection" style="width:100%; border-radius:12px;">
</div>

## Technologies Used

- **React Native & Expo**: Cross-platform mobile development
- **TypeScript**: Type-safe code with better developer experience
- **Firebase Suite**: Authentication, Firestore, Cloud Functions
- **React Navigation**: Smooth navigation with stack and tab navigators
- **React Native Reanimated**: Smooth, high-performance animations
- **Async Storage**: Local data persistence
- **Date-fns**: Efficient date manipulation
- **Lottie**: Beautiful loading animations

## Links

### 📱 Download the App
[Download BrainBuddy APK](https://gofile.io/d/X31REn)

### 💻 Source Code
[GitHub Repository](https://github.com/skyboak/BrainBuddy)


## Conclusion

BrainBuddy represents a paradigm shift in task management, moving beyond simple to-do lists to intelligent, personalized productivity optimization. By combining thoughtful UX design with sophisticated algorithms, the app demonstrates how AI can enhance daily productivity in a meaningful, user-centric way.

This project showcases my ability to:
- Design and implement complex algorithms
- Build performant, user-friendly mobile applications
- Integrate multiple services into a cohesive system
- Apply AI/ML concepts to solve real-world problems
- Create scalable, maintainable code architectures

The success of BrainBuddy lies not just in its technical implementation, but in its deep understanding of human productivity patterns and its ability to adapt to individual users' needs.