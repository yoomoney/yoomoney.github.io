import * as React from 'react';
import styled from 'styled-components';

import {Props} from './types';

const StyledBadge = styled.span`
	padding: var(--space-xxxs) var(--space-xs);
	background-color: var(--color-bg-light);
	line-height: var(--size-typo-xxl);
	border-radius: var(--space-xxxs);
	color: var(--color-typo-black);
	font-size: var(--size-typo-l);
	white-space: nowrap;
`;

export const Badge = ({children, url}: Props) => {
	const wrapperType = url ? 'a' : 'span';
	const wrapperProps = url && {href: url, target: '_blank'};

	return React.createElement(wrapperType, wrapperProps, (
		<StyledBadge>{children}</StyledBadge>
	));
};
