import { buildLegacyTheme } from "sanity"




const props = {
    "--my-white": "#fff",
    "--my-black": "#000",
    "--tpicpc-brand": "#4a83c4",
    "--my-red": "#db4437",
    "--my-green": "#0f9d58",
    "--my-yellow": "#f4b400",
}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--my-black"],
    "--white": props["--my-white"],
    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    "--brand-primary": props["--tpicpc-brand"],

    // Default button
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--tpicpc-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-danger-color": props["--my-red"],
    "--default-button-warning-color": props["--my-yellow"],

    // State
    "--state-info-color": props["--tpicpc-brand"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],

    // Navbar
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--tpicpc-brand"],
})