// import the withMT function
const withMT = require("@material-tailwind/react/utils/withMT");

// call the withMT function with your existing Tailwind CSS configuration object
const config = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
});

// export the result of the withMT function as the default module
export default config;
