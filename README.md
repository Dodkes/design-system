# Design System - Initial Setup

Starting point for a design system project.\
Intend is to provide a basic structure and fast setup for a project so developers can focus on the design and development of components.

## 1 Run the project

- Clone the repository
- Run `npm install` to install necessary dependencies
- Run `npm run storybook` to start the project

## 2 Adjust Storybook UI:

#### 2.1 In `/storybook/preview.ts` set up:

Changes are related to preview window.

- breakpoints
- theme
- background colors dark/light

#### 2.2 In `storybook/manager.ts` set up:

Changes are related to manager window (Left panel).\
**Note:** _with each change restart storybook server._

```jsx
import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Brand Title",
    brandUrl: "https://example.com",
    brandImage: "https://placehold.it/350x150",
    textColor: "black",
    colorSecondary: "black",
    appBg: "#F5F5F5",
    barTextColor: "black",
    // appBorderColor: "#F5F5F5",
  }),
});
```

## 3 Get project ready for development:

1. Set up breakpoints: `~/base/breakpoints.scss`
2. Set up typography: `~/base/typography.scss`
3. Add variables: `~/base/variables.scss`
