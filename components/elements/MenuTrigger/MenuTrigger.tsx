import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useContext } from 'react';
import { MenuContext } from '../../layout/Layout';

const MenuTriggerWrapper = styled.button`
	position: absolute;
	bottom: calc(100% + 16px);
	right: ${pxToRem(16)};
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

const MenuTrigger = () => {
	const { setMenuIsOpen } = useContext(MenuContext);

	return (
		<MenuTriggerWrapper
			onClick={() => setMenuIsOpen(true)}
			className="menu-trigger"
		>
			Menu
		</MenuTriggerWrapper>
	);
};

export default MenuTrigger;
