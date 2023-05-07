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

const FeaturedProjectsWrapper = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	padding: ${pxToRem(16)} 0;
	background: var(--colour-black800);
	height: var(--feature-wrapper-height);
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;

	transition: all 400ms var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: 0;
	}
`;

const Embla = styled.div`
	overflow: hidden;
	height: 100%;
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
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex-direction: column;
	}
`;

const EmblaSlide = styled.div`
	flex: 0 0 auto;
	min-width: 0;
	margin-right: ${pxToRem(16)};
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-right: 0;
		margin-bottom: ${pxToRem(16)};
		height: auto;
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

	const hasData = data && data.length > 0;

	const viewportWidth = useViewportWidth();

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 0,
			dragFree: true,
			axis: viewportWidth === 'mobile' ? 'y' : 'x'
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
			return '0.3';
		}
	};

	const setFeatureWrapperHeight = () => {
		if (isMini) {
			return '30vh';
		} else {
			return viewportWidth === 'mobile' ? '90vh' : '70vh';
		}
	};

	useEffect(() => {
		document.documentElement.style.setProperty('--feature-wrapper-height', setFeatureWrapperHeight());
		document.documentElement.style.setProperty('--brightness', setStatementsBrightness());
	}, [isMini, viewportWidth]);

	return (
		<FeaturedProjectsWrapper ref={containerRef}>
			<Embla className="embla" ref={emblaRef}>
				<EmblaContainer className="embla__container">
					{hasData && data.map((item: FeaturedProjectType, i: number) => (
						<EmblaSlide className="embla__slide" key={i}>
							<FeaturedProject data={item} />
						</EmblaSlide>
					))}
				</EmblaContainer>
			</Embla>
			<FeaturedDragButton setIsMini={setIsMini} isMini={isMini} />
			<MenuTrigger />
		</FeaturedProjectsWrapper>
	);
};

export default FeaturedProjects;
