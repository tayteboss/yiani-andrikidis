const fetch = require('node-fetch');
require('dotenv').config({
	path: '.env.local',
});

const fetchAPI = async (query, { variables } = {}) => {
	const url = `https://graphql.datocms.com/`;
	try {
		const json = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
			},
			body: JSON.stringify({
				query,
				variables,
			}),
		}).then((response) => response.json());
		return json?.data;
	} catch (e) {
		console.warn('[datocms] fetchAPI failed:', e.message);
		return null;
	}
};

const getSiteData = async () => {
	const query = `
		query Query {
			siteInformation {
				email
				phone
				instagramLink
				vimeoLink
				profilePicture {
					url
				}
				seoImage {
					url
				}
				seoTitle
				seoDescription
				cvLink
			}
		}
	`;
	const data = await fetchAPI(query);
	if (!data || !data.siteInformation) {
		console.warn('[datocms] buildSiteData failed. Using fallback json/siteData.json');
		try {
			return require('../json/siteData.json');
		} catch (e) {
			return { siteInformation: {} };
		}
	}
	return data;
};

module.exports = {
	getSiteData,
};
