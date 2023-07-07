import styled from 'styled-components';
import { getFilteredWorkProjects, getIndexPage, getSiteData } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import { ClientType, SiteData } from '../shared/types/types';
import ClientsList from '../components/blocks/ClientsList';
import MenuTrigger from '../components/elements/MenuTrigger';
import pxToRem from '../utils/pxToRem';
import sortClientDataAlphabetically from '../utils/sortClientDataAlphabetically';
import FilterWidget from '../components/elements/FilterWidget';
import { useEffect, useState } from 'react';

const PageWrapper = styled.div`
	min-height: calc(var(--vh) * 100);
	background: var(--colour-white);

	.menu-trigger {
		position: fixed;
		bottom: ${pxToRem(16)};
		right: ${pxToRem(16)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			right: ${pxToRem(8)};
		}
	}
`;

type Props = {
	siteData: SiteData
	clientData: ClientType[]
};

const Work = (props: Props) => {
	const {
		siteData,
		clientData,
	} = props;

	const [activeFilter, setActiveFilter] = useState('none');
	const [filteredData, setFilteredData] = useState(false);

	const fetchData = async (filter: string) => {
		if (filter !== 'none') {
			const data = await getFilteredWorkProjects(filter);
			setFilteredData(data);
		} else {
			setFilteredData(false);
		}
	};

	useEffect(() => {
		fetchData(activeFilter);
	}, [activeFilter]);

	return (
		<PageWrapper>
			<NextSeo
				title={`Work - ${siteData?.seoTitle}` || 'Yiani Andrikidis'}
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
			<ClientsList
				data={clientData}
				filteredData={filteredData}
			/>
			<MenuTrigger />
			<FilterWidget
				activeFilter={activeFilter}
				setActiveFilter={setActiveFilter}
			/>
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteData = await getSiteData();
	let clientData = await getIndexPage();

	clientData = sortClientDataAlphabetically(clientData);

	return {
		props: {
			siteData,
			clientData,
		},
	};
}

export default Work;
