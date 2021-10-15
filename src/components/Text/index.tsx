import * as React from 'react';
import styled from 'styled-components';

import {Props} from './types';

const StyledText = styled.p<{size?: Props['size'], indent?: Props['indent']}>`
	color: var(--color-typo-inverse);
	line-height: var(--size-typo-xl); 
	font-size: var(--size-typo-${({size}) => size});
	margin-bottom: ${({indent}) => indent ? `var(--space-${indent})` : '0' };
`;

export const Text = ({children, size, indent}: Props) => {
	return <StyledText size={size} indent={indent}>{children}</StyledText>
};
