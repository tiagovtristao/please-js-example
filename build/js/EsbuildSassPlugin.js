const path = require('path');

const autoprefixer = require('autoprefixer')
const {sassPlugin} = require('esbuild-sass-plugin');
const postcss = require('postcss')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = function({paths, root}) {
  return sassPlugin({
    // Handle internal library mapping.
    importMapper: function(importPath) {
      for (const [name, location] of Object.entries(paths)) {
        const regex = new RegExp(`${name}/?`);

        const index = importPath.search(regex);
        if (index !== -1) {
          return path.join(root, location, importPath.substring(index + name.length));
        }
      }

      return importPath;
    },
    // Apply PostCSS
    async transform(source) {
      const {css} = await postcss([autoprefixer, postcssPresetEnv({stage: 0})]).process(source)

      return css;
    }
  });
}
