import { Page } from "../components/page";
import Image from "next/image";
import p1 from "../../public/photos/PSX_20220527_081713.jpg";
import { DiscographyEntryOrderByInput, VideoOrderByInput } from "../gql";
import { api } from "../api";
import Link from "next/link";
import { TextBlock } from "../components/text-block";

const getYoutubeId = (videoUrl: string) => {
  return videoUrl.split("/").slice(-1);
};

const getThumbByVideoUrl = (videoUrl: string) => {
  const id = videoUrl.split("/").slice(-1);

  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

const Home = ({
  bioSneak,
  discography,
  videos,
}: {
  bioSneak: string;
  discography: { title: string; releaseDate: string }[];
  videos: { youtubeUrl: string }[];
}) => {
  return (
    <>
      <Page title="Biography">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mr-8">{bioSneak}</div>
            <Link href="/about">
              <button className="border-1 mt-4 self-start rounded-md border px-6 py-2 hover:bg-gray-100">
                Read More
              </button>
            </Link>
          </div>
          <div className="max-h-[400px]">
            <Image src={p1} />
          </div>
        </div>
      </Page>
      <Page classNames="bg-gray-100" title="Discography">
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
              Read More
            </button>
          </Link>
        </div>
      </Page>
      <Page title="listen to the music">
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
      <Page classNames="bg-gray-800 text-white" title="Videos">
        <div className="flex flex-col items-center">
          <div className="flex gap-x-4">
            {videos.map((v) => (
              <Link href={`/video/${getYoutubeId(v.youtubeUrl)}`}>
                <img
                  className="grayscale brightness-50 hover:brightness-100 hover:grayscale-0 transition-all cursor-pointer max-w-[15rem]"
                  src={getThumbByVideoUrl(v.youtubeUrl)}
                ></img>
              </Link>
            ))}
          </div>
          <Link href="/videos">
            <button className="border-1 mt-8 rounded-md border px-6 py-2 hover:bg-gray-700">
              See More
            </button>
          </Link>
        </div>
      </Page>
      <Page title="Contact">
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

export async function getStaticProps() {
  const { discographyEntries } = await api.discographyEntries({
    orderBy: DiscographyEntryOrderByInput.ReleaseDateDesc,
  });

  const { videos } = await api.videos({
    orderBy: VideoOrderByInput.CreatedAtDesc,
    first: 4,
  });

  return {
    props: {
      bioSneak:
        "Prywatnie, Krzysztof Żebro. Na co dzień pracujący w obszarze kultury, sportu oraz mediów. Swoją przygodę z muzyką elektroniczną zaczął 14 lat temu w małym klubie w Małopolsce. Szlifując swoja technikę oraz styl, szybko został zauważony przez większe kluby.",
      discography: discographyEntries,
      videos,
    },
    revalidate: 10,
  };
}

export default Home;
