import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useContext } from 'react';
import { MenuContext } from '../../layout/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

type StyledProps = {
	$isHomePage: boolean;
};

const MenuTriggerWrapper = styled.div<StyledProps>`
	position: absolute;
	bottom: ${(props) => props.$isHomePage ? 'calc(100% + 32px)' : 'calc(100% + 16px)'};
	right: ${pxToRem(16)};
	background: rgba(242, 242, 244, 0.5);
	border: 1px solid var(--colour-black200);
	backdrop-filter: blur(5px);
	border-radius: 100px;
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
		if (router.pathname === '/work') {
			return 'Work';
		}
		if (router.pathname === '/awards') {
			return 'Awards';
		}
	};

	return (
		<MenuTriggerWrapper
			className="menu-trigger"
			$isHomePage={router.pathname === '/'}
		>
			{router.pathname !== '/work' && (
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
			)}
			<MenuTriggerButton onClick={() => setMenuIsOpen(true)}>
				Menu
			</MenuTriggerButton>
		</MenuTriggerWrapper>
	);
};

export default MenuTrigger;
