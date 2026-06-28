# FreeCodeCamp React Learning

This repository contains my React learning journey using the FreeCodeCamp course:

**React Course for Beginners w/ Tailwind CSS [2025]**

---

## Tech Stack

* React
* Vite
* JavaScript
* Tailwind CSS
* Font Awesome

---

## Learning Goals

* Learn React fundamentals
* Understand JSX
* Build reusable components
* Work with Props and State
* Learn React Hooks
* Learn React Router
* Learn Tailwind CSS
* Build real-world React projects

---

# Progress Tracker

## Setup

* [x] React Project Setup
* [x] GitHub Repository Setup

---

## React Fundamentals

* [x] JSX
* [x] Components
* [x] Props
* [x] Boolean Props
* [x] Children Props
* [x] Component Organization
* [x] State (useState Basics)
* [x] Event Handling (onClick)
* [x] Conditional Rendering
* [ ] Lists and Keys
* [ ] Forms

---

## React Hooks

* [x] useState (Basics)
* [ ] useEffect
* [ ] Custom Hooks

---

## Routing

* [ ] React Router

---

## Styling

* [x] Tailwind CSS Setup
* [x] Tailwind Utility Classes
* [x] Buttons and Hover Effects
* [x] Dynamic Styling with Props
* [x] Dynamic Styling with State
* [x] Layouts with Flexbox
* [x] Header and Footer Layouts
* [x] Full Height Layout (`h-screen`)
* [x] Flexible Layouts using (`flex-1`)
* [x] Font Awesome Icons
* [ ] Responsive Design
* [ ] CSS Grid Layouts

---

## Projects

* [x] Quote Box Components
* [x] Google Homepage Layout
* [x] First Interactive React App (`useState`)
* [x] Image Carousel
* [ ] Final React Project

---

# Completed Lessons

## Lesson 1 - Your First App

* Created first React application using Vite
* Understood `index.html`
* Understood `main.jsx`
* Created and rendered the `App` component

---

## Lesson 2 - Rendering Components

* Created `Title` component
* Created `Description` component
* Rendered multiple components inside `App`
* Learned React component naming conventions
* Learned component composition

---

## Lesson 3 - Passing Props

* Created reusable Message component
* Passed text using props
* Passed background color using props
* Used inline styles with React
* Reused the same component with different data
* Learned parent-to-child communication

---

## Lesson 4 - Passing Props II

* Passed string props
* Passed boolean props
* Used props to control component styling
* Learned conditional rendering using the ternary operator
* Learned the difference between:

```jsx
large={true}
```

and

```jsx
large="true"
```

* Learned that missing props become `undefined`

---

## Lesson 5 - Passing Props III

* Learned the `children` prop
* Passed content between component tags
* Added height and background color props
* Created reusable UI components
* Moved components into separate files
* Learned component import/export

---

## Lesson 6 - Tailwind CSS Setup & Utility Classes

* Installed Tailwind CSS v4
* Configured Tailwind CSS with Vite
* Imported Tailwind into `index.css`
* Applied text color utilities
* Applied background color utilities
* Applied border utilities
* Applied font size utilities
* Learned utility-first CSS styling
* Verified Tailwind integration inside React components

---

## Lesson 7 - Tailwind Buttons and Styling

* Applied Tailwind color utilities
* Applied padding and margin utilities
* Applied border utilities
* Applied border radius utilities
* Applied font size utilities
* Used hover effects
* Built multiple styled buttons using utility classes
* Practiced combining multiple Tailwind classes

---

## Lesson 8 - Dynamic Component Styling

* Created a reusable `FancyButton` component
* Used the `children` prop to display button content
* Used a boolean `large` prop to control styling
* Applied conditional Tailwind classes
* Learned template literal syntax for dynamic class names
* Built reusable UI components with configurable appearance
* Practiced separating component logic into its own file

### Key Concept

```jsx
const largeStyles =
  large ? "text-3xl rounded-full" : "text-base rounded-md";
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

---

## Lesson 9 - Flexbox Layouts with Tailwind CSS

* Created a reusable `Cat` component

* Used Font Awesome icons inside React components

* Learned the `flex` utility

* Learned horizontal alignment using:

  * `justify-center`
  * `justify-between`
  * `justify-around`

* Learned vertical alignment using:

  * `items-center`
  * `items-end`

* Combined horizontal and vertical alignment utilities

* Practiced building layouts using Tailwind Flexbox utilities

### Key Concepts

```jsx
<div className="flex justify-center">
```

Centers items horizontally.

```jsx
<div className="flex items-center">
```

Centers items vertically.

```jsx
<div className="flex justify-between">
```

Places items at opposite ends with space between them.

```jsx
<div className="flex justify-around">
```

Distributes equal space around items.

```jsx
<div className="flex items-end">
```

Aligns items to the bottom of the container.

---

## Lesson 10 - Building a Google Homepage Layout

* Built a Google-inspired homepage using React.
* Created reusable `Header`, `Search`, and `Footer` components.
* Practiced component composition.
* Used `flex-col` to stack components vertically.
* Used `justify-between` for horizontal spacing.
* Used `items-center` for vertical alignment.
* Learned how `flex-1` allows a child component to occupy the remaining available space.
* Used `h-screen` to make the application fill the entire browser viewport.
* Integrated Font Awesome icons for the user profile, search bar, and footer.
* Styled the application entirely using Tailwind CSS utility classes.

### Key Concepts

```jsx
<div className="flex flex-col h-screen">
```

Creates a vertical Flexbox container that spans the full viewport height.

```jsx
<div className="flex-1">
```

Makes a flex item grow and occupy the remaining available space inside a flex container.

```jsx
<div className="flex justify-between items-center">
```

Distributes items across the horizontal axis while keeping them vertically centered.

```jsx
<i className="fa-solid fa-magnifying-glass"></i>
```

Uses a Font Awesome icon inside a React component.

---

## Lesson 11 - Introduction to React State and Event Handling with useState

* Learned why React components need state.
* Imported the `useState` Hook from React.
* Created a state variable with an initial value.
* Learned array destructuring while using `useState`.
* Rendered state values inside JSX.
* Updated state using the setter function.
* Learned that calling the setter function automatically re-renders the component.
* Added click event handlers using `onClick`.
* Built the first interactive React application.

### Key Concepts

#### Importing the Hook

```jsx
import { useState } from "react";
```

Imports the `useState` Hook from React.

---

#### Creating State

```jsx
const [message, setMessage] = useState("hi");
```

React returns an array containing:

* the current state value
* a setter function used to update that value

Using **array destructuring** allows us to assign those two values to meaningful variable names (`message` and `setMessage`).

* `message` stores the current state value.
* `setMessage` updates the state.
* `"hi"` is the initial state.

---

#### Rendering State

```jsx
<div>{message}</div>
```

Displays the current state value inside the UI.

---

#### Updating State

```jsx
setMessage("bye!");
```

Updates the state value and schedules the component to re-render.

Always use the setter function returned by `useState` to update state instead of modifying the state variable directly.

---

#### Event Handling

```jsx
<button onClick={() => setMessage("bye!")}>
```

Executes the function whenever the button is clicked.

---

#### React Rendering Flow

```
User clicks button
        │
        ▼
onClick event fires
        │
        ▼
setMessage(...)
        │
        ▼
React updates state
        │
        ▼
Component re-renders
        │
        ▼
Updated message appears on the screen
```

### What I Learned

* State allows React components to store changing data.
* Updating state should always be done using the setter function.
* State should never be updated by directly modifying the state variable.
* React automatically updates the UI whenever state changes.
* Event handlers make React applications interactive.
* JSX always displays the latest state value after a re-render.

### Interview Notes

* `useState` returns an array containing the current state value and a setter function.
* React components automatically re-render when state changes.
* State should be treated as immutable and updated only through the setter function.
* Event handlers such as `onClick` are commonly used to trigger state updates.

---

## Lesson 12 - Conditional Rendering and Dynamic Styling

* Learned how to conditionally render UI elements in React.
* Used boolean state to control what is displayed on the screen.
* Practiced conditional rendering using the ternary (`? :`) operator.
* Practiced conditional rendering using the logical AND (`&&`) operator.
* Dynamically changed Tailwind CSS classes based on component state.
* Used state toggling to show and hide UI elements.
* Built multiple widgets demonstrating conditional rendering and dynamic styling techniques.

### Key Concepts

#### Conditional Rendering using the Ternary Operator

```jsx
{
  showIcon ? (
    <i className="fa-solid fa-face-smile"></i>
  ) : null
}
```

* If `showIcon` is `true`, React renders the icon.
* If `showIcon` is `false`, React renders `null`, meaning nothing is displayed.

---

#### Conditional Rendering using the Logical AND (`&&`) Operator

```jsx
{
  showIcon && (
    <i className="fa-solid fa-thumbs-up"></i>
  )
}
```

* React renders the icon only when `showIcon` is `true`.
* If `showIcon` is `false`, nothing is rendered.
* This syntax is shorter and commonly used when there is no alternate UI.

---

#### Dynamic Styling with State

```jsx
className={`px-4 py-2 text-white rounded-full ${
  toggleColor ? "bg-orange-500" : "bg-blue-500"
}`}
```

React applies different Tailwind CSS classes depending on the current state value.

---

#### Toggling Boolean State

```jsx
setShowIcon(!showIcon);
```

The `!` operator reverses the current boolean value.

* `true` becomes `false`
* `false` becomes `true`

This is commonly used to implement show/hide functionality.

---

### React Rendering Flow

```text
User clicks button
        │
        ▼
onClick event fires
        │
        ▼
Boolean state changes
        │
        ▼
React re-renders the component
        │
        ▼
UI updates automatically
```

### What I Learned

* React can render different UI based on state.
* Boolean state is commonly used to control visibility.
* The ternary operator is useful when rendering one of two possible outputs.
* The `&&` operator is useful when rendering something only if a condition is true.
* State can also be used to dynamically change CSS classes.
* React automatically updates the UI whenever the state changes.

### Interview Notes

* Conditional rendering is one of the core concepts of React.
* The ternary operator (`? :`) is used when there are two possible outcomes.
* The logical AND (`&&`) operator is preferred when rendering something only if a condition is true.
* React encourages rendering UI from state instead of manually manipulating the DOM.
* Dynamic styling is commonly implemented by conditionally applying CSS classes based on state.

---

## Lesson 13 - Image Carousel using React State

* Built an image carousel using React.
* Stored multiple image URLs inside an array.
* Used `useState` to track the currently displayed image.
* Displayed images dynamically using the current array index.
* Implemented Previous and Next navigation buttons.
* Prevented users from navigating beyond the first and last images.
* Used conditional rendering to show and hide navigation buttons.
* Displayed contextual messages on the first and last images.
* Combined state, event handling, and conditional rendering to build an interactive UI.

### Key Concepts

#### Storing Data in an Array

```jsx
const IMAGE_URLS = [
  "...",
  "...",
  "...",
];
```

React commonly uses arrays to render collections of related data dynamically.

---

#### Rendering Dynamic Content

```jsx
<img src={IMAGE_URLS[imageIdx]} />
```

The displayed image changes dynamically based on the current value of `imageIdx`.

---

#### Updating State

```jsx
setImageIdx(imageIdx + 1);
```

Moves to the next image.

```jsx
setImageIdx(imageIdx - 1);
```

Moves to the previous image.

---

#### Conditional Rendering

```jsx
{imageIdx > 0 && (
  <button>Previous</button>
)}
```

Shows the **Previous** button only when the current image is **not** the first image.

```jsx
{imageIdx < IMAGE_URLS.length - 1 && (
  <button>Next</button>
)}
```

Shows the **Next** button only when the current image is **not** the last image.

---

#### Displaying Contextual Messages

```jsx
{imageIdx === 0 && (
  <div>This is the first image.</div>
)}
```

Displays a message only when the first image is displayed.

```jsx
{imageIdx === IMAGE_URLS.length - 1 && (
  <div>This is the last image.</div>
)}
```

Displays a message only when the last image is displayed.

---

### React Rendering Flow

```text
User clicks Previous / Next
            │
            ▼
onClick event fires
            │
            ▼
setImageIdx(...)
            │
            ▼
React updates state
            │
            ▼
Component re-renders
            │
            ▼
New image and UI are displayed
```

### What I Learned

* React state can be used to navigate through data.
* Arrays work well with React for displaying collections.
* UI can be updated dynamically using state values.
* Conditional rendering improves the user experience by displaying only the relevant UI elements.
* React automatically re-renders whenever state changes.

### Interview Notes

* `useState` can be used to manage the current item in a collection.
* Array indexing is commonly used to display dynamic content.
* Conditional rendering helps build intuitive user interfaces.
* React components should derive their UI from state instead of manually manipulating the DOM.
* React re-renders the component whenever the state value changes.

---

# Repository

GitHub:
https://github.com/rajneeshraj0103/freecodecamp-react-learning

---

# Author

**Rajneesh Raj**
