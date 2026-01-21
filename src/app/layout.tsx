import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Geist_Mono, Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { GAProvider } from '@/lib/ga4';

const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
	preload: true,
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'Admin | Designthou',
		template: 'Admin | %s',
	},
	description: 'Designthou Admin pages',
	icons: {
		icon: [
			{ url: '/admin/favicon.ico', sizes: 'any' },
			{ url: '/admin/favicon.ico', sizes: 'image/x-icon' },
			{ url: '/admin/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
			{ url: '/admin/favicon.svg', type: 'image/svg+xml' },
		],
		shortcut: '/admin/favicon.ico',
		apple: '/admin/apple-touch-icon.png',
	},
	manifest: '/admin/site.webmanifest',
	themeColor: '#ffffff',
	appleWebApp: {
		title: 'Designthou Admin',
	},
	other: {
		'msapplication-TileColor': '#ffffff',
	},
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false,
		},
	},
	verification: undefined,
};

export const viewport: Viewport = {
	themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ko">
			<head>
				<meta name="msapplication-TileColor" content="ffffff" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
				<meta name="robots" content="index, follow" />
			</head>
			<body className={`${inter.variable} ${geistMono.variable} antialiased`}>
				{children}

				{process.env.NEXT_PUBLIC_GA4_ID ? <GAProvider gaId={process.env.NEXT_PUBLIC_GA4_ID} /> : null}
				<Analytics />
			</body>
		</html>
	);
}
