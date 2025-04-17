
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '#E2E8F0',
				input: '#E2E8F0',
				ring: '#F5A623',
				background: '#FFFFFF',
				foreground: '#333333',
				primary: {
					DEFAULT: '#F5A623',
					foreground: '#FFFFFF',
					light: '#FFEBC4',
					dark: '#D68C00'
				},
				secondary: {
					DEFAULT: '#E29C45',
					foreground: '#FFFFFF',
					light: '#F8D8A8',
					dark: '#B27B2E'
				},
				whisper: {
					DEFAULT: '#F5A623',
					light: '#FFEBC4',
					dark: '#D68C00'
				},
				muted: {
					DEFAULT: '#F1F5F9',
					foreground: '#64748B'
				},
				accent: {
					DEFAULT: '#F7B955',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#FF4D4F',
					foreground: '#FFFFFF'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#333333'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#333333'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"slide-in": {
					"0%": { transform: "translateY(10px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"pulse-light": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.7" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out",
				"slide-in": "slide-in 0.5s ease-out",
				"pulse-light": "pulse-light 2s ease-in-out infinite"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
