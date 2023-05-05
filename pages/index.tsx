import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import styled from 'styled-components';
import { getFeaturedProjects, getHomePage, getSiteData } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import { SiteData } from '../shared/types/types';
import Statements from '../components/blocks/Statements';

const PageWrapper = styled.div``;

type Props = {
	homeData: {
		homePageStatements: [];
	}
	siteData: SiteData
	featuredProjects: {}
};

const Page = (props: Props) => {
	const {
		homeData,
		siteData,
		featuredProjects
	} = props;

	console.log('homeData', homeData);
	console.log('siteData', siteData);
	console.log('featuredProjects', featuredProjects);

	return (
		<PageWrapper>
			<NextSeo
				title={siteData?.seoTitle || 'Yiani Andrikidis'}
				description={siteData?.seoDescription || 'Yiani Andrikidis'}
				openGraph={{
					images: [
						{
							url: siteData?.seoImage?.url,
							width: 800,
							height: 600,
						},
					],
				}}
			/>
			<Statements data={homeData?.homePageStatements} />
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const homeData = await getHomePage();
	const siteData = await getSiteData();
	const featuredProjects = await getFeaturedProjects();

	return {
		props: {
			homeData,
			siteData,
			featuredProjects
		},
	};
}

export default Page;
