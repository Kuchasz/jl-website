import "../styles/globals.css";
import Head from "next/head";
import type { AppType } from "next/dist/shared/lib/utils";
import bg from "../../public/bg.jpg";
import { useRouter } from "next/router";

const menuItems = [
  { name: "about", link: "/about" },
  { name: "discography", link: "/discography" },
  { name: "music", link: "/music" },
  { name: "videos", link: "/videos" },
  { name: "contact", link: "/contact" },
];

const SubMenu = () => (
  <div className="my-16 flex w-full items-center justify-center">
    <a href="https://protun.es/stig239">
      <svg className="mx-4 h-7 w-7 rounded-full bg-white p-1" viewBox="0 0 24 24">
        <path
          fill="black"
          d="M12,3A3,3 0 0,0 9,6H15A3,3 0 0,0 12,3M19,6A2,2 0 0,1 21,8V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V8C3,6.89 3.89,6 5,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6H19M9,19L16.5,14L9,10V19Z"
        />
      </svg>
    </a>
    <a href="https://open.spotify.com/artist/4dAzbhtfVKyJbM5Qa9zUQj">
      <svg
        className="mx-4 h-7 w-7 rounded-full bg-white p-1"
        viewBox="0 0 24 24"
      >
        <path
          fill="black"
          d="M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
    </a>
    <a href="https://www.youtube.com/c/JohnLecter">
      <svg className="mx-4 h-7 w-7 rounded-full bg-white p-1" viewBox="0 0 24 24">
        <path
          fill="black"
          d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
        />
      </svg>
    </a>
  </div>
);

const Menu = () => (
  <div className="flex w-full flex-col bg-gray-800 bg-opacity-90">
    <div className="flex w-full flex-row flex-wrap justify-center">
      {menuItems.map((mi) => (
        <a
          key={mi.name}
          href={mi.link}
          className="my-1 mx-1 cursor-pointer self-center py-1 px-1 text-lg font-semibold uppercase text-gray-100 drop-shadow-sm transition-all hover:scale-105 hover:text-slate-500 md:my-3 md:mx-4 md:py-3 md:px-4"
        >
          {mi.name}
        </a>
      ))}
    </div>
  </div>
);

const Slogan = () => (
  <div className="mt-16 flex min-h-full flex-grow flex-col items-center justify-center leading-normal text-gray-100">
    <h1 className="text-5xl font-extrabold md:text-[5rem]">John Lecter.</h1>
    <span>Electronic music producer</span>
  </div>
);

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>John Lecter</title>
        <meta name="description" content="John Lecter's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen w-full flex-col items-center">
        <div className="absolute -z-10 min-h-full w-full overflow-hidden">
          <div className="absolute z-10 min-h-full w-full bg-slate-800 opacity-90"></div>
          <div
            className={`absolute min-h-full w-full ${
              router.asPath === "/" ? "animate-fly-in-out" : ""
            } bg-cover bg-center blur-sm`}
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>
        </div>
        <Menu />
        <Slogan />
        <SubMenu />
        <Component {...pageProps} />
      </div>
      <footer className="bg-gray-800 py-8 text-center text-sm text-slate-500">
        {`© ${new Date().getFullYear()} John Lecter. All Rights Reserved`}
      </footer>
    </>
  );
};

export default MyApp;
