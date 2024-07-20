/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background-default-default": "#fff",
        "border-default-default": "#d9d9d9",
        "text-default-default": "#1e1e1e",
        "background-neutral-tertiary": "#e3e3e3",
        "border-neutral-secondary": "#767676",
        "text-neutral-default": "#303030",
        "text-default-secondary": "#757575",
        "background-default-secondary": "#f5f5f5",
        "background-brand-default": "#2c2c2c",
      },
      spacing: {
        "device-width": "1200px",
        "space-400": "16px",
        "space-800": "32px",
        "space-4000": "160px",
        "space-300": "12px",
        "space-600": "24px",
        "space-1200": "48px",
        "space-1600": "64px",
        "space-200": "8px",
      },
      fontFamily: {
        "body-base": "Inter",
      },
      borderRadius: {
        "13xl": "32px",
        "radius-200": "8px",
        "scale-06": "32px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "13xl": "32px",
      "53xl": "72px",
      inherit: "inherit",
    },
    screens: {
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
