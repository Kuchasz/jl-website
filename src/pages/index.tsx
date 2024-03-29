import { Page } from "../components/page";
import Image from "next/image";
import p1 from "../../public/photos/PSX_20220527_081713.jpg";
import { DiscographyEntryOrderByInput, Language, VideoOrderByInput } from "../gql";
import { api } from "../api";
import Link from "next/link";
import { getThumbByVideoUrl, getYoutubeId } from "../yt-helpers";
import { useTranslations } from "../i18n";

const Home = ({
  bioSneak,
  discography,
  videos
}: {
  bioSneak: string;
  discography: { title: string; releaseDate: string }[];
  videos: { youtubeUrl: string }[];
}) => {
  const translations = useTranslations();
  return (
    <>
      <Page title={translations.about.header}>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mr-8">{bioSneak}</div>
            <Link href="/about">
              <button className="border-1 mt-4 self-start rounded-md border px-6 py-2 hover:bg-gray-100">
                {translations.readMore}
              </button>
            </Link>
          </div>
          <div className="max-h-[400px]">
            <Image src={p1} />
          </div>
        </div>
      </Page>
      <Page classNames="bg-gray-100" title={translations.discography.header}>
        <div className="flex w-full flex-col items-center">
          <div className="relative flex h-64 flex-col flex-wrap gap-x-4 self-stretch overflow-hidden">
            {discography.map((d) => (
              <div
                className="my-2 flex max-w-[200px] flex-col overflow-hidden"
                key={d.releaseDate + d.title}
              >
                <div className="text-[0.6rem] text-gray-500">
                  {d.releaseDate}
                </div>
                <div className="overflow-hidden text-ellipsis whitespace-nowrap text-base">
                  {d.title}
                </div>
              </div>
            ))}
            <div className="absolute h-full w-full bg-gradient-to-r from-gray-100 via-transparent to-gray-100"></div>
          </div>
          <Link href="/discography">
            <button className="border-1 mt-4 rounded-md border px-6 py-2 hover:bg-white">
              {translations.readMore}
            </button>
          </Link>
        </div>
      </Page>
      <Page title={translations.listenMusic}>
        <iframe
          style={{ borderRadius: "12px", maxWidth: "800px" }}
          src="https://open.spotify.com/embed/artist/4dAzbhtfVKyJbM5Qa9zUQj?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Page>
      <Page classNames="bg-gray-800 text-white" title={translations.videos.header}>
        <div className="flex flex-col items-center">
          <div className="flex gap-x-4">
            {videos.map((v) => (
              <Link key={v.youtubeUrl} href={`/video/${getYoutubeId(v.youtubeUrl)}`}>
                <img
                  className="grayscale brightness-50 hover:brightness-100 hover:grayscale-0 transition-all cursor-pointer max-w-[15rem]"
                  src={getThumbByVideoUrl(v.youtubeUrl)}
                ></img>
              </Link> 
            ))}
          </div>
          <Link href="/videos">
            <button className="border-1 mt-8 rounded-md border px-6 py-2 hover:bg-gray-700">
              {translations.seeMore}
            </button>
          </Link>
        </div>
      </Page>
      <Page title={translations.contact.header}>
        <div className="text-center">
          Management & Booking:
          <br />
          <a
            className="hover:text-gray-500"
            href="mailto:sybillabibu@gmail.com"
          >
            sybillabibu@gmail.com
          </a>
        </div>
      </Page>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const { discographyEntries } = await api.discographyEntries({
    orderBy: DiscographyEntryOrderByInput.ReleaseDateDesc,
  });

  const { videos } = await api.videos({
    orderBy: VideoOrderByInput.CreatedAtDesc,
    first: 4,
  });

  const {
    siteContents: [siteContent],
  } = await api.about({ language: locale as Language });

  const {
    content: { text: bio },
  } = siteContent!;
  
  return {
    props: {
      bioSneak: bio.split("\\n")[0],
      discography: discographyEntries,
      videos
    },
    revalidate: 10,
  };
}

export default Home;
