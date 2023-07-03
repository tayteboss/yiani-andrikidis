import styled from 'styled-components';
import { getIndexPage, getSiteData } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import { ClientType, SiteData } from '../shared/types/types';
import ClientsList from '../components/blocks/ClientsList';
import MenuTrigger from '../components/elements/MenuTrigger';
import pxToRem from '../utils/pxToRem';
import sortClientDataAlphabetically from '../utils/sortClientDataAlphabetically';
import Logo from '../components/elements/Logo';

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
	clientData: ClientType[]
};

const Clients = (props: Props) => {
	const {
		siteData,
		clientData,
	} = props;

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
			<ClientsList data={clientData} />
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

export default Clients;
