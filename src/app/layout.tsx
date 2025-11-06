import type { Metadata, Viewport } from "next";

//prettier-ignore
import { OutfitThin, OutfitExtraLight, OutfitLight, OutfitRegular, OutfitMedium, OutfitSemiBold, OutfitBold, OutfitExtraBold, OutfitBlack } from "@/lib/fonts";
import { DOMAIN_BASE_URL } from "@/lib/constants";
import "../styles/globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(DOMAIN_BASE_URL),
	applicationName: "NextIcons.com",
	title: "Next Icons ~ Icon library for React and Next.js",
	//prettier-ignore
	description: "Lightweight icon component library for React and Next.js, designed for simplicity and seamless integration.",
	keywords: [
		"react icons",
		"lucide icons",
		"lucide react",
		"website icons",
		"web icons",
		"new icons",
		"icons data",
		"shared icons",
		"icon library",
		"customizable icons",
		"icons for projects",
		"styling icons",
		"clean icons",
		"colored icons",
		"development icons",
		"free icons",
		"app icons",
		"svg icons",
		"nextjs icons",
		"react",
		"nextjs",
		"icons",
		"svg",
		"next icons",
		"next icon",
		"icon library for nextjs",
		"next js icon library",
		"next js icons",
		"nextjs icon library",
	],
	generator: "Next.js",
	twitter: {
		card: "summary",
		title: "Next Icons ~ Icon library for React and Next.js",
		//prettier-ignore
		description: "Lightweight icon component library for React and Next.js, designed for simplicity and seamless integration.",
		images: `${DOMAIN_BASE_URL}/assets/Logo-Symbol.png`,
	},
	appleWebApp: {
		title: "Next Icons ~ Icon library for React and Next.js",
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		siteName: "NextIcons.com",
		title: "Next Icons ~ Icon library for React and Next.js",
		//prettier-ignore
		description: "Lightweight icon component library for React and Next.js, designed for simplicity and seamless integration.",
		type: "website",
		locale: "en",
		url: new URL(DOMAIN_BASE_URL),
		emails: "contact@nexticons.com",
		images: [
			{
				url: `${DOMAIN_BASE_URL}/assets/Logo-Symbol.png`,
				width: 512,
				height: 512,
				alt: "NextIcons.com",
				type: "image/png",
			},
		],
	},
	alternates: {
		canonical: DOMAIN_BASE_URL,
	},
	publisher: "Vercel",
	category: "Icon Library",
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "36x36",
			url: "/favicons/android-icon-36x36.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "48x48",
			url: "/favicons/android-icon-48x48.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "72x72",
			url: "/favicons/android-icon-72x72.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/favicons/android-icon-96x96.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "144x144",
			url: "/favicons/android-icon-144x144.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "192x192",
			url: "/favicons/android-icon-192x192.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "57x57",
			url: "/favicons/apple-icon-57x57.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "60x60",
			url: "/favicons/apple-icon-60x60.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "72x72",
			url: "/favicons/apple-icon-72x72.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "76x76",
			url: "/favicons/apple-icon-76x76.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "114x114",
			url: "/favicons/apple-icon-114x114.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "120x120",
			url: "/favicons/apple-icon-120x120.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "144x144",
			url: "/favicons/apple-icon-144x144.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "152x152",
			url: "/favicons/apple-icon-152x152.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "180x180",
			url: "/favicons/apple-icon-180x180.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicons/favicon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicons/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/favicons/favicon-96x96.png",
		},
		{
			rel: "shortcut icon",
			type: "images/x-icon",
			url: "/favicons/favicon.ico",
		},
	],
};

export const viewport: Viewport = {
	initialScale: 1,
	minimumScale: 1,
	width: "device-width",
	themeColor: "#A855F7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`bg-[#121212] ${OutfitThin.className} ${OutfitExtraLight.className} ${OutfitLight.className} ${OutfitRegular.className} ${OutfitMedium.className} ${OutfitSemiBold.className} ${OutfitBold.className} ${OutfitExtraBold.className} ${OutfitBlack.className} antialiased`}
			>
				<main>{children}</main>
			</body>
		</html>
	);
}
