# React Native Animated Modal Example

This is a simple React Native app demonstrating the use of `Animated` for creating smooth modal animations. The modal fades in and scales up when opened, and fades out and scales down when closed, giving a visually appealing effect.

## Features:
- **Modal Animations**: The modal component is animated using the `Animated` API in React Native, featuring both fade and scale effects.
- **Reusable Components**: The modal is displayed with customizable buttons ("Yes" and "No"), making it easy to reuse for different scenarios.
- **Responsive Layout**: The modal is fully responsive with a semi-transparent background overlay, providing a smooth user experience.

## Key Concepts:
- **State Management**: The app uses `useState` to manage the visibility of the modal.
- **Animations**: `Animated.timing` and `Animated.spring` are used in combination to animate both the opacity and scale of the modal.
- **TouchableOpacity**: Used for creating interactive buttons that trigger modal visibility and actions.

## How to Use:
1. Press the **"Show Modal"** button to display the modal.
2. The modal animates in with a fade and scale effect.
3. Press **"Yes"** or **"No"** to hide the modal with an animated effect.

## Code Breakdown:
- **Animated Values**: The modal utilizes two animated values (`opacityAnim` and `scaleAnim`) to manage the fade and scale transitions.
- **Modal Component**: The modal is wrapped in a `Modal` component with a transparent background and contains an animated view for smooth transitions.
- **Styling**: Custom styles for the modal, buttons, and layout are defined using `StyleSheet` to ensure a clean and consistent UI.

## Installation:
1. Copy the code in the App.js File.
2. Run `npm install` or `yarn install` to install dependencies.
3. Start the development server.

## Dependencies:
- Expo SDK
- React Native

---

This example provides a foundation for building more complex modals with advanced animations in React Native. Feel free to clone and extend it for your own projects!
