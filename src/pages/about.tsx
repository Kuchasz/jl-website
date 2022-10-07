import type { NextPage } from "next";

import p1 from "../../public/photos/PSX_20220527_081517.jpg";
import { TextBlock } from "../components/text-block";
// import p2 from "../../public/photos/PSX_20220527_081713.jpg";
// import p3 from "../../public/photos/PSX_20220527_081846.jpg";

const About: NextPage = () => {
  return (
    <div className="container mb-8 flex flex-col">
      <div className="flex flex-col overflow-clip rounded-xl bg-gray-100 text-gray-800 lg:flex-row">
        <img
          className="max-w-none object-cover object-center lg:max-w-lg"
          src={p1.src}
        ></img>
        <div className="flex flex-col p-20">
          <div className="pb-12 text-6xl">About</div>
          <section>
            <TextBlock>
              Prywatnie, Krzysztof Żebro. Na co dzień pracujący w obszarze
              kultury, sportu oraz mediów. Swoją przygodę z muzyką elektroniczną
              zaczął 14 lat temu w małym klubie w Małopolsce. Szlifując swoja
              technikę oraz styl, szybko został zauważony przez większe kluby.
            </TextBlock>
            <TextBlock>
              W 2008 roku nastąpił duży progress. Jego pełne energii i
              pomysłowości sety zostały docenione, co zaowocowało zaproszeniem
              na event Nature One 2008. Występ przyniósł kolejne bookingi w
              największych klubach w południowej Polsce. Rok 2009 to pierwsze
              kroki w produkcji własnych utworów.Okazało się, że to był dobry
              krok. Pierwsze produkcje spotkały się z aprobatą jednego z
              weteranów muzyki techno w Polsce -Siasi- który zaproponował
              współpracę z Dirty Stuff Records. Juz pierwsza ep-ka przyniosła
              sukces. Utwór pt.Haniball po trzech dniach sprzedaży na portalu
              BeatsDigital.com znalazł się na 7 miejscu. Kwintesencją współpracy
              był album The Howl of Wolf utrzymany w mocnych technicznych
              brzmieniach.
            </TextBlock>
            <TextBlock>
              W kolejnych latach John Lecter wydał kilkanaście singli w kilku
              wytwórniach (Orion Rec, Soundwave, Sunface). Jego produkcje
              naszpikowane były mocnymi technicznymi dźwiękami. Z różnych
              przyczyn, Lecter zawiesił swoją karierę muzyczną w 2011 roku.
            </TextBlock>
            <TextBlock>
              Po 12 latach przerwy, światło dzienne ujrzała jego nowa Ep-ka
              zatytułowana After Earth wydana przez label STIG REC pochądzący ze
              stajni BiG House Mamas Rec. Następnym krokiem była album
              Defragmentation ciepło przyjęty przez krytyków. Ostatnie tygodnie
              zaowocowały podpisaniem kolejnych 2 kontraktów z wytwórniami
              Oxytech Records oraz ORGNC Rec.
            </TextBlock>
            <TextBlock>
              W kalendarzu czekają już kolejne produkcje i wydania. Wyraźnie
              słyszalna zmiana w technice oraz stylu muzycznym powoduje, że mamy
              doczynienia z produkcjami opartymi na melodyjnym techno z
              elementami muzyki filmowej oraz ambientowej.
            </TextBlock>
          </section>
          <span className="py-8 text-gray-400">
            ...................................................
          </span>
          <section>
            <TextBlock>
              Privately, Krzysztof Żebro. On a daily basis working in the field
              of culture, sport and media. He started his adventure with
              electronic music 14 years ago in a small club in Małopolska.
              Polishing his technique and style, he was quickly noticed by
              larger clubs.
            </TextBlock>
            <TextBlock>
              In 2008 there has been a lot of progress. His sets, full of energy
              and ingenuity, were appreciated resulted in an invitation to the
              Nature One 2008 event. The performance brought more bookings in
              biggest clubs in southern Poland. The year 2009 is the first steps
              in the production of our own It turned out that it was a good
              step. The first productions met with the approval of one of the
              Techno music veterans in Poland -Siasi- who offered to cooperate
              with Dirty Stuff Records. Already the first EP brought success.
              The song titled Haniball after three days of sale on
              BeatsDigital.com, he came in 7th place, with the album The Howl of
              Wolf maintained in strong technical sounds.
            </TextBlock>
            <TextBlock>
              In the following years, John Lecter He has released over a dozen
              singles on several labels (Orion Rec, Soundwave, Sunface). His
              productions were packed with strong technical sounds. For various
              reasons, Lecter has suspended his music career in 2011.
            </TextBlock>
            <TextBlock>
              After 12 years of break, a new one saw the light of day An EP
              entitled After Earth released by the STIG REC label coming from
              the BiG House stable Mamas Rec. The next step was the album
              Defragmentation, warmly received by the critics.
            </TextBlock>
            <TextBlock>
              Recent weeks have resulted in signing another 2 contracts with
              Oxytech Records and ORGNC Rec. More productions and releases are
              already waiting in the calendar. Clearly audible change in
              technique and musical style means that we deal with productions
              based on melodic techno with elements of film and ambient music.
            </TextBlock>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
