const indexJs = ({ main }) => `
import React from 'react'
import { createRoot } from 'react-dom/client'


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<${main} />);
`

const indexHtml = ({ main }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${main}</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`

const tailwindConfig = `module.exports = {
    content: [
      "./public/**/*.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  `

const postCssConfig =`
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
`

const indexCss =`@tailwind base;
@tailwind components;
@tailwind utilities;
`

const setupReact = (options) => ({
  customSetup: {
    entry: '/index.js',
    environment: 'create-react-app',

    dependencies: {
      'react': '^18.2.0',
      'react-dom': '^18.2.0',
      'react-scripts': '^5.0.1',
      "autoprefixer": "^10.4.13",
      "postcss": "^8.4.20",
      "tailwindcss": "^3.2.4",
      ...options.dependencies
    },

    devDependencies: {
        "@babel/runtime": "7.13.8", 
    },

    ...options.customSetup
  },

  files: {
    '/index.js': {
      hidden: true,
      code: indexJs(options),
    },

    '/public/index.html': {
      code: indexHtml(options),
    },

    '/tailwind.config.js': {
        hidden: true,
        code: tailwindConfig,
    },

    '/postcss.config.js': {
        hidden: true,
        code: postCssConfig,
    },

  }
})

export default setupReact