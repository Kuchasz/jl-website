import type { NextPage } from "next";
import { Page } from "../components/page";
import p2 from "../../public/photos/PSX_20220527_081846.jpg";
import { api } from "../api";
import { VideoOrderByInput } from "../gql";
import Link from "next/link";
import { getThumbByVideoUrl, getYoutubeId } from "../yt-helpers";

type Video = { youtubeUrl: string };

const Videos: NextPage<{ videos: Video[] }> = ({ videos }) => (
  <Page title="Videos" img={p2}>
     <div className="flex justify-center flex-wrap gap-4">
            {videos.map((v) => (
              <Link href={`/video/${getYoutubeId(v.youtubeUrl)}`}>
                <img
                  className="grayscale brightness-50 hover:brightness-100 hover:grayscale-0 transition-all cursor-pointer max-w-[30rem]"
                  src={getThumbByVideoUrl(v.youtubeUrl)}
                ></img>
              </Link>
            ))}
          </div>
  </Page>
);

export async function getStaticProps() {
  const { videos } = await api.videos({
    orderBy: VideoOrderByInput.CreatedAtDesc,
    first: 1000
  });

  return {
    props: {
      videos: videos,
    },
    revalidate: 10,
  };
}

export default Videos;
