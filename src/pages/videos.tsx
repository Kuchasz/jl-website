import type { NextPage } from "next";

import { Page } from "../components/page";
// import { TextBlock } from "../components/text-block";
// import { TextDivider } from "../components/text-divider";
// import p2 from "../../public/photos/PSX_20220527_081713.jpg";
import p2 from "../../public/photos/PSX_20220527_081846.jpg";

const YoutubeVideo = ({ url }: { url: string }) => (
  <iframe
    className="w-full bg-red-500 my-4"
    width="300px"
    height="300px"
    src={url}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const Videos: NextPage = () => (
  <Page title="Videos" img={p2.src}>
    <>
      <section className="flex flex-wrap">
        <YoutubeVideo url="https://www.youtube.com/embed/watch?v=gDCi0UYxddQ"/>
        <YoutubeVideo url="https://www.youtube.com/embed/watch?v=55vA7CPuGpg"/>
        <YoutubeVideo url="https://www.youtube.com/embed/watch?v=gjBbEYgGc0g"/>
        <YoutubeVideo url="https://www.youtube.com/embed/watch?v=67pVu44FR5M"/>
      </section>
    </>
  </Page>
);

export default Videos;
