import { NextSeo } from 'next-seo';
import styled from 'styled-components';

const PageWrapper = styled.div``;

const Page = () => {
	return (
		<PageWrapper>
			<NextSeo
				title="Boiler"
				description="Boiler Plate"
				// openGraph={{
				// 	images: [
				// 		{
				// 			url: siteData?.seoImage?.url,
				// 			width: 800,
				// 			height: 630,
				// 		},
				// 	],
				// }}
			/>
		</PageWrapper>
	)
}

export default Page;
