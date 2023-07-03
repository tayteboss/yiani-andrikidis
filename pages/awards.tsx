import styled from 'styled-components';
import { getAwardPage, getIndexPage, getSiteData } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import { SiteData } from '../shared/types/types';
import Clients from '../components/blocks/ClientsList';
import MenuTrigger from '../components/elements/MenuTrigger';
import pxToRem from '../utils/pxToRem';
import sortClientDataAlphabetically from '../utils/sortClientDataAlphabetically';
import AwardsList from '../components/blocks/AwardsList';
import Logo from '../components/elements/Logo';

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
	awardsData: {}
};

const Awards = (props: Props) => {
	const {
		siteData,
		awardsData,
	} = props;

	return (
		<PageWrapper>
			<NextSeo
				title={`Awards - ${siteData?.seoTitle}` || 'Yiani Andrikidis'}
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
			<AwardsList data={awardsData} />
			<MenuTrigger />
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteData = await getSiteData();
	let awardsData = await getAwardPage();

	return {
		props: {
			siteData,
			awardsData,
		},
	};
}

export default Awards;
