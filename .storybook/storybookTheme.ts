import { create } from "@storybook/theming";

export const customTheme = create({
	base: "light",
	textColor: "black",
	textInverseColor: "#FFFFFF",
	barBg: "black",
	barTextColor: "#FFFFFF",
	barHoverColor: "rgba(255, 255, 255, 0.7)",
});