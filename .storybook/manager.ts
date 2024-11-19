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
    })
});