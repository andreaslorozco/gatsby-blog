import React from "react";
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import ContactMe from "./../components/ContactMe";
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <Helmet title="Contacto – Andreas Leimbach"/>
    <ContactMe/>
  </Layout>
)

export default Contact;
