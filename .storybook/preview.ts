import type { Preview } from "@storybook/react";
import { customTheme } from "./storyBookTheme";
import "../src/index.scss";

const preview: Preview = {
  parameters: {
	docs: {
		theme: customTheme,
	},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#000000",
        },
      ],
    },
    viewport: {
			defaultViewport: "md",
			viewports: {
				xl: {
					name: "XL (1200px)",
					styles: {
						width: "1200px",
						height: "900px",
					},
				},
				lg: {
					name: "LG (992px)",
					styles: {
						width: "992px",
						height: "900px",
					},
				},
				md: {
					name: "MD (768px)",
					styles: {
						width: "768px",
						height: "900px",
					},
				},
				sm: {
					name: "SM (576px)",
					styles: {
						width: "576px",
						height: "724px",
					},
				},
			},
		}
  },
};

export default preview;
