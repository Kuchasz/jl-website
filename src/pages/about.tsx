import p1 from "../../public/photos/PSX_20220527_081517.jpg";
import { Page } from "../components/page";
import { api } from "../api";
import { Language } from "../gql";
import { useTranslations } from "../i18n";

const About = ({ bio }: { bio: string }) => {
  const translations = useTranslations();
  return <Page title={translations.about.header} img={p1}>
    <section dangerouslySetInnerHTML={{ __html: bio }}></section>
  </Page>;
};

export async function getStaticProps({ locale }: { locale: string }) {
  const {
    siteContents: [siteContent],
  } = await api.about({ language: locale as Language });

  const {
    content: { html: bio },
  } = siteContent!;

  return {
    props: {
      bio,
    },
    revalidate: 10,
  };
}

export default About;
