/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans'],
        serif: ['Roboto Slab', 'serif'],
        mono: ['Roboto Mono', 'monospace']
      },
    },
  },
  plugins: [],
}

