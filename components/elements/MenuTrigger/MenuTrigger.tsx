import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useContext } from 'react';
import { MenuContext } from '../../layout/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MenuTriggerWrapper = styled.div`
	position: absolute;
	bottom: calc(100% + 16px);
	right: ${pxToRem(16)};
	background: rgba(255, 255, 255, 0.2);
	border-radius: 100px;
	backdrop-filter: blur(5px);
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 50;
`;

const MenuTriggerButton = styled.button`
	height: ${pxToRem(50)};
	width: ${pxToRem(50)};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--colour-blue);
	color: var(--colour-white);
	z-index: 10;
	margin: ${pxToRem(4)};

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--colour-black800);

		div {
			opacity: 1;
		}
	}
`;

const LogoWrapper = styled.div`
	display: flex;
	color: var(--colour-white);
	padding: ${pxToRem(8)} ${pxToRem(32)} ${pxToRem(8)} ${pxToRem(16)};
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

const MenuTrigger = () => {
	const { setMenuIsOpen } = useContext(MenuContext);

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
		<MenuTriggerWrapper
			onClick={() => setMenuIsOpen(true)}
			className="menu-trigger"
		>
			<LogoWrapper>
				<Link href="/" passHref>
					<LogoTag className="type-h4">
						Yiani Andrikidis
					</LogoTag>
				</Link>
				{getPageTitle() !== 'Home' && (
					<Indicator className="type-h4">
						{" "}// {getPageTitle()}
					</Indicator>
				)}
			</LogoWrapper>
			<MenuTriggerButton>
				Menu
			</MenuTriggerButton>
		</MenuTriggerWrapper>
	);
};

export default MenuTrigger;
