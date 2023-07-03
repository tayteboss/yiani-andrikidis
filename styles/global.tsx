import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import pxToRem from '../utils/pxToRem';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--colour-blue: ${theme.colours.blue};
		--colour-black200: ${theme.colours.black200};
		--colour-black400: ${theme.colours.black400};
		--colour-black600: ${theme.colours.black600};
		--colour-black800: ${theme.colours.black800};
		--font-lazzer-medium: ${theme.fonts.lazzerMedium};
		--font-lazzer-semibold: ${theme.fonts.lazzerSemiBold};
		--transition-speed-default: ${theme.transitionSpeed.default};
		--transition-speed-fast: ${theme.transitionSpeed.fast};
		--transition-speed-extra-fast: ${theme.transitionSpeed.extraFast};
		--transition-speed-slow: ${theme.transitionSpeed.slow};
		--transition-speed-extra-slow: ${theme.transitionSpeed.extraSlow};
		--transition-ease: cubic-bezier(0.65, 0, 0.35, 1);
		--feature-wrapper-height: 30vh;
		--highlight-colour: ${theme.colours.black};
		--brightness: 1;
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		background: none;
		outline: none;
		border-radius: 0;
		box-shadow: none;
		font-weight: 100;
	}

	::selection {
		background-color: var(--colour-white);
		color: var(--colour-blue);
	}

	html {
		scroll-behavior: smooth;
		background: var(--colour-black800);
		font-size: 16px;

		&.no-scroll {
			overflow-y: hidden;
			
			body {
				overflow-y: hidden;
			}
		}
	}

	body {
		position: relative;
		font-family: var(--font-lazzer-semibold);
		cursor: crosshair;
	}

	input,
	textarea,
	select,
	button,
	label,
	body {
		color: var(--colour-black800);
		line-height: 1.4;
		font-family: var(--font-lazzer-semibold);
	}

	strong,
	b {
		font-weight: 900;
	}

	em {
		font-style: italic;
	}

	a {
		text-decoration: underline;
		color: var(--colour-black800);
		font-family: var(--font-lazzer-semibold);
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	button,
	a {
		cursor: pointer;
	}

	h1,
	.type-h1 {
		font-size: ${theme.size.h1};
		line-height: ${pxToRem(59)};
		letter-spacing: -0.02em;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h1};
			line-height: ${pxToRem(45)};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h1};
		}
	}

	h2,
	.type-h2 {
		font-size: ${theme.size.h2};
		line-height: ${pxToRem(42)};
		letter-spacing: -0.02em;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h2};
			line-height: ${pxToRem(45)};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h2};
		}
	}

	h3,
	.type-h3 {
		font-size: ${theme.size.h3};
		line-height: ${pxToRem(18)};
		letter-spacing: -0.02em;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h3};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h3};
		}
	}

	h4,
	.type-h4 {
		font-size: ${theme.size.h4};
		line-height: ${pxToRem(18)};
		letter-spacing: -0.02em;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h4};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h4};
		}
	}

	p,
	.type-p,
	a,
	button,
	div {
		font-size: ${theme.size.body};
		line-height: ${pxToRem(18)};

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.body};
		}
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity var(--transition-speed-default) ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity var(--transition-speed-default) cubic-bezier(0.65, 0, 0.35, 1), transform var(--transition-speed-default) cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		transform: scale(0.95);
		opacity: 0;

		transition: opacity var(--transition-speed-default) ease, transform var(--transition-speed-default) ease;

		&--in-view
		{
			opacity: 1;
			transform: scale(1);
		}
	}

	.performance {
		-webkit-transform: translateZ(0);
	}

	::placeholder {
		color: currentcolor;
		opacity: 1;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}

	input[type="hidden"] {
		display: none;
	}

	input,
	textarea,
	select {
		padding: 0.125rem 0;
		font-size: ${theme.size.body};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 8rem;
	}

	label {
		display: inline-block;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	img,
	video {
		max-width: 100%;
		display: block;
		height: auto;
	}

	iframe {
		max-width: 100%;
		display: block;
	}
`;
