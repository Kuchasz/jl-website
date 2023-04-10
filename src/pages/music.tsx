import { Page } from "../components/page";
import p2 from "../../public/photos/PSX_20220527_081713.jpg";
import { useTranslations } from "../i18n";

const Music = () => {
  const translations = useTranslations();
  return (
    <Page title={translations.music.header} img={p2}>
      <iframe
        style={{ borderRadius: "12px" }}
        className="w-full"
        src="https://open.spotify.com/embed/artist/4dAzbhtfVKyJbM5Qa9zUQj?utm_source=generator"
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </Page>
  );
};

export default Music;
