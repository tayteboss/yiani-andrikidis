import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import Statement from './Statement';
import { useState } from 'react';

const StatementsWrapper = styled.div`
	display: inline-block;
	overflow: auto;
	position: relative;
	z-index: 1;
	padding-bottom: calc(var(--feature-wrapper-height) + 32px);
	background: var(--colour-white);
	filter: brightness(var(--brightness));

	transition: filter var(--transition-speed-default) var(--transition-ease);
`;

const Span = styled.span`
	white-space: pre;
`;

const MoreButton = styled.button`
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

	const handleClick = () => {
		const newDisplayedTexts = [...displayedTexts, data[index]];
		setDisplayedTexts(newDisplayedTexts);
		setIndex((prevIndex) => (prevIndex + 1) % data.length);
	};

	return (
		<StatementsWrapper>
			<LayoutWrapper>
				{displayedTexts.map((item: any, i: number) => (
					<Statement data={item} key={i} />
				))}
				<Span> </Span>
				<MoreButton 
					onClick={handleClick}
					className="type-h1"
				>
					More
				</MoreButton>
			</LayoutWrapper>
		</StatementsWrapper>
	);
};

export default Statements;
