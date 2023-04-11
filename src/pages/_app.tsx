import "../styles/globals.css";
import Head from "next/head";
import type { AppType } from "next/dist/shared/lib/utils";
import bg from "../../public/bg.jpg";
import { useRouter } from "next/router";
import Link from "next/link";
import { translations, useTranslations } from "../i18n";
import classNames from "classnames";

const menuItems = [
  { name: "about", link: "/about" },
  { name: "discography", link: "/discography" },
  { name: "music", link: "/music" },
  { name: "videos", link: "/videos" },
  { name: "contact", link: "/contact" },
] as const;

const SubMenu = () => (
  <div className="my-16 flex w-full items-center justify-center">
    <a href="https://protun.es/stig239">
      <svg
        className="mx-4 h-8 w-8 rounded-full bg-white p-1 md:mx-6"
        viewBox="0 0 24 24"
      >
        <path
          fill="black"
          d="M12,3A3,3 0 0,0 9,6H15A3,3 0 0,0 12,3M19,6A2,2 0 0,1 21,8V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V8C3,6.89 3.89,6 5,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6H19M9,19L16.5,14L9,10V19Z"
        />
      </svg>
    </a>
    <a href="https://open.spotify.com/artist/4dAzbhtfVKyJbM5Qa9zUQj">
      <svg
        className="mx-4 h-8 w-8 rounded-full bg-white p-1 md:mx-6"
        viewBox="0 0 24 24"
      >
        <path
          fill="black"
          d="M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
    </a>
    <a href="https://www.youtube.com/c/JohnLecter">
      <svg
        className="mx-4 h-8 w-8 rounded-full bg-white p-1 md:mx-6"
        viewBox="0 0 24 24"
      >
        <path
          fill="black"
          d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
        />
      </svg>
    </a>
    <a href="https://soundcloud.com/john-lecter">
      <svg
        className="mx-4 h-8 w-8 rounded-full bg-white p-1 md:mx-6"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.56,8.87V17H20.32V17C22.17,16.87 23,15.73 23,14.33C23,12.85 21.88,11.66 20.38,11.66C20,11.66 19.68,11.74 19.35,11.88C19.11,9.54 17.12,7.71 14.67,7.71C13.5,7.71 12.39,8.15 11.56,8.87M10.68,9.89C10.38,9.71 10.06,9.57 9.71,9.5V17H11.1V9.34C10.95,9.5 10.81,9.7 10.68,9.89M8.33,9.35V17H9.25V9.38C9.06,9.35 8.87,9.34 8.67,9.34C8.55,9.34 8.44,9.34 8.33,9.35M6.5,10V17H7.41V9.54C7.08,9.65 6.77,9.81 6.5,10M4.83,12.5C4.77,12.5 4.71,12.44 4.64,12.41V17H5.56V10.86C5.19,11.34 4.94,11.91 4.83,12.5M2.79,12.22V16.91C3,16.97 3.24,17 3.5,17H3.72V12.14C3.64,12.13 3.56,12.12 3.5,12.12C3.24,12.12 3,12.16 2.79,12.22M1,14.56C1,15.31 1.34,15.97 1.87,16.42V12.71C1.34,13.15 1,13.82 1,14.56Z"
        />
      </svg>
    </a>
    <a href="https://www.instagram.com/johnlecterr/">
      <svg
        className="mx-4 h-8 w-8 rounded-full bg-white p-1 md:mx-6"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
        />
      </svg>
    </a>
  </div>
);

const Menu = () => {
  const strings = useTranslations();

  return (
    <div className="flex w-full flex-col bg-gray-800">
      <div className="flex w-full flex-row flex-wrap justify-center">
        {menuItems.map((mi) => (
          <Link key={mi.name} href={mi.link}>
            <span className="my-1 mx-1 cursor-pointer self-center py-1 px-1 font-semibold uppercase text-gray-100 drop-shadow-sm transition-all hover:text-gray-400 md:my-3 md:mx-4 md:py-3 md:px-4 md:text-lg">
              {strings.menuOptions[mi.name]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Slogan = () => (
  <Link href={"/"}>
    <div className="mt-16 flex flex-grow cursor-pointer flex-col items-center justify-center leading-normal text-gray-100">
      <h1 className="text-5xl font-extrabold md:text-[5rem]">John Lecter.</h1>
      <span>Electronic music producer</span>
    </div>
  </Link>
);

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const isMainPage = router.asPath === "/";

  return (
    <>
      <Head>
        <title>John Lecter</title>
        <meta name="description" content="John Lecter's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-grow flex-col items-center">
        <Menu />
        <div
          className={classNames(
            "relative flex w-full flex-grow flex-col items-stretch justify-center overflow-hidden",
            { ["min-h-[calc(100vh-76px)]"]: isMainPage }
          )}
        >
          <div className="absolute -z-10 h-full w-full overflow-hidden">
            <div className="absolute z-10 h-full w-full bg-slate-800 opacity-60"></div>
            <div
              className={`absolute h-full w-full ${
                isMainPage ? "animate-fly-in-out" : ""
              } bg-cover bg-center `}
              style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
          </div>
          <Slogan />
          <SubMenu />
        </div>
        <Component {...pageProps} />
      </div>
      <footer className="bg-gray-800 py-8 text-center text-sm text-slate-500">
        {`© ${new Date().getFullYear()} John Lecter. All Rights Reserved`}
      </footer>
    </>
  );
};

export default MyApp;
