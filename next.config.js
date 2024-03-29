const nextConfig = {
	reactStrictMode: true,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	typescript: {
		// Warning: This allows production builds to successfully complete even if
		// your project has type errors.
		ignoreBuildErrors: true,
	},
	env: {
		SITE_URL: process.env.SITE_URL,
	},
	images: {
		domains: ['www.datocms-assets.com'],
	},
	async redirects() {
		return [
			{
				source: '/contact',
				destination: '/',
				permanent: true,
			},
			{
				source: '/narrative',
				destination: '/',
				permanent: true,
			},
		]
	  },
};

module.exports = nextConfig;
