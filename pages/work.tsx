import styled from 'styled-components';
import {
	getFilteredWorkProjects,
	getIndexPage,
	getSiteData
} from '../lib/datocms';
import { NextSeo } from 'next-seo';
import { ClientType, SiteData } from '../shared/types/types';
import ClientsList from '../components/blocks/ClientsList';
import MenuTrigger from '../components/elements/MenuTrigger';
import pxToRem from '../utils/pxToRem';
import sortClientDataAlphabetically from '../utils/sortClientDataAlphabetically';
import FilterWidget from '../components/elements/FilterWidget';
import { useRouter } from 'next/router';
import { useEffect, useState, useMemo } from 'react';
import LayoutWrapper from '../components/common/LayoutWrapper';

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

const TitleWrapper = styled.section``;

const TitleInner = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: ${pxToRem(24)};
	padding: ${pxToRem(80)} 0 ${pxToRem(8)};
	border-bottom: 1px solid var(--colour-black400);
`;

const CategoryWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(8)};
`;

const CategoryTrigger = styled.button<{ $isActive: boolean }>`
	opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		opacity: 1;
	}
`;

const Title = styled.h1``;

type Props = {
	siteData: SiteData;
	clientData: ClientType[];
};

const NoResults = styled.div`
	padding: ${pxToRem(160)} 0;
	text-align: center;
	color: var(--colour-black);
`;

const Work = (props: Props) => {
	const { siteData, clientData } = props;
	const router = useRouter();

	const [activeFilter, setActiveFilter] = useState('none');
	const [activeCategory, setActiveCategory] = useState('all');
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

	useEffect(() => {
		if (router.isReady) {
			const category = router.query.category as string;
			if (category && ['director', 'producer'].includes(category.toLowerCase())) {
				setActiveCategory(category.toLowerCase());
			} else {
				setActiveCategory('all');
			}
		}
	}, [router.isReady, router.query]);

	const handleCategoryChange = (category: string) => {
		setActiveCategory(category);
		
		const query = { ...router.query };
		
		if (category === 'all') {
			delete query.category;
		} else {
			query.category = category;
		}

		router.push(
			{
				pathname: router.pathname,
				query
			},
			undefined,
			{ shallow: true }
		);
	};

	const displayedData = useMemo(() => {
		const baseData = filteredData || clientData;

		if (!Array.isArray(baseData)) return [];

		return baseData
			.map((client) => {
				if (activeCategory === 'all') return client;

				const filteredProjects = client.project.filter(
					(p) => p.role?.toLowerCase() === activeCategory.toLowerCase()
				);

				return {
					...client,
					project: filteredProjects
				};
			})
			.filter((client) => client.project.length > 0);
	}, [activeCategory, filteredData, clientData]);

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
							height: 600
						}
					]
				}}
			/>
			<TitleWrapper>
				<LayoutWrapper>
					<TitleInner>
						<Title>Work</Title>
						<CategoryWrapper>
							<CategoryTrigger
								className="type-h3"
								$isActive={activeCategory === 'all'}
								onClick={() => handleCategoryChange('all')}
							>
								All
							</CategoryTrigger>
							<CategoryTrigger
								className="type-h3"
								$isActive={activeCategory === 'director'}
								onClick={() => handleCategoryChange('director')}
							>
								Director
							</CategoryTrigger>
							<CategoryTrigger
								className="type-h3"
								$isActive={activeCategory === 'producer'}
								onClick={() => handleCategoryChange('producer')}
							>
								Producer
							</CategoryTrigger>
						</CategoryWrapper>
					</TitleInner>
				</LayoutWrapper>
			</TitleWrapper>
			{displayedData.length > 0 ? (
				<ClientsList data={clientData} filteredData={displayedData} />
			) : (
				<LayoutWrapper>
					<NoResults className="type-h2">No results found</NoResults>
				</LayoutWrapper>
			)}
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
			clientData
		}
	};
}

export default Work;
