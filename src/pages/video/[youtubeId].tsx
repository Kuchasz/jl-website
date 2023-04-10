import type { NextPage } from "next";
import { Page } from "../../components/page";
import p2 from "../../../public/photos/PSX_20220527_081846.jpg";
import { useRouter } from "next/router";
import { useTranslations } from "../../i18n";

const YoutubeVideo = ({ url }: { url: string }) => (
  <iframe
    className="my-4 w-full bg-red-500"
    width="300px"
    height="600px"
    src={`https://www.youtube.com/embed/${url}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const Videos = () => {
  const id = useRouter().query.youtubeId! as string;
  const translations = useTranslations();

  return (
    <Page title={translations.videos.header} img={p2}>
      <YoutubeVideo key={id} url={id} />
    </Page>
  );
};

export default Videos;
