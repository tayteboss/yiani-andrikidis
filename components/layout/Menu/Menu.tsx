import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutGrid from '../../common/LayoutGrid';
import Link from 'next/link';

let options = require('../../../json/siteData.json');

const MenuWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: calc(var(--vh) * 100);
	width: 100%;
	background: var(--colour-blue);
	padding: ${pxToRem(16)};
	z-index: 50;
	display: flex;
	flex-direction: column;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		overflow: auto;
	}
`;

const TopWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.mobile} {

		.grid {
			height: calc((var(--vh) * 50) - 16px);
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			@media ${(props) => props.theme.mediaBreakpoints.mobile} {
				height: calc((var(--vh) * 60) - 16px);
			}
		}
	}
`;

const PrimaryListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: 1 / -1;
	}
`;

const SecondaryListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: 1 / -1;
	}
`;

const BottomWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	flex: 1;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: none;
	}
`;

const LinkTag = styled.a`
	color: var(--colour-black800);
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		color: var(--colour-white);
	}
`;

const CloseButton = styled.button`
	color: var(--colour-white);
	position: relative;

	&::after {
		content: "";
		position: absolute;
		bottom: 3px;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: 4px;
		background: var(--colour-white);

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			display: none;
		}
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		position: fixed;
		top: ${pxToRem(16)};
		right: ${pxToRem(16)};
	}
`;

const ImageWrapper = styled.div`
	max-width: 350px;
	margin-top: ${pxToRem(32)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 100%;
		max-width: unset;
	}
`;

const Img = styled.img``;

type Props = {
	menuIsOpen: boolean,
	setMenuIsOpen: (menuIsOpen: boolean) => void,
};

const Menu = (props: Props) => {
	const {
		menuIsOpen,
		setMenuIsOpen,
	} = props;

	const {
		instagramLink,
		vimeoLink,
		email,
		phone,
		cvLink,
		profilePicture
	} = options?.siteInformation;

	return (
		<>
			{menuIsOpen && (
				<MenuWrapper>
					<TopWrapper>
						<LayoutGrid>
							<PrimaryListWrapper>
								<Link href="/" passHref>
									<LinkTag className="type-h1">Home</LinkTag>
								</Link>
								<Link href="/clients" passHref>
									<LinkTag className="type-h1">Clients</LinkTag>
								</Link>
								<Link href="/awards" passHref>
									<LinkTag className="type-h1">Awards</LinkTag>
								</Link>
								<CloseButton
									className="type-h1"
									onClick={() => setMenuIsOpen(false)}
								>
									Close
								</CloseButton>
							</PrimaryListWrapper>
							<SecondaryListWrapper>
								{instagramLink && (
									<Link href={instagramLink} passHref>
										<LinkTag className="type-h1" target="_blank">Instagram</LinkTag>
									</Link>
								)}
								{vimeoLink && (
									<Link href={vimeoLink} passHref>
										<LinkTag className="type-h1" target="_blank">Vimeo</LinkTag>
									</Link>
								)}
								{email && (
									<Link href={`mailto: ${email}`} passHref>
										<LinkTag className="type-h1">Email</LinkTag>
									</Link>
								)}
								{phone && (
									<Link href={`tel: ${phone}`} passHref>
										<LinkTag className="type-h1">Phone</LinkTag>
									</Link>
								)}
								{cvLink && (
									<Link href={cvLink} passHref>
										<LinkTag className="type-h1" target="_blank">CV</LinkTag>
									</Link>
								)}
								{profilePicture && (
									<ImageWrapper>
										<Img src={profilePicture.url} />
									</ImageWrapper>
								)}
							</SecondaryListWrapper>
						</LayoutGrid>
					</TopWrapper>
					<BottomWrapper>
						<Link href="https://tayte.co/" passHref>
							<LinkTag target="_blank" className="type-h3">built by tayte.co</LinkTag>
						</Link>
					</BottomWrapper>
				</MenuWrapper>
			)}
		</>
	);
};

export default Menu;
