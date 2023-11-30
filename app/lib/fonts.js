import localFont from "next/font/local";

export const matter = localFont({
  src: [
    {
      path: "../public/fonts/Matter-Bold.otf",
      weight: "700",
      style: "normal",
      fallback: ["system-ui", "arial"],
    },
    {
      path: "../public/fonts/Matter-Regular.otf",
      weight: "400",
      style: "normal",
      fallback: ["system-ui", "arial"],
    },
    {
      path: "../public/fonts/Matter-Light.otf",
      weight: "300",
      style: "normal",
      fallback: ["system-ui", "arial"],
    },
  ],
});
