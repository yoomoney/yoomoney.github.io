import * as React from 'react';
import styled from 'styled-components';

import {Text} from '../Text';

import {GitHubOrgUrl} from '../../constants';

import {Props} from './types';

const StyledCard = styled.a`
	background-color: var(--color-bg-card);
	border-radius: var(--space-xs);
	padding: var(--space-s);
	display: block;
	height: 240px;
	width: 290px;
`;

const StyledName = styled.span`
	line-height: var(--size-typo-xxxxl);
	margin-bottom: var(--space-xxs);
	font-size: var(--size-typo-m);
`;

export const ProjectCard = ({name, description}: Props) => {
	const href = `${GitHubOrgUrl}${name}`;

	return (
		<StyledCard href={href} target="_blank">
			<StyledName>{name}</StyledName>
			<Text size='s'>{description}</Text>
		</StyledCard>
	);
};
