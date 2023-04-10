import type { NextPage } from "next";
import { Page } from "../components/page";
import p2 from "../../public/photos/PSX_20220527_081713.jpg";
import { TextBlock } from "../components/text-block";
import { useTranslations } from "../i18n";

const Contact: NextPage = () => {
  const translations = useTranslations();
  return (
    <Page title={translations.contact.header} img={p2}>
      <>
        <TextBlock>
          Management & Booking:
          <br />
          <a href="mailto:sybillabibu@gmail.com">sybillabibu@gmail.com</a>
        </TextBlock>
      </>
    </Page>
  );
};

export default Contact;
