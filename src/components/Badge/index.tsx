import * as React from 'react';
import styled from 'styled-components';

import {Props} from './types';

const StyledBadge = styled.span`
	padding: var(--space-xxxs) var(--space-xs);
	background-color: var(--color-bg-badge);
	line-height: var(--size-typo-xxl);
	border-radius: var(--space-xxxs);
	font-size: var(--size-typo-l);
	white-space: nowrap;
`;

export const Badge = ({children}: Props) => <StyledBadge>{children}</StyledBadge>;
