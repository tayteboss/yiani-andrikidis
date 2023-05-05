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

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--colour-black800);

		div {
			opacity: 1;
		}
	}
`;

const Indicator = styled.div`
	position: absolute;
	right: calc(100% + 8px);
	top: 50%;
	transform: translateY(-50%);
	color: var(--colour-black);
	opacity: 0;
	pointer-events: none;
`;

const MenuTrigger = () => {
	const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);

	return (
		<MenuTriggerWrapper onClick={() => setMenuIsOpen(true)}>
			Menu
			<Indicator className="type-p">
				Home
			</Indicator>
		</MenuTriggerWrapper>
	);
};

export default MenuTrigger;
