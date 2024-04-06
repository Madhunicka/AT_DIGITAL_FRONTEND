/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#6B3CC9',
        secondary: '#F28D35',
        analogous1: ' #6A44F2',
        analogous2 : '#1CBDDD',
        triadic1 : '#52378C',
        dark : '#78BF91',
        textNorm : '#2F2F2F',
        textLight: '#545A75',
        subtle: '#9C9991',
        accent1: '#E2F2FE',
        accent2 : '#FFF8E0',
        error: '#FF0335',
        success : '#5EB30B',
        
       },
       height:{
       
        75: '19.3rem',
        100: '25rem',
        120: '30rem',
        130: '35rem',
        139: '39rem',    
        140: '40rem',
        150: '45rem',
        160: '50rem',
        170: '55rem',
        180: '60rem',
      },
      width:{
        100: '25rem',
        120: '30rem',
        130: '35rem',
        
        139: '39.5rem',    
        140: '40rem',
        150: '45rem',
        160: '50rem',
        170: '55rem',
        180: '60rem',
      },
      // fontSize:{
      //   '4.5xl': '2.5rem',
      //   '3.5xl': '2rem',
      //   '3xs': '.4rem',
      // },
      screens:{
        'xl': '375',
        '2xl': '768px',

        '3xl': '1024px',
        '4xl': '1200px',
        '5xl': '1440px',
        
      },
      
       
       
    },
  },
  plugins: [],
}

