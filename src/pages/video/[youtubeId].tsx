import type { NextPage } from "next";
import { Page } from "../../components/page";
import p2 from "../../../public/photos/PSX_20220527_081846.jpg";
import { api } from "../../api";
import { VideoOrderByInput } from "../../gql";
import { useRouter } from "next/router";

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

type Video = { youtubeUrl: string };

const Videos = () => {
  const id = useRouter().query.youtubeId! as string;

  return (
    <Page title="Video" img={p2}>
      <YoutubeVideo key={id} url={id} />
    </Page>
  );
};

// export async function getStaticProps(params: any) {
//   const { videos } = await api.videos({
//     orderBy: VideoOrderByInput.CreatedAtDesc,
//     first: 1000,
//   });

//   console.log(params);

//   return {
//     props: {
//       video: videos[0],
//     },
//     revalidate: 10,
//   };
// }

export default Videos;
