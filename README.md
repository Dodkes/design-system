# Design System - Initial Setup

Starting point for a design system project.\
Intend is to provide a basic structure and fast setup for a project so developers can focus on the design and development of components.

## **1 Run the project**

- Clone the repository
- Run `npm install` to install necessary dependencies
- Run `npm run dev` to start the project

## **2 Adjust Storybook UI**

#### **2.1 Adjust preview window**

In `/storybook/preview.ts` set up:

- breakpoints
- theme
- background colors dark/light

Define **preview** window styling in `storybook/storybookTheme.ts`:

```jsx
import { create } from "@storybook/theming";

export const customTheme = create({
  base: "light",
  textColor: "black",
  textInverseColor: "#FFFFFF",
  barBg: "black",
  barTextColor: "#FFFFFF",
  barHoverColor: "rgba(255, 255, 255, 0.7)",
});
```

**Note:** _with each change restart storybook server._

#### **2.2 Adjust manager - left panel**

In `storybook/manager.ts` set up:

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

## **3 Get project ready for development**

1. Set up breakpoints: `~/base/breakpoints.scss`
2. Set up typography: `~/base/typography.scss`
3. Add variables: `~/base/variables.scss`

### Build project

Once done with development, run `npm run build:storybook` to build the storybook project.
