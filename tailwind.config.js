/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in',
        fadeInUp: 'fadeInUp 0.7s ease-out',
        fadeInLeft: 'fadeInLeft 0.7s ease-out',
        fadeInRight: 'fadeInRight 0.7s ease-out',
        scaleIn: 'scaleIn 0.7s ease-out',
        float: 'float 3s ease-in-out infinite',
        glitch: 'glitch 1s infinite',
        scanline: 'scanline 8s linear infinite',
        flicker: 'flicker 0.5s infinite',
        'ellipsis-1': 'ellipsis 1s infinite 0s',
        'ellipsis-2': 'ellipsis 1s infinite 0.2s',
        'ellipsis-3': 'ellipsis 1s infinite 0.4s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%': { opacity: '0.8' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.8' },
        },
        ellipsis: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      perspective: {
        'none': 'none',
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      rotate: {
        'y-15': 'rotateY(-15deg)',
      },
    },
  },
  plugins: [],
};
