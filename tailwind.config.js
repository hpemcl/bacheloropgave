module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D3644",
          light: "#61B5E9",
          lighter: "#96C9E8",
          dark: "#306B8D",
        },
        secondary: {
          DEFAULT: "#7BB5DA",
          light: "#CCE8F5",
          lighter: "#D3E6EC",
        },
        neutral: {
          DEFAULT: "#ABC7D0",
        },
      },
      fontFamily: {
        title: ['Briocolage', 'sans-serif'],
        body: ['Golos', 'sans-serif'],
      },
      fontSize: {
        title: '50px',
        subtitle1: '45px',
        subtitle2: '35px',
        subtitle3: '25px',
        bodyMain: '16px',
        bodyAlt: '20px',
        bodyMedium: '18px', // Tilføj denne linje
        bodySmall: '14px',
        btn1: '20px',
        btn2: '16px',
        btn3: '14px',
        btn4: '12px',
      },
    },
  },
  plugins: [],
};
