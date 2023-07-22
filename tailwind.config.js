// Import the withMT function
const withMT = require("@material-tailwind/react/utils/withMT");

// Create a Tailwind CSS configuration object
const config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// Wrap the configuration object with the withMT function
const wrappedConfig = withMT(config);

// Export the wrapped configuration object
export default wrappedConfig;