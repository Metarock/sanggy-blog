/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
