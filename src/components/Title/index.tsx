import * as React from 'react';
import styled from 'styled-components';

import {Props} from './types';

const StyledTitle = styled.span`
	display: flex;
	gap: var(--space-m);
	align-items: baseline;
`;

const StyledSublink = styled.a`
	font-size: var(--size-typo-m);
	text-decoration: underline;

	&:after {
		content: ' 🡕';
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
		<StyledTitle>
			{heading}
			{
				sublink
					? <StyledSublink href={sublink.url} target="_blank">{sublink.text}</StyledSublink>
					: null
			}
		</StyledTitle>
	)
}
