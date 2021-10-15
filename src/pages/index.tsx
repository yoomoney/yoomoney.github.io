import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

import {Page} from '../components/Page';
import {Main} from '../components/Main';
import {Text} from '../components/Text';
import {Title} from '../components/Title';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {Button} from '../components/Button';
import {Section} from '../components/Section';
import {BadgeList} from '../components/BadgeList';
import {SectionsRow} from '../components/SectionsRow';
import {HeroSection} from '../components/HeroSection';
import {ProjectCardsList} from '../components/ProjectCardsList';

import {MenuId, ToolsList, CMSList, GitHubOrgUrl, YooMoneyJobsUrl} from '../constants';

const IndexPage = () => {
  const sublink = {
    url: GitHubOrgUrl,
    text: 'Посмотреть все'
  };

  return (
    <Page>
      <Header />
      <Main>
        <HeroSection />
        <Section indent='xxxxl'>
          <Title size='m' id={MenuId.Products}>Наши продукты</Title>
          <SectionsRow>
            <Section size='m'>
              <StaticImage
                alt='YooMoney'
                style={{
                  overflow: 'visible',
                  marginBottom: 'var(--space-m)'
                }}
                src='../assets/images/iomoney.png'
              />
              <Text size='s'>
                Сервис для онлайн-шопинга, оплаты квитанций и повседневных трат. Второй по популярности инструмент электронных платежей в России — у нас зарегистрировано 60 миллионов кошельков.
              </Text>
            </Section>
            <Section size='m'>
              <StaticImage
                alt='YooKassa'
                style={{
                  overflow: 'visible',
                  marginBottom: 'var(--space-m)'
                }}
                src='../assets/images/iokassa.png'
              />
              <Text size='s'>
                Платформа для электронных платежей и развития бизнеса. Самый популярный сервис по приёму платежей в России — к нам подключено 120 тысяч магазинов.
              </Text>
            </Section>
          </SectionsRow>
        </Section>
        <Section>
          <Section indent='xl'>
            <Title size='m' id={MenuId.Integration}>Интеграция ЮKassa</Title>
            <Text size='l'>При помощи <a href="https://yookassa.ru/developers" target="_blank">документации API ЮKassa</a> вы можете интегрировать в свои процессы наши решения:<br />SDK для разных языков и коробочные решения на базе популярных CMS.</Text>
          </Section>
          <Section>
            <Title size='s'>Наборы средств разработки</Title>
            <BadgeList items={ToolsList} />
          </Section>
          <Section indent='xxxxl'>
            <Title size='s'>Системы управления содержимым</Title>
            <BadgeList items={CMSList} />
          </Section>
        </Section>
        <Section indent='xxxxl'>
          <Title size='m' id={MenuId.Projects} sublink={sublink}>
            Наши проекты
          </Title>
          <ProjectCardsList />
        </Section>
        <Section indent='xxxxl'>
          <SectionsRow>
            <Section size='m'>
              <StaticImage
                quality={95}
                alt='YooMoney Career'
                style={{
                  maxWidth: 170,
                  display: 'block',
                  overflow: 'visible',
                  margin: 'var(--space-xxl)'
                }}
                src='../assets/images/rocket.png'
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
                alt='YooMoney Feedback'
                style={{
                  maxWidth: 265,
                  display: 'block',
                  overflow: 'visible',
                  margin: 'var(--space-xxl)'
                }}
                src='../assets/images/dialog.png'
              />
              <Title size='m' id={MenuId.Feedback}>Пишите вопросы на&nbsp;почту</Title>
              <Text size='m'>
                Про открытый исходный код: <br/><a href='mailto:opensource@yoomoney.ru'>opensource@yoomoney.ru</a><br/>Про подключение ЮKassa: <br/><a href='mailto:b2b_support@yoomoney.ru'>b2b_support@yoomoney.ru</a>
              </Text>
            </Section>
          </SectionsRow>
        </Section>
      </Main>
      <Footer />
    </Page>
  )
};

export default IndexPage;
