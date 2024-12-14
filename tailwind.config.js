/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope"],
      },
      colors: {
        primare_50: "var(--primare_50)",
        primare_100: "var(--primare_100)",
        primare_200: "var(--primare_200)",
        primare_300: "var(--primare_300)",
        primare_400: "var(--primare_400)",
        primare_500: "var(--primare_500)",
        primare_600: "var(--primare_600)",
        primare_700: "var(--primare_700)",
        primare_800: "var(--primare_800)",
        primare_900: "var(--primare_900)",
        primare_950: "var(--primare_950)",


        Neutrals_50: "var(--Neutrals_50)",
        Neutrals_100: "var(--Neutrals_100)",
        Neutrals_200: "var(--Neutrals_200)",
        Neutrals_300: "var(--Neutrals_300)",
        Neutrals_400: "var(--Neutrals_400)",
        Neutrals_500: "var(--Neutrals_500)",
        Neutrals_600: "var(--Neutrals_600)",
        Neutrals_700: "var(--Neutrals_700)",
        Neutrals_800: "var(--Neutrals_800)",
        Neutrals_900: "var(--Neutrals_900)",
        Neutrals_950: "var(--Neutrals_950)", 


       
      },

      backgroundImage: {
        button__gradient: "var(--button__gradient)", 
        text__gradient1: "var(--text__gradient1)", 
        text__gradient2: "var(--text__gradient2)", 
        text__gradient3: "var(--text__gradient3)", 
        text__gradient4: "var(--text__gradient4)", 
        text__gradient5: "var(--text__gradient5)", 
        box__gradient1: "var(--box__gradient1)", 
        box__gradient2: "var(--box__gradient2)", 
        box__gradient3: "var(--box__gradient3)", 
        box__gradient4: "var(--box__gradient4)", 
        box__gradient5: "var(--box__gradient5)", 
        box__gradient6: "var(--box__gradient6)", 
        border_color: "var(--border_color)",
        border_color2: "var(--border_color2)",
        border_color3: "var(--border_color3)",
        border_color4: "var(--border_color4)",
        border_color5: "var(--border_color5)",
        hero__gradient: "var(--hero__gradient)",
      },
      fontSize: {
        fs_12: "var(--fs_12)",
        fs_14: "var(--fs_14)",
        fs_16: "var(--fs_16)",
        fs_20: "var(--fs_20)",
        fs_24: "var(--fs_24)",
        fs_32: "var(--fs_32)",
        fs_40: "var(--fs_40)",
        fs_46: "var(--fs_46)",
        fs_48: "var(--fs_48)",
      },
      dropShadow: {
        shadow__1: "var(--shadow__1)",
        shadow__2: "var(--shadow__2)",
      },
      maxWidth: ({ theme, breakpoints }) => ({
        ...theme('spacing'),
        wrapper: '1366px',

      }),

    },
  },
  plugins: [],
}

