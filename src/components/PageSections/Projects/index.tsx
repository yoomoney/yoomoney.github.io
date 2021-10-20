import * as React from 'react';

import {Title} from '../../Title';
import {Section} from '../../Section';
import {ProjectCardsList} from '../../ProjectCardsList';

import {MenuId, GitHubOrgUrl} from '../../../constants';

const SUBLINK = {
	url: GitHubOrgUrl,
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