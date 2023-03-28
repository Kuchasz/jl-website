import type { NextPage } from "next";
import { Page } from "../components/page";
import p2 from "../../public/photos/PSX_20220527_081846.jpg";
import { query } from "../api";
import { gql } from "graphql-request";

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
  <Page title="Videos" img={p2.src}>
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
  const q = gql`
    query Videos {
      videos(first: 1000, orderBy: createdAt_DESC) {
        youtubeUrl
      }
    }
  `;

  const data = (await query(q)) as any;

  return {
    props: {
      videos: data.videos,
    },
    revalidate: 10,
  };
}

export default Videos;
