import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const FeaturedDragButtonWrapper = styled.button`
	position: absolute;
	bottom: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: ${pxToRem(60)};
	height: 15px;
	background: var(--colour-black600);
	z-index: 2;
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--colour-blue);
	}

	&::after {
		content: "";
		position: absolute;
		top: calc(50% - 1px);
		left: 50%;
		transform: translate(-50%, -50%);
		width: ${pxToRem(30)};
		height: 1px;
		background: var(--colour-white);
	}

	&::before {
		content: "";
		position: absolute;
		top: calc(50% + 2px);
		left: 50%;
		transform: translate(-50%, -50%);
		width: ${pxToRem(30)};
		height: 1px;
		background: var(--colour-white);
	}
`;

type Props = {
	setIsMini: (isMini: boolean) => void;
	isMini: boolean;
};

const FeaturedDragButton = (props: Props) => {
	const {
		setIsMini,
		isMini
	} = props;

	return (
		<FeaturedDragButtonWrapper onClick={() => setIsMini(!isMini)} />
	);
};

export default FeaturedDragButton;
