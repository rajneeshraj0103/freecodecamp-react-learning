# FreeCodeCamp React Learning

This repository contains my React learning journey using the FreeCodeCamp course:

**React Course for Beginners w/ Tailwind CSS [2025]**

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS

## Learning Goals

- Learn React fundamentals
- Understand JSX
- Build reusable components
- Work with Props and State
- Learn React Hooks
- Learn React Router
- Learn Tailwind CSS
- Build real-world React projects

## Progress Tracker

### Setup

- [x] React Project Setup
- [x] GitHub Repository Setup

### React Fundamentals

- [x] JSX
- [x] Components
- [x] Props
- [x] Boolean Props
- [x] Children Props
- [x] Component Organization
- [ ] State
- [ ] Event Handling
- [ ] Conditional Rendering
- [ ] Lists and Keys
- [ ] Forms

### React Hooks

- [ ] useState
- [ ] useEffect
- [ ] Custom Hooks

### Routing

- [ ] React Router

### Styling

- [x] Tailwind CSS Setup
- [x] Tailwind Utility Classes
- [x] Buttons and Hover Effects
- [x] Dynamic Styling with Props
- [ ] Responsive Design
- [ ] Layouts with Flexbox
- [ ] Layouts with Grid

### Projects

- [ ] Project 1
- [ ] Project 2
- [ ] Final Project

## Completed Lessons

### Lesson 1 - Your First App

- Created first React application using Vite
- Understood `index.html`
- Understood `main.jsx`
- Created and rendered the `App` component

### Lesson 2 - Rendering Components

- Created `Title` component
- Created `Description` component
- Rendered multiple components inside `App`
- Learned React component naming conventions
- Learned component composition

### Lesson 3 - Passing Props

- Created reusable Message component
- Passed text using props
- Passed background color using props
- Used inline styles with React
- Reused the same component with different data
- Learned parent-to-child communication

### Lesson 4 - Passing Props II

- Passed string props
- Passed boolean props
- Used props to control component styling
- Learned conditional rendering using the ternary operator
- Learned the difference between:
  - `large={true}`
  - `large="true"`

- Learned that missing props become `undefined`

### Lesson 5 - Passing Props III

- Learned the `children` prop
- Passed content between component tags
- Added height and background color props
- Created reusable UI components
- Moved components into separate files
- Learned component import/export

### Lesson 6 - Tailwind CSS Setup & Utility Classes

- Installed Tailwind CSS v4
- Configured Tailwind CSS with Vite
- Imported Tailwind into `index.css`
- Applied text color utilities
- Applied background color utilities
- Applied border utilities
- Applied font size utilities
- Learned utility-first CSS styling
- Verified Tailwind integration inside React components

### Lesson 7 - Tailwind Buttons and Styling

- Applied Tailwind color utilities
- Applied padding and margin utilities
- Applied border utilities
- Applied border radius utilities
- Applied font size utilities
- Used hover effects
- Built multiple styled buttons using utility classes
- Practiced combining multiple Tailwind classes

### Lesson 8 - Dynamic Component Styling

- Created a reusable `FancyButton` component
- Used the `children` prop to display button content
- Used a boolean `large` prop to control styling
- Applied conditional Tailwind classes
- Learned template literal syntax for dynamic class names
- Built reusable UI components with configurable appearance
- Practiced separating component logic into its own file

#### Key Concept

```jsx
const largeStyles = large ? "text-3xl rounded-full" : "text-base rounded-md";
```

Different styles can be applied based on prop values.

```jsx
<FancyButton large={true}>
  Click Me
</FancyButton>

<FancyButton large={false}>
  Submit
</FancyButton>
```

The same component can render differently depending on the props passed to it.

## Repository

GitHub: https://github.com/rajneeshraj0103/freecodecamp-react-learning

## Author

Rajneesh Raj
