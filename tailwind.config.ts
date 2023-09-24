module.exports = {
  content: [
    "./src/*",
    "./assets/*.css",
    "./assets/*.scss",
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
};
