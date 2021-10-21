import * as React from 'react';

import {Title} from '../../Title';
import {Section} from '../../Section';
import {ProjectCardsList} from '../../ProjectCardsList';

import {MenuId, GitHubReposUrl} from '../../../constants';

const SUBLINK = {
	url: GitHubReposUrl,
	text: 'Посмотреть все'
};

export const Projects = () => (
	<Section indent='xxxxl'>
		<Title size='m' id={MenuId.Projects} sublink={SUBLINK}>
			Наши проекты
		</Title>
		<ProjectCardsList />
	</Section>
);