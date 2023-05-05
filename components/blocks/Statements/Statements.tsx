import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import Statement from './Statement';
import { useState } from 'react';
import pxToRem from '../../../utils/pxToRem';

const StatementsWrapper = styled.div`
	display: inline-block;
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
