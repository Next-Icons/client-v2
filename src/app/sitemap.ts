import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.nexticons.com",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 1.0,
		},
	];
}
