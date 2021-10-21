import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

import {Text} from '../../Text';
import {Title} from '../../Title';
import {Button} from '../../Button';
import {Section} from '../../Section';
import {SectionsRow} from '../../SectionsRow';

import {MenuId, YooMoneyJobsUrl} from '../../../constants';

export const Team = () => (
	<Section indent='xxxxl'>
		<SectionsRow>
			<Section size='m'>
				<StaticImage
					quality={95}
					placeholder='none'
					alt='YooMoney Career'
					style={{
						maxWidth: 170,
						display: 'block',
						overflow: 'visible',
						margin: 'var(--space-xxl)'
					}}
					src='../../../assets/images/rocket.png'
				/>
				<Title size='m' id={MenuId.Career}>Карьера в ЮMoney</Title>
				<Text size='m' indent='m'>
				Каждый день мы делаем платежи в интернете проще и создаем готовые решения для бизнеса. Если хотите создавать новые финтех-продукты, решать интересные задачи и реализовывать смелые идеи — станьте частью ЮTeam. 
				</Text>
				<Button url={YooMoneyJobsUrl}>Посмотреть вакансии</Button>
			</Section>
			<Section size='m'>
				<StaticImage
					quality={95}
					placeholder='none'
					alt='YooMoney Feedback'
					style={{
						maxWidth: 265,
						display: 'block',
						overflow: 'visible',
						margin: 'var(--space-xxl)'
					}}
					src='../../../assets/images/dialog.png'
				/>
				<Title size='m' id={MenuId.Feedback}>Пишите вопросы на&nbsp;почту</Title>
				<Text size='m'>
					Про открытый исходный код: <br/><a href='mailto:opensource@yoomoney.ru'>opensource@yoomoney.ru</a><br/>Про подключение ЮKassa: <br/><a href='mailto:b2b_support@yoomoney.ru'>b2b_support@yoomoney.ru</a>
				</Text>
			</Section>
		</SectionsRow>
	</Section>
);
