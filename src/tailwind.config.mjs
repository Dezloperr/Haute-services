/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                '2xl': ['1.5rem', { lineHeight: '1.25', letterSpacing: '0.025em', fontWeight: '500' }],
                '3xl': ['1.875rem', { lineHeight: '1.25', letterSpacing: '0.025em', fontWeight: '500' }],
                '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '0.025em', fontWeight: '500' }],
                '5xl': ['3rem', { lineHeight: '1', letterSpacing: '0.025em', fontWeight: '600' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0.025em', fontWeight: '600' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0.025em', fontWeight: '600' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '0.025em', fontWeight: '600' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '0.025em', fontWeight: '600' }],
            },
            fontFamily: {
                heading: "cormorantgaramond",
                paragraph: "sora-light"
            },
            colors: {
                'gold-accent': '#E3E3E3',
                destructive: '#D32F2F',
                'destructive-foreground': '#FFFFFF',
                background: '#ffffff',
                secondary: '#000000',
                foreground: '#000000',
                'secondary-foreground': '#FFFFFF',
                'primary-foreground': '#FFFFFF',
                primary: '#000000'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
