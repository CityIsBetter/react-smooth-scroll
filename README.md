# React Smooth Scroll with Lenis
This repository demonstrates how to implement smooth scrolling in a React application using the Lenis library. The project smoothens both manual scrolling and programmatic scrolling for a polished user experience.

# Features
Smooth Manual Scrolling: Enhances the scrolling experience for mouse wheel, touchpad, and touch devices.
Smooth Programmatic Scrolling: Scroll to specific sections of the page using navigation buttons.
Customizable Easing and Duration: Fine-tuned settings for fluid scroll stops.
Demo
Check out the live demo: Smooth Scroll Demo
(Update with a deployed link if available)

# Installation
Clone the Repository
```git clone https://github.com/YourGitHubUsername/react-lenis-smooth-scroll.git
cd react-lenis-smooth-scroll
```
## Install Dependencies
```
npm install
```
## Usage
Run the App
Start the development server:
```
npm start
```
Open your browser at http://localhost:3000.

# Implementation Overview
## Lenis Initialization
The Lenis library is configured to smooth both manual and programmatic scrolling with customizable easing and duration.

## Key Configuration
javascript
```
lenis.current = new Lenis({
  duration: 1.2, // Smooth scroll duration
  easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stops
  smooth: true,
  smoothTouch: true, // Smooth touch scrolling
});
```
## Programmatic Scrolling
Buttons in the navigation bar use the scrollTo method provided by Lenis to smoothly navigate to specific sections:
```
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  lenis.current.scrollTo(element);
};
```
## File Structure
```
react-lenis-smooth-scroll/
│
├── src/
│   ├── App.js        # Main application component
│   ├── App.css       # Styles for the application
│   └── index.js      # Entry point
│
├── public/           # Static files
├── package.json      # Dependencies and scripts
└── README.md         # Documentation
```

## Customization
- Duration: Adjust the duration property in Lenis initialization to change scroll speed.
- Easing: Modify the easing function to experiment with different scroll behaviors.
## Dependencies
- React
- Lenis

# Contributing
Contributions are welcome! If you have ideas to improve this implementation, feel free to open a pull request.

# License
This project is licensed under the [MIT License](./LICENSE).

# Author
Created by Mahesh Paul J.
