import React from "react";

import Layout from "../components/layout"
import Portfolio from "./../components/Portfolio";
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Portfolio/>
  </Layout>
)

export default Contact;
