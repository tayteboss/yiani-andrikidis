import { GraphQLClient } from 'graphql-request';
import { HOME_PAGE_QUERY, INDEX_PAGE_QUERY, INDEX_PAGE_FILTER_QUERY, AWARD_PAGE_QUERY, FEATURED_PROJECTS_QUERY } from './queries/page';
import SITE_QUERY from './queries/siteData';

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
	const data = await request({
		query: SITE_QUERY,
		variables: { siteId: process.env.SITE_ID },
		preview: false
	});

	return data?.siteInformation;
};

export const getHomePage = async () => {
	const data = await request({
		query: HOME_PAGE_QUERY,
	});

	return data?.homePage;
};

export const getIndexPage = async () => {
	const data = await request({
		query: INDEX_PAGE_QUERY,
	});

	return data?.allIndexProjects;
};

export const getFilteredWorkProjects = async (filter: string) => {
	const data = await request({
		query: INDEX_PAGE_FILTER_QUERY,
		variables: { filter },
	});

	return data?.allIndexProjects;
};

export const getAwardPage = async () => {
	const data = await request({
		query: AWARD_PAGE_QUERY,
	});

	return data?.allAwards;
};

export const getFeaturedProjects = async () => {
	const data = await request({
		query: FEATURED_PROJECTS_QUERY,
	});

	return data?.allFeaturedProjects;
};
