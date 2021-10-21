import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: var(--space-xxxl);

	@media screen and (max-width: 1330px) {
		display: block;
	}
`;

export const StyledHeaderWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 1330px) {
		margin-bottom: var(--space-l);
	}
`;

export const StyledNav = styled.nav<{showItems?: boolean}>`
	display: flex;

	transition-duration: .5s;
	transition-property: max-height;
	transition-timing-function: ease-in-out;

	@media screen and (max-width: 1330px) {
		max-height: ${({showItems}) => showItems ? '300px' : '0'};

		width: calc(100% - var(--space-xxxl) * 2);
		background-color: var(--color-bg-light);
		right: var(--space-xxxl);
		position: absolute;
		overflow: hidden;
		display: block;
		z-index: 1;
	}
`;

export const StyledControl = styled.span<{showItems?: boolean}>`
	line-height: var(--size-ty po-xl);
	font-size: var(--size-typo-xl);

	&:after {
		content: ${({showItems}) => showItems ? '"✕"' : '"☰"'};
	}

	@media screen and (min-width: 1331px) {
		display: none;
	}
`;

export const StyledMenuItem = styled.a<{showItems?: boolean}>`
	white-space: nowrap;
	margin: 0 var(--space-s);
	font-size: var(--size-typo-s); 
	color: var(--color-typo-black);

	@media screen and (max-width: 1330px) {
		display: block;
		padding: var(--space-xxs) var(--space-xs);

		&:not(:last-child) {
			border-bottom: 1px solid var(--color-bg-white);
		}
	}
`;
