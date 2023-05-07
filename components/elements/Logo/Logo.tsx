import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useRouter } from 'next/router';

const LogoWrapper = styled.div`
	display: flex;
	position: fixed;
	bottom: ${pxToRem(16)};
	left: ${pxToRem(16)};
	color: var(--colour-white);
	mix-blend-mode: difference;
`;

const LogoTag = styled.a`
	text-decoration: none;
	color: var(--colour-white);
	white-space: pre;
`;

const Indicator = styled.span`
	color: var(--colour-white);
	pointer-events: none;
	white-space: pre;
`;

const Logo = () => {
	const router = useRouter();

	const getPageTitle = () => {
		if (router.pathname === '/') {
			return 'Home';
		}
		if (router.pathname === '/clients') {
			return 'Clients';
		}
		if (router.pathname === '/awards') {
			return 'Awards';
		}
	};

	return (
		<LogoWrapper>
			<Link href="/" passHref>
				<LogoTag className="type-h4">
					Yiani Andrikidis
				</LogoTag>
			</Link>
			<Indicator className="type-h4">
				{" "}// {getPageTitle()}
			</Indicator>
		</LogoWrapper>
	);
};

export default Logo;
