import type { NextPage } from "next";

import { Page } from "../components/page";
// import { TextBlock } from "../components/text-block";
// import { TextDivider } from "../components/text-divider";
import p2 from "../../public/photos/PSX_20220527_080900.jpg";
import { TextBlock } from "../components/text-block";

const discography = [
  { title: "It's not a crystal (Original mix) STIG Record", date: "22.05.2023" },
  { title: "Psycho (Original mix) singiel STIG Records", date: "24.04.2023" },
  { title: "Momerandum (Original mix) Singiel Musica Gurmet", date: "20.02.2023" },
  { title: "Triangle EP", date: "25-09-2022" },
  { title: "Storm Is Coming Original Mix", date: "2022-03-08" },
  { title: "Defragmentation", date: "2022-05-08" },
  { title: "Universe EP", date: "2022-04-22" },
  { title: "Monday Sunrise EP", date: "2022-04-04" },
  { title: "Clouds Original Mix John ", date: "2022-03-08" },
  { title: "After Earth Original Mix", date: "2022-03-08" },
  { title: "Istanbul Original Mix Andrew Core", date: "2016-12-02" },
  { title: "Cocolino Original Mix Andrew Core", date: "2015-12-01" },
  { title: "Lobo Original Mix", date: "2015-03-09" },
  { title: "Sergiala Original Mix", date: "2015-03-09" },
  { title: "Cocolino Original Mix Andrew Core", date: "2015-01-10" },
  { title: "Beatlejuice Original Mix", date: "2014-05-27" },
  { title: "Trap Adam Mansell Remix", date: "2013-12-06" },
  { title: "Ceres Original Mix", date: "2013-06-12" },
  { title: "Nebula Original Mix", date: "2013-06-12" },
  { title: "Comet Original Mix", date: "2013-06-12" },
  { title: "Medium Orginal Mix", date: "2012-01-31" },
  { title: "Cheese Original Mix", date: "2011-07-07" },
  { title: "Mouse Original Mix", date: "2011-07-07" },
  { title: "Toxic Trail Original Mix", date: "2011-06-20" },
  { title: "Rave Alarm Original Mix", date: "2011-06-20" },
  { title: "TGV Original Mix", date: "2011-06-20" },
  { title: "Wrong Turn Original Mix", date: "2011-06-20" },
  { title: "Helix Nebula John Lecter Remix", date: "2011-05-16" },
  { title: "Vargo Original Mix", date: "2011-02-16" },
  { title: "The Howl Of Wolfs (Intro) Original Mix", date: "2011-02-16" },
  { title: "WolFing(er) Original Mix", date: "2011-02-16" },
  { title: "Canavar Original Mix", date: "2011-02-16" },
  { title: "Sergiala Original Mix", date: "2011-02-16" },
  { title: "Ulv Original Mix", date: "2011-02-16" },
  { title: "Ookami Original Mix", date: "2011-02-16" },
  { title: "Volk Original Mix", date: "2011-02-16" },
  { title: "Lobo Original Mix", date: "2011-02-16" },
  { title: "Loup Original Mix", date: "2011-02-16" },
  { title: "Kurt Original Mix", date: "2011-02-16" },
  { title: "Vulkirk Original Mix", date: "2011-02-16" },
  { title: "Sleep (Outro) Original Mix", date: "2011-02-16" },
  { title: "Tension Original Mix", date: "2010-08-26" },
  { title: "Green Zone Original Mix", date: "2010-08-26" },
  { title: "Lemon Original Mix", date: "2010-08-26" },
];

const groupedDiscography = [
  discography.filter((_, index) => index % 2 === 0),
  discography.filter((_, index) => index % 2 === 1),
] as const;

const Discography: NextPage = () => (
  <Page title="Discography" img={p2.src}>
    <div className="grid grid-cols-2">
      <div>
        {groupedDiscography[0].map((d) => (
          <div className="my-2" key={d.date}>
            <div className="text-xs">{d.date}</div>
            <div className="text-base">{d.title}</div>
          </div>
        ))}
      </div>
      <div>
        {groupedDiscography[1].map((d) => (
          <div className="my-2" key={d.date}>
            <div className="text-xs">{d.date}</div>
            <div className="text-base">{d.title}</div>
          </div>
        ))}
      </div>
    </div>

    {/* {discography.map((d) => (
        <div className="my-2" key={d.date}>
          <div className="text-xs">{d.date}</div>
          <div className="text-xl">{d.title}</div>
        </div>
      ))} */}
  </Page>
);

export default Discography;
