import type { NextPage } from "next";

import { Page } from "../components/page";
// import { TextBlock } from "../components/text-block";
// import { TextDivider } from "../components/text-divider";
import p2 from "../../public/photos/PSX_20220527_080900.jpg";
import { TextBlock } from "../components/text-block";

const discography = [
  {
    title: "Triangle EP",
    artist: "John Lecter",
    label: "STIG Rec",
    genre: "Organic House",
    date: "25.09.2022",
  },
  {
    title: "Storm Is Coming Original Mix",
    artist: "John Lecter",
    label: "STIG",
    genre: "Melodic House & Techno",
    date: "2022-03-08",
  },
  {
    title: "Defragmentation album",
    artist: "John Lecter",
    label: "STIG",
    genre: "Melodic House&Techno",
    date: "2022-05-08",
  },
  {
    title: "Universe EP",
    artist: "John Lecter",
    label: "STIG",
    genre: "Melodic House&Techno",
    date: "2022-04-22",
  },
  {
    title: "Monday Sunrise EP",
    artist: "John Lecter",
    label: "STIG",
    genre: "Melodic House&Techno",
    date: "2022-04-04",
  },
];

const Discography: NextPage = () => (
  <Page title="Discography" img={p2.src}>
    <>
      {discography.map((d) => (
        <TextBlock key={d.date}>
          <div>
            <div className="text-sm">{d.date}</div>
            <div>
              <span>{d.title}</span>
              <span className="ml-2 text-sm text-gray-400">{d.artist}</span>
            </div>
            <div>
              <span>{d.label}</span>
              <span className="ml-2 text-sm text-gray-400">{d.genre}</span>
            </div>
          </div>
        </TextBlock>
      ))}
    </>
  </Page>
);

export default Discography;
