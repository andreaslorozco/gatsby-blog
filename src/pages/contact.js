import React from "react";

import Layout from "../components/layout"
import ContactMe from "./../components/ContactMe";
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ContactMe/>
  </Layout>
)

export default Contact;
