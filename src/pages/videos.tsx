import type { NextPage } from "next";
import { Page } from "../components/page";
import p2 from "../../public/photos/PSX_20220527_081846.jpg";
import { api } from "../api";
import { VideoOrderByInput } from "../gql";
import Link from "next/link";
import { getThumbByVideoUrl, getYoutubeId } from "../yt-helpers";
import { useTranslations } from "../i18n";

type Video = { youtubeUrl: string };

const Videos: NextPage<{ videos: Video[] }> = ({ videos }) => {
  const translations = useTranslations();
  return (
    <Page title={translations.videos.header} img={p2}>
      <div className="flex flex-wrap justify-center gap-4">
        {videos.map((v) => (
          <Link key={v.youtubeUrl} href={`/video/${getYoutubeId(v.youtubeUrl)}`}>
            <img
              className="max-w-[30rem] cursor-pointer brightness-50 grayscale transition-all hover:brightness-100 hover:grayscale-0"
              src={getThumbByVideoUrl(v.youtubeUrl)}
            ></img>
          </Link>
        ))}
      </div>
    </Page>
  );
};

export async function getStaticProps() {
  const { videos } = await api.videos({
    orderBy: VideoOrderByInput.CreatedAtDesc,
    first: 1000,
  });

  return {
    props: {
      videos: videos,
    },
    revalidate: 10,
  };
}

export default Videos;
