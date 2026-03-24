import { GraphQLClient } from 'graphql-request';
import {
	HOME_PAGE_QUERY,
	INDEX_PAGE_QUERY,
	INDEX_PAGE_FILTER_QUERY,
	FEATURED_PROJECTS_QUERY
	// AWARD_PAGE_QUERY
} from './queries/page';
import SITE_QUERY from './queries/siteData';
import siteDataFallback from '../json/siteData.json';

type Request = {
	query: string;
	variables?: {};
	preview?: boolean;
};

const request = ({ query, variables, preview = false }: Request) => {
	const endpoint = preview
		? `https://graphql.datocms.com/preview`
		: `https://graphql.datocms.com/`;
	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
		},
	});
	return client.request(query, variables);
};

export const getSiteData = async () => {
	try {
		const data = await request({
			query: SITE_QUERY,
			variables: { siteId: process.env.SITE_ID },
			preview: false
		});
		return data?.siteInformation;
	} catch {
		console.warn(
			'[datocms] getSiteData failed; using json/siteData.json (e.g. quota exceeded).'
		);
		return siteDataFallback.siteInformation;
	}
};

export const getHomePage = async () => {
	try {
		const data = await request({
			query: HOME_PAGE_QUERY
		});
		return data?.homePage;
	} catch {
		console.warn('[datocms] getHomePage failed; using empty statements.');
		return { homePageStatements: [] };
	}
};

export const getIndexPage = async () => {
	try {
		const data = await request({
			query: INDEX_PAGE_QUERY
		});
		return data?.allIndexProjects ?? [];
	} catch {
		console.warn('[datocms] getIndexPage failed; using empty list.');
		return [];
	}
};

export const getFilteredWorkProjects = async (filter: string) => {
	try {
		const data = await request({
			query: INDEX_PAGE_FILTER_QUERY,
			variables: { filter }
		});
		return data?.allIndexProjects ?? [];
	} catch {
		console.warn('[datocms] getFilteredWorkProjects failed.');
		return [];
	}
};

export const getFeaturedProjects = async () => {
	try {
		const data = await request({
			query: FEATURED_PROJECTS_QUERY
		});
		return data?.allFeaturedProjects ?? [];
	} catch {
		console.warn('[datocms] getFeaturedProjects failed; using empty list.');
		return [];
	}
};

// Awards page — uncomment when restoring AWARD_PAGE_QUERY export and /awards page.
// Add AWARD_PAGE_QUERY to the import from './queries/page' above.
/*
export const getAwardPage = async () => {
	try {
		const data = await request({
			query: AWARD_PAGE_QUERY
		});
		return data?.allAwards ?? [];
	} catch {
		console.warn('[datocms] getAwardPage failed; using empty list.');
		return [];
	}
};
*/
