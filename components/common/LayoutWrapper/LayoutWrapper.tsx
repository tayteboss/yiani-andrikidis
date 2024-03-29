import { ReactNode } from 'react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	children: ReactNode;
};

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${(props) => props.theme.layout.innerWrapper};
	padding-left: ${pxToRem(16)};
	padding-right: ${pxToRem(16)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding-left: ${pxToRem(8)};
		padding-right: ${pxToRem(8)};
	}
`;

const LayoutWrapper = (props: Props) => (
	<Wrapper className="inner-wrapper">{props.children}</Wrapper>
);

export default LayoutWrapper;
