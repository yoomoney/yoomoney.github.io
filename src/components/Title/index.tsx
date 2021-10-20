import * as React from 'react';
import styled from 'styled-components';

import {Props} from './types';

const StyledTitle = styled.span<{sublink?: Props['sublink'];}>`
	display: flex;
	gap: var(--space-m);
	align-items: baseline;

	h1 {
		line-height: var(--size-typo-xxxxxxl);
		font-size: var(--size-typo-xxxxxl);
		margin: 0 0 var(--space-xl);
		font-weight: 700;
	}

	h2 {
		line-height: var(--size-typo-xxxxl);
		font-size: var(--size-typo-xxxxxl);
		margin: 0 0 var(--space-xxl);
		font-weight: 400;
	}

	h3 {
		line-height: var(--size-typo-xxxxl);
		font-size: var(--size-typo-xxxl);
		margin: 0 0 var(--space-m);
		font-weight: 400;
	}

	@media screen and (max-width: 965px) {
		gap: var(--space-xs);
	
		h1 {
			line-height: var(--size-typo-xxxxl);
			font-size: var(--size-typo-xxxl);
			margin: 0 0 var(--space-${({sublink}) => sublink ? 'xs' : 'xl'});
			font-weight: 700;
		}

		h2 {
			line-height: var(--size-typo-xxxxl);
			font-size: var(--size-typo-xxxl);
			margin: 0 0 var(--space-${({sublink}) => sublink ? 'xs' : 'xl'});
			font-weight: 400;
		}

		h3 {
			line-height: var(--size-typo-xxl);
			font-size: var(--size-typo-xl);
			margin: 0 0 var(--space-${({sublink}) => sublink ? 'xxs' : 'm'});
			font-weight: 400;
		}
	}

	@media screen and (max-width: 460px) {
		gap: var(--space-xs);
	
		h1 {
			line-height: var(--size-typo-xxl);
			font-size: var(--size-typo-xl);
			margin: 0 0 var(--space-${({sublink}) => sublink ? 'xxs' : 'l'});
			font-weight: 700;
		}

		h2 {
			line-height: var(--size-typo-xxl);
			font-size: var(--size-typo-xl);
			margin: 0 0 var(--space-${({sublink}) => sublink ? 'xxs' : 'l'});
			font-weight: 400;
		}

		h3 {
			line-height: var(--size-typo-xl);
			font-size: var(--size-typo-xl);
			margin: 0 0 var(--space-${({sublink}) => sublink ? 'xxxs' : 's'});
			font-weight: 400;
		}
	}
`;

const StyledSublink = styled.a`
	whitespace: nowrap;
	text-decoration: underline;
	font-size: var(--size-typo-m);

	&:after {
		content: 'Посмотреть все 🡕';

		@media screen and (max-width: 600px) {
			content: 'Все 🡕';
		}
	}

	&:hover {
		text-decoration: none;
	}
`;

const getHeadingType = (size) => {
	switch (size) {
		case 's':
			return 'h3';
		case 'l':
			return 'h1';
		default:
			return 'h2';
	}
};

export const Title = ({id, size, children, sublink}: Props) => {
	const headingType = getHeadingType(size);
	const heading = React.createElement(headingType, {id}, children);

	return (
		<StyledTitle sublink={sublink}>
			{heading}
			{
				sublink
					? <StyledSublink href={sublink.url} target="_blank" />
					: null
			}
		</StyledTitle>
	)
}
