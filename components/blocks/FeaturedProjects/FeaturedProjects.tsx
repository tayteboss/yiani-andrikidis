import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react'
import FeaturedProject from './FeaturedProject';
import pxToRem from '../../../utils/pxToRem';
import FeaturedDragButton from '../../elements/FeaturedDragButton';
import { useEffect, useRef, useState } from 'react';
import useViewportWidth from '../../../hooks/useViewportWidth';
import { FeaturedProjectType } from '../../../shared/types/types';
import MenuTrigger from '../../elements/MenuTrigger';
import { useClickOutside } from '../../../hooks/useClickOutside';
import VideoLightBox from '../VideoLightBox';

const FeaturedProjectsWrapper = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	padding: ${pxToRem(16)} 0;
	background: var(--colour-black800);
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: 0;
		height: var(--feature-wrapper-height);
		transition: all 400ms var(--transition-ease);
	}
`;

const Embla = styled.div`
	overflow: hidden;
	padding-left: ${pxToRem(16)};
	cursor: grab;

	&:active {
		cursor: grabbing;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(16)};
	}
`;

const EmblaContainer = styled.div`
	display: flex;
	align-items: flex-start;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex-direction: column;
		height: 100% !important;
		padding-bottom: 32px;
	}
`;

const EmblaSlide = styled.div`
	flex: 0 0 auto;
	min-width: 0;
	margin-right: ${pxToRem(16)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-right: 0;
		margin-bottom: ${pxToRem(16)};
		height: 100%;
		width: 100%;
	}
`;

type Props = {
	data: any;
};

const FeaturedProjects = (props: Props) => {
	const {
		data
	} = props;

	const [isMini, setIsMini] = useState(true);
	const [showFullVideo, setShowFullVideo] = useState({ isActive: false, url: "" });
	const [isHovered, setIsHovered] = useState(false);

	const hasData = data && data.length > 0;

	const viewportWidth = useViewportWidth();

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: false,
			align: 0,
			dragFree: true,
			axis: viewportWidth === 'mobile' ? 'y' : 'x',
		}
	);

	const containerRef = useRef<HTMLDivElement>(null!);

	useClickOutside(containerRef, () => {
		if (!isMini) {
			setIsMini(true);
		}
	});

	const setStatementsBrightness = () => {
		if (isMini) {
			return '1';
		} else {
			return '0.2';
		}
	};

	const setFeatureWrapperHeight = () => {
		if (isMini) {
			return '30vh';
		} else {
			return viewportWidth === 'mobile' ? '75vh' : '50vh';
		}
	};

	useEffect(() => {
		document.documentElement.style.setProperty('--feature-wrapper-height', '0');
		const timer = setTimeout(() => {
			document.documentElement.style.setProperty('--feature-wrapper-height', setFeatureWrapperHeight());
		}, 300);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty('--feature-wrapper-height', setFeatureWrapperHeight());
		document.documentElement.style.setProperty('--brightness', setStatementsBrightness());
	}, [isMini, viewportWidth]);

	return (
		<>
			<FeaturedProjectsWrapper
				ref={containerRef}
			>
				<Embla
					className="embla featured-projects"
					ref={emblaRef}
					onMouseOver={() => setIsMini(false)}
					onMouseOut={() => setIsMini(true)}
				>
					<EmblaContainer className="embla__container">
						{hasData && data.map((item: FeaturedProjectType, i: number) => (
							<EmblaSlide className="embla__slide" key={i}>
								<FeaturedProject
									data={item}
									setShowFullVideo={setShowFullVideo}
								/>
							</EmblaSlide>
						))}
					</EmblaContainer>
				</Embla>
				<MenuTrigger />
			</FeaturedProjectsWrapper>
			<VideoLightBox
				url={showFullVideo?.url}
				isActive={showFullVideo.isActive}
				setShowFullVideo={setShowFullVideo}
			/>
		</>
	);
};

export default FeaturedProjects;
