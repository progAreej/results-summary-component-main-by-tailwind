/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    backgroundColor:{
      'L-red': "hsl(0, 100%, 67%,0.1)",
      'O-yellow': "hsl(39, 100%, 56%,0.1)",
      'G-teal': "hsl(166, 100%, 37%,0.1)",
      'C-blue': 'hsl(234, 85%, 45%,0.1)',
      'White': 'hsl(0, 0%, 100%)',
      'P-blue':'hsl(221, 100%, 96%)',
      'Dblue':'hsl(224, 30%, 27%)'
    },
    borderRadius:{
      'large': '40px',
      'full': '9999px',
      'medium':'10px',
    },
    colors:{
      'lsb':'#7857FF',
      'lrb':'#2E2BE9',
      'vb':'hsla(256, 72%, 46%, 1)',
      'pb':'hsla(241, 72%, 46%, 0)'
    },
    textColor:{
      'Lred': "hsl(0, 100%, 67%)",
      'White': 'hsl(0, 0%, 100%)',
      'O-yellow': "hsl(39, 100%, 56%)",
      'G-teal': "hsl(166, 100%, 37%)",
      'C-blue': 'hsl(234, 85%, 45%)',
      'White': 'hsl(0, 0%, 100%)',
      'P-blue':'hsl(221, 100%, 96%)',
      'Dblue':'hsl(224, 30%, 27%)'
   
    },
    
    extend: {},
  },
  plugins: [],
}

