import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Us" />
    <p>
      InterFACE (iFace) Ministries – the face of international friendships – is
      a nonprofit educational, Christian organization which networks
      international students and scholars with culturally sensitive Americans
      who enjoy cross-cultural friendships and the open exchange of ideas.
      Getting to know Americans in your new community can be a major challenge.
      International students can count on iFACE to be a trusted source of
      friendship and help.
    </p>
    <p>
      Here in Greenville, we want international students to feel welcomed and
      care for. Our staff and volunteers are Christians committed to serving the
      international student community. International students and scholars will
      tell you that we are the kind of people who show God’s love in action
      rather than just talk about it. We all appreciate the kind of friend who
      is willing to look after our best interests. This is our goal for you in
      every InterFACE activity.
    </p>
    <p>
      As a Christian organization, iFace advocates purity of motives, clarity in
      purpose, and honesty in intention. Our philosophy is to encourage mutual
      dialogue, as summed up in the words from the Bible, “Always be prepared to
      give an answer to everyone who asks you to give the reason for the hope
      you have. But do this with gentleness and respect.” All iFace activities
      are open to international students, scholars, and their families
      regardless of race, nationality, or religious preference.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
