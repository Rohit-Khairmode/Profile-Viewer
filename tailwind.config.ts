import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: '#e67e22',
  			tint1: '#fdf2e9',
  			tint2: '#fae5d3',
  			tint3: '#eb984e',
  			shade1: '#cf711f',
  			shade2: '#45260a',
  			gray1: '#888',
  			gray2: '#555',
  			gray3: '#333',
  			light_grey1: '#767676',
  			light_grey2: '#6f6f6f'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
/*
-------02 colors

--Primary color :#e67e22;

--Tints(lighter versions):
#fdf2e9
#fae5d3
#eb984e

--Shades(dark versions):
#cf711f
#45260a
--Accents:
--Grays: 
#888
#767676 (lightest grey allowed on #ff)
#555
#333
#6f6f6f(lightest gray allowed on #fdf2e9)

---- 05 shadows
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);

---- 06 BORDER-RADIUS

defult:9px
*/
