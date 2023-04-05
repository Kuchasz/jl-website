import type { NextPage } from "next";

import p1 from "../../public/photos/PSX_20220527_081517.jpg";
import { Page } from "../components/page";
import { TextBlock } from "../components/text-block";
import { TextDivider } from "../components/text-divider";
import { gql } from "graphql-request";
import { query } from "../api";
// import p2 from "../../public/photos/PSX_20220527_081713.jpg";
// import p3 from "../../public/photos/PSX_20220527_081846.jpg";

const About = ({ bio }: { bio: string }) => (
  <Page title="About" img={p1.src}>
    <>
      <section dangerouslySetInnerHTML={{ __html: bio }}>
      </section>
    </>
  </Page>
);

export async function getStaticProps() {
  const q = gql`
    query AboutConent {
      siteContent(where: { type: "about" }) {
        content {
          html
        }
      }
    }
  `;

  const data = (await query(q)) as any;

  return {
    props: {
      bio: data.siteContent.content.html,
    },
    revalidate: 10,
  };
}

export default About;
