/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans'],
        serif: ['Roboto Slab', 'serif'],
        mono: ['Roboto Mono', 'monospace']
      },
      keyframes: {
        from_bottom_appear: {
          '0%': { transform: 'translateY(2.5rem)', opacity: '0'},
          '100%': { transform: 'translateY(0)', opacity: '1'}
        },
        from_right_appear: {
          '0%': { transform: 'translateX(2.5rem)', opacity: '0'},
          '100%': { transform: 'translateX(0)', opacity: '1'}
        },
        from_left_appear: {
          '0%': { transform: 'translateX(-2.5rem)', opacity: '0'},
          '100%': { transform: 'translateX(0)', opacity: '1'}
        }
      },
      animation: {
        from_bottom_appear: 'from_bottom_appear 1.5s',
        from_right_appear: 'from_right_appear 1.5s',
        from_left_appear: 'from_left_appear 1.5s'
      }
    },
  },
  plugins: [],
}

