[] What are Custom hooks?

[] Example of Custom Hooks

## What are hooks?

* `useEffect(callback, [])` -> Data fetching
* `useReducer`
* `useContext`
* `useState()`: Helps us keep track of a value that might change over time, and re-rerender our component on-change

Hooks represent for us "react features" as functions

* Hooks must be used at the "top-level" of a component"
* All hooks start with the word `use`, making them easy to pick out of a crowd

## Custom Hooks

> Building your own Hooks lets you extract component logic into reusuable functions

* Custom Hooks are just Javascript functions that use React hooks.
* They still begin with the word `use`
* They still must be executed in "top-level" of components
* Custom hooks allow us to pull repetitive or complex code out of our components and into their place/file
