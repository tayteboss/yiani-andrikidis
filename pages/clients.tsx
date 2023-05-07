import styled from 'styled-components';
import { getIndexPage, getSiteData } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import { SiteData } from '../shared/types/types';
import Clients from '../components/blocks/Clients';
import MenuTrigger from '../components/elements/MenuTrigger';
import pxToRem from '../utils/pxToRem';
import sortClientDataAlphabetically from '../utils/sortClientDataAlphabetically';

const PageWrapper = styled.div`
	min-height: calc(var(--vh) * 100);
	background: var(--colour-white);

	.menu-trigger {
		position: fixed;
		bottom: ${pxToRem(16)};
		right: ${pxToRem(16)};
	}
`;

type Props = {
	siteData: SiteData
	clientData: {}
};

const Client = (props: Props) => {
	const {
		siteData,
		clientData,
	} = props;

	console.log('clientData', clientData);
	console.log('siteData', siteData);

	return (
		<PageWrapper>
			<NextSeo
				title={`Clients - ${siteData?.seoTitle}` || 'Yiani Andrikidis'}
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
			<Clients data={clientData} />
			<MenuTrigger />
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

export default Client;
