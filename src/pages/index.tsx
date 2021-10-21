import * as React from 'react';

import {Page} from '../components/Page';
import {Main} from '../components/Main';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

import {Hero, Team, Products, Projects, Integration} from '../components/PageSections';

const IndexPage = () => (
  <Page>
    <Header />
    <Main>
      <Hero />
      <Products />
      <Integration />
      <Projects />
      <Team />
    </Main>
    <Footer />
  </Page>
);

export default IndexPage;
