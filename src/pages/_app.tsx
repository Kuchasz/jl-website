import "../styles/globals.css";
import Head from "next/head";
import type { AppType } from "next/dist/shared/lib/utils";
import bg from "../../public/bg.jpg";
import { useRouter } from "next/router";

const menuItems = [
  { name: "about", link: "/about" },
  { name: "discography", link: "/" },
  { name: "music", link: "/" },
  { name: "videos", link: "/videos" },
  { name: "contact", link: "/" },
];

const Menu = () => (
  <div className="flex flex-row flex-wrap w-full justify-center bg-gray-800 bg-opacity-90">
    {menuItems.map((mi) => (
      <a
        key={mi.name}
        href={mi.link}
        className="my-1 mx-1 cursor-pointer self-center py-1 px-1 text-xl font-semibold uppercase text-gray-100 drop-shadow-sm transition-all hover:scale-105 hover:text-slate-500 md:my-4 md:mx-4 md:py-4 md:px-4" 
      >
        {mi.name}
      </a>
    ))}
  </div>
);

const Slogan = () => (
  <div className="flex my-16 flex-col min-h-full flex-grow items-center justify-center leading-normal text-gray-100">
    <h1 className="text-5xl font-extrabold md:text-[5rem]">
      John Lecter.
    </h1>
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
          <div className="absolute z-10 min-h-screen w-full bg-slate-800 opacity-90"></div>
          <div
            className={`min-h-screen w-full ${router.asPath === '/' ? 'animate-fly-in-out' : ''} blur-sm bg-cover bg-center`}
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>
        </div>
        <Menu />
        <Slogan />
        <Component {...pageProps} />
      </div>
      <footer className="bg-gray-800 py-8 text-center text-sm text-slate-500">
        {`© ${new Date().getFullYear()} John Lecter. All Rights Reserved`}
      </footer>
    </>
  );
};

export default MyApp;
