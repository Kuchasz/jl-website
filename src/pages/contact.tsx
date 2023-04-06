import type { NextPage } from "next";
import { Page } from "../components/page";
import p2 from "../../public/photos/PSX_20220527_081713.jpg";
import { TextBlock } from "../components/text-block";

const Contact: NextPage = () => (
  <Page title="Contact" img={p2}>
    <>
      <TextBlock>
        Management & Booking:
        <br />
        <a href="mailto:sybillabibu@gmail.com">sybillabibu@gmail.com</a>
      </TextBlock>
    </>
  </Page>
);

export default Contact;