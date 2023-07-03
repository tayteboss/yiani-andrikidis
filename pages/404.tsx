import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import LayoutWrapper from '../components/common/LayoutWrapper';
import MenuTrigger from '../components/elements/MenuTrigger';

const PageWrapper = styled.div``;

const Page = () => {
	return (
		<PageWrapper>
			<NextSeo
				title="404 - Page Not Found"
			/>
			<LayoutWrapper>
				<h1>404 - Page Not Found</h1>
				<MenuTrigger />
			</LayoutWrapper>
		</PageWrapper>
	)
}

export default Page;
