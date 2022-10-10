import type { NextPage } from "next";

import { Page } from "../components/page";
// import { TextBlock } from "../components/text-block";
// import { TextDivider } from "../components/text-divider";
import p2 from "../../public/photos/PSX_20220527_080900.jpg";
import { TextBlock } from "../components/text-block";

const discography = [
  {
    title: "After Earth EP",
    songs: ["After Earth", "Clouds", "Storm is comin"],
    date: new Date().toDateString(),
    company: "STIG RECORDS",
  },
  {
    title: "Universe EP",
    songs: ["Baryogenesis", "Black Hole"],
    date: new Date().toDateString(),
    company: "STIG RECORDS",
  },
  {
    title: "Monday Sunrise EP",
    songs: ["Monday Sunrise", "Her Emotions"],
    date: new Date().toDateString(),
    company: "STIG RECORDS",
  },
  {
    title: "Defragmentations",
    songs: [
      "4_48",
      "Deamon",
      "Defence",
      "Faith",
      "Freedom",
      "Piece of Luck",
      "Uranium",
    ],
    date: new Date().toDateString(),
    company: "STIG RECORDS",
  },
  {
    title: "Midnight&Photon",
    songs: ["Midnight", "Photon"],
    date: new Date().toDateString(),
    company: "",
  },
  {
    title: "Trangiel",
    songs: ["Cat", "Move"],
    date: new Date().toDateString(),
    company: "STIG RECORDS",
  },
  {
    title: "Rejection",
    songs: ["Ando", "Project one"],
    date: new Date().toDateString(),
    company: "ORGNC RECORDS",
  },
  {
    title: "Abort",
    songs: ["Abort"],
    date: new Date().toDateString(),
    company: "1980 RECORDS",
  },
  {
    title: "Feel the ground",
    songs: ["Blind", "Road to Sky", "Nocyceptor"],
    date: new Date().toDateString(),
    company: "OXYTECH RECORDS",
  },
];

const Discography: NextPage = () => (
  <Page title="Discography" img={p2.src}>
    <>
      {discography.map((d) => (
        <TextBlock key={d.date}>
          <div>
            <div className="text-xs">{d.date}</div>
            <div className="text-xl">{d.title}</div>
            {d.songs.map(s => <div key={s}>{s}</div>)}
          </div>
        </TextBlock>
      ))}
    </>
  </Page>
);

export default Discography;
