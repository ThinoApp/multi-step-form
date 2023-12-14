/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        lightBlue: "hsl(206, 94%, 87%)",
        PastelBlue: "hsl(228, 100%, 84%)",
        MarineBlue: "hsl(213, 96%, 18%)",
        PurplishBlue: "hsl(243, 100%, 62%)",
        Maniolia: "hsl(217, 100%, 97%)",
        LightGray: "hsl(229, 24%, 87%)",
        CoolGray: "hsl(231, 11%, 63%)",
      },
      textColor: {
        lightBlue: "hsl(206, 94%, 87%)",
        PastelBlue: "hsl(228, 100%, 84%)",
        MarineBlue: "hsl(213, 96%, 18%)",
        PurplishBlue: "hsl(243, 100%, 62%)",
        Maniolia: "hsl(217, 100%, 97%)",
        LightGray: "hsl(229, 24%, 87%)",
        CoolGray: "hsl(231, 11%, 63%)",
        StrawberryRed: "hsl(354, 84%, 57%)",
      },
      fontFamily: {
        "ubuntu-b": "UbuntuBold",
        "ubuntu-md": "UbuntuMedium",
        ubuntu: "Ubuntu",
      },
      borderColor: {
        StrawberryRed: "hsl(354, 84%, 57%)",
      },
    },
  },
  plugins: [],
};
