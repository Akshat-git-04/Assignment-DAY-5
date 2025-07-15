# README: React Patterns and Performance Optimization

---

## Advanced React Patterns

### 1. React Component Lifecycle

How a component behaves from creation to removal (mount, update, unmount).
**Example:** Fetching user data when the component loads.

---

### 2. Async State Updates

React doesn't update state immediately. You won't see changes right after calling `setState`.
**Example:** Clicking a button to update count – the new value isn't available right away.

---

### 3. Normal Function vs Custom Hook

Normal functions can’t use React features like state or effects. Hooks can.
**Example:** A `useForm` hook handles form logic and can be reused across pages.

---

### 4. Higher-Order Components (HOCs)

A function that adds extra features to a component.
**Example:** Wrapping a component to check if the user is logged in.

---

### 5. Render Props Pattern

A component passes a function to control what gets rendered inside it.
**Example:** A `MouseTracker` component gives the mouse position to render anything with it.

---

### 6. Compound Components

A group of related components that share logic using context.
**Example:** A `<Tabs>` component with `<Tab>` and `<TabPanel>` working together.

---

### 7. Controlled vs Uncontrolled Components

Controlled: React manages input value.
Uncontrolled: DOM manages input using `ref`.
**Example:** Controlled input for real-time validation. File upload can be uncontrolled.

---

### 8. Error Boundaries

Components that catch errors in their children and show a fallback UI.
**Example:** Showing a friendly message when a part of the page crashes instead of a blank screen.

---

## Performance Optimization

### 9. React.memo and PureComponent

Stop re-rendering components if props haven't changed.
**Example:** A list item that doesn’t change should not re-render when other items update.

---

### 10. Virtual DOM

A fast copy of the real DOM. React updates only what's changed.
**Example:** Updating a chat message without reloading the whole page.

---

### 11. Re-render Optimization

Avoid unnecessary re-renders using techniques like lifting state, using keys properly, and memoization.
**Example:** Only re-rendering a chart when new data comes in.

---

### 12. Lazy Loading and Code Splitting

Load parts of your app only when needed.
**Example:** Load a chart library only when visiting the analytics page.

---

### 13. Profiling and Debugging Tools

Use tools to find performance issues.
**Example:** React DevTools shows which components are re-rendering and why.
