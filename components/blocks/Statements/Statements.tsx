import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import Statement from './Statement';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';

const StatementsWrapper = styled.div`
	display: inline-block;
	overflow: auto;
	position: relative;
	z-index: 1;
	padding-top: ${pxToRem(8)};
	padding-bottom: calc(var(--feature-wrapper-height) + 64px);
	background: var(--colour-white);
	filter: brightness(var(--brightness));
	min-height: 100vh;

	transition: filter var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-bottom: calc(var(--feature-wrapper-height) + 80px);
	}
`;

const Span = styled.span`
	white-space: pre;
`;

const MoreButton = styled(motion.button)`
	display: inline;
	color: var(--colour-blue);
	position: relative;
	white-space: pre;

	&::after {
		content: "";
		position: absolute;
		bottom: 3px;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: 4px;
		background: var(--colour-blue);

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			height: 3px;
			bottom: 1px;
		}
	}
`;

type Props = {
	data: any;
};

const Statements = (props: Props) => {
	const {
		data
	} = props;

	const [index, setIndex] = useState(1);
	const [displayedTexts, setDisplayedTexts] = useState<any>([data[0]]);
	const [isHovered, setIsHovered] = useState(false);
	const [moreO, setMoreO] = useState("o");
	const [moreBtnTooCloseToRightEdge, setMoreBtnTooCloseToRightEdge] = useState(false);

	const moreBtnRef = useRef(null);

	const handleClick = () => {
		const newDisplayedTexts = [...displayedTexts, data[index]];
		setDisplayedTexts(newDisplayedTexts);
		setIndex((prevIndex) => (prevIndex + 1) % data.length);
		setMoreO("o");
	};

	useEffect(() => {
		const moreBtn = moreBtnRef?.current;
		if (!moreBtn) return;

		const threshold = 300;
		const rect = moreBtn.getBoundingClientRect();
		const distanceToRightEdge = window.innerWidth - rect.right;
		const tooClose = distanceToRightEdge <= threshold;

		setMoreBtnTooCloseToRightEdge(tooClose);

		if (moreBtnTooCloseToRightEdge || tooClose) return;

		if (isHovered) {
			const interval = setInterval(() => {
				setMoreO((prevMoreO) => {
					if (prevMoreO.length === 3) {
						clearInterval(interval);
						return prevMoreO;
					}
					return prevMoreO + "o";
				});
			}, 100);
			return () => clearInterval(interval);
		} else {
			setMoreO("o");
		}
	}, [isHovered, moreBtnTooCloseToRightEdge]);

	return (
		<StatementsWrapper>
			<LayoutWrapper>
				{displayedTexts.map((item: any, i: number) => (
					<Statement data={item} key={i} index={index} />
				))}
				<Span> </Span>
				<MoreButton 
					onClick={handleClick}
					className="type-h1"
					onMouseOver={() => setIsHovered(true)}
					onMouseOut={() => setIsHovered(false)}
					ref={moreBtnRef}
				>
					M{moreO}re
				</MoreButton>
			</LayoutWrapper>
		</StatementsWrapper>
	);
};

export default Statements;
