# Interactive Rating Component

This project entailed creating the Interactive Rating Component with both mobile and web responsive designs. Key features include useState hook, reusable components, rating selection, and separate confirmation component.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This project involved replicating a design layout given for desktop and mobile for a Interactive Rating component with special features.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

![Desktop Landing Page](./src/assets/Rating.png)

![Desktop Selected Rating Page](./src/assets/SelectedRating.png)

![Desktop Thank You Page](./src/assets/ThankYou.png)

![Lighthouse Report](./src/assets/lighthouse.png)

### Links

- Solution URL: [Frontend Mentor Solution]()
- Live Site URL: [Easybank Landing Page Laura Dev](https://interactive-rating-lauradev.netlify.app/)

### My Process

I began by setting up TailwindCSS, ReactJS, and my GitHub repository. Additionally, I configured the README template, added all design assets, integrated Google Fonts, and defined the color scheme. I ensured that all commits were successfully pushed to GitHub before beginning my project.

Next, I reviewed the design layout to determine which sections would be reusable components. I created my application by using App.jsx while importing the Rating component. In the rating component, I had two sections - one would display all the information for the rating and the second (based on state management) would display the Thank You component. I had a reusable component of the rating button that was used for all the ratings' stylings. The other challenging part of this project was managing state and passing props throughout the application. I wanted to follow what the end user was selecting and pass it to the Thank You component while also managing submission for tailwindcss styling.

When the end user selects a rating, it triggers a handleRatingClick which updates the isSubmitted state to set the rating to the number selected. Additionally, when the end user selects the submit button - it triggers a handleSubmit button which either says the end user needs to chose a rating or changes the setIsSubmitted to true that triggers the Thank You component to display in the Rating component.

### Built with

- [React](https://reactjs.org/) - JS library
- TailwindCSS
- Vite
- Google Fonts
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

### Continued development

I will continue to learn more about TailwindCSS, ReactJS and updating my process of building a website.

### Useful resources

- Google Fonts Overpass(https://fonts.google.com/specimen/Overpass)
- Render Blocking Resources(https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/?utm_source=lighthouse&utm_medium=devtools)

## Author

- Website - [Laura V](lauradeveloper.com)
- Frontend Mentor - [@lavollmer](https://www.frontendmentor.io/profile/lavollmer)
- Github - [@lavollmer](https://github.com/lavollmer)
