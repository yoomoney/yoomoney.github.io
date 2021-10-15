import * as React from 'react';
import styled from 'styled-components';

import {Props} from './types';

const StyledButton = styled.a`
	display: inline-block;
	font-size: var(--size-typo-m); 
	color: var(--color-typo-inverse);
	border-radius: var(--space-xxxs);
	line-height: var(--size-typo-xxxl);
	background-color: var(--color-bg-brand);
	padding: var(--space-xxxs) var(--space-xs);
`;

export const Button = ({url, children}: Props) => {
	return <StyledButton href={url} target="_blank">{children}</StyledButton>
}