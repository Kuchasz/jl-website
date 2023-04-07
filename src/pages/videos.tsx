import type { NextPage } from "next";
import { Page } from "../components/page";
import p2 from "../../public/photos/PSX_20220527_081846.jpg";
import { api } from "../api";
import { VideoOrderByInput } from "../gql";

const YoutubeVideo = ({ url }: { url: string }) => (
  <iframe
    className="my-4 w-full bg-red-500"
    width="300px"
    height="300px"
    src={url}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

type Video = { youtubeUrl: string };

const Videos: NextPage<{ videos: Video[] }> = ({ videos }) => (
  <Page title="Videos" img={p2}>
    <>
      <section className="flex flex-wrap">
        {videos.map((v) => (
          <YoutubeVideo key={v.youtubeUrl} url={v.youtubeUrl} />
        ))}
      </section>
    </>
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
