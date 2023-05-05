import styled from 'styled-components';
import Link from 'next/link';
import { renderNodeRule, StructuredText } from 'react-datocms';
import { isLink, isParagraph } from 'datocms-structured-text-utils';

const Content = styled.span`
	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const Name = styled.span`
	color: var(--colour-blue);
`;

type Props = {
	className?: string;
	data: any;
	color?: string;
};

const HomeRichText = (props: Props) => {
	const {
		className,
		data,
		color
	} = props;

	return (
	<Content className={`${className} content content--${color}`}>
		<Name> Yiani Andrikidis </Name>
		<StructuredText
			data={data}
			customNodeRules={[
				renderNodeRule(isLink, ({ node, children, key }) => (
					<Link href={node.url} passHref key={key} scroll={false}>
						<a target="_blank">{children}</a>
					</Link>
				)),
				renderNodeRule(isParagraph, ({ children, key }) => (
					<span key={key}>{children}</span>
				)),
			]}
		/>
	</Content>
	);
};

export default HomeRichText;
