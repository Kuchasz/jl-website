import type { NextPage } from "next";

import { Page } from "../components/page";
// import { TextBlock } from "../components/text-block";
// import { TextDivider } from "../components/text-divider";
import p2 from "../../public/photos/PSX_20220527_081713.jpg";
import { TextBlock } from "../components/text-block";
// import p2 from "../../public/photos/PSX_20220527_081846.jpg";

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

const Videos: NextPage = () => (
  <Page title="Contact" img={p2.src}>
    <>
      <TextBlock>
        Management & Booking:
        <br />
        <a href="mailto:sybillabibu@gmail.com">sybillabibu@gmail.com</a>
      </TextBlock>
    </>
  </Page>
);

export default Videos;
