import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useRouter } from 'next/router';

const LogoWrapper = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	right: 0;
	padding: ${pxToRem(32)} ${pxToRem(16)};
	width: 300px;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 100px;
	backdrop-filter: blur(5px);
	color: var(--colour-white);
	z-index: 5;
`;

const LogoTag = styled.a`
	text-decoration: none;
	color: var(--colour-black800);
	white-space: pre;
`;

const Indicator = styled.span`
	color: var(--colour-black800);
	pointer-events: none;
	white-space: pre;
`;

const Logo = () => {
	const router = useRouter();

	const getPageTitle = () => {
		if (router.pathname === '/') {
			return 'Home';
		}
		if (router.pathname === '/work') {
			return 'Work';
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
