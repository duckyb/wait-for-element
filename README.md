# wait-for-element

A lightweight RxJS utility that polls for DOM elements until they become available.

## Installation

```bash
npm install observable-wait-for-element
```
```bash
yarn add observable-wait-for-element
```

## Features

- 🔄 Polling-based element detection
- ⚡ RxJS-powered
- ⏱️ Configurable timeout and refresh intervals
- 🎯 Custom root element support
- 🚫 Automatic error handling for timeouts

## Usage

```ts
import waitForElement$ from 'observable-wait-for-element';
// Basic usage
waitForElement$({ query: '#my-element' })
  .subscribe({
    next: (element) => {
      if (element) {
        console.log('Element found!', element);
      }
    },
    error: (error) => console.error('Element not found:', error)
});
// Advanced usage with custom options
waitForElement$({
  query: '.dynamic-content',
  root: document.getElementById('app'),
  ticks: 20, // Wait longer
  refreshInterval: 200 // Check every 200ms
}).subscribe({
    next: (element) => {
      if (element) {
        // Do something with the element
      }
  }
});
```
