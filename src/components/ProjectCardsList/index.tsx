import * as React from 'react';
import styled from 'styled-components';

import {ProjectCard} from '../ProjectCard';

import {ProjectList} from '../../constants';

const StyledCardsList = styled.ul`
	padding: 0; 
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-xs);
	list-style-type: none;

	@media screen and (max-width: 965px) {
		justify-content: center;
	}
`;

export const ProjectCardsList = () => (
	<>
		<StyledCardsList>
			{
				ProjectList.map(({name, description}, key) => (
					<li key={key}>
						<ProjectCard name={name} description={description} />
					</li>
				))
			}
		</StyledCardsList>
	</>
);
