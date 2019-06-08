import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Portfolio from './../components/Portfolio';

const Contact = () => (
  <Layout>
    <Helmet title="Portafolio – Andreas Leimbach" />
    <Portfolio />
  </Layout>
);

export default Contact;
