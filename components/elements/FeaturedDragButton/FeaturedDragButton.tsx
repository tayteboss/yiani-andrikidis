import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type StyledProps = {
	$isActive: boolean;
	$isMini: boolean;
}

const FeaturedDragButtonWrapper = styled.button<StyledProps>`
	position: absolute;
	bottom: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: ${pxToRem(72)};
	height: 22px;
	background: var(--colour-black600);
	z-index: 2;
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;
	opacity: ${(props) => (!props.$isMini ? 1 : props.$isActive ? 1 : 0)};
	color: var(--colour-white);

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--colour-blue);
	}
`;

type Props = {
	setIsMini: (isMini: boolean) => void;
	isMini: boolean;
	isHovered: boolean;
};

const FeaturedDragButton = (props: Props) => {
	const {
		setIsMini,
		isMini,
		isHovered
	} = props;

	return (
		<FeaturedDragButtonWrapper
			onClick={() => setIsMini(!isMini)}
			$isActive={isHovered}
			$isMini={isMini}
		>
			{isMini ? 'Expand' : 'Collapse'}
		</FeaturedDragButtonWrapper>
	);
};

export default FeaturedDragButton;
