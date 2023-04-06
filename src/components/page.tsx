import Image, { StaticImageData } from "next/image";
import { TextHeader } from "./text-header";
import p1 from "../../public/photos/PSX_20220527_081517.jpg";

export const Page = ({
  img,
  title,
  children,
}: {
  img: StaticImageData;
  title: string;
  children: React.ReactNode;
}) => {
    return (
    <div className="container my-8 flex flex-col">
      <div className="flex flex-col overflow-clip rounded-xl shadow-lg bg-gray-100 text-gray-800 lg:flex-row">
        <Image src={img} className="max-w-none object-cover object-center lg:max-w-lg" width={img.width} height={img.height}></Image>
        <div className="flex flex-col p-8 sm:p-20 w-full">
          <TextHeader>{title}</TextHeader>
          {children}
        </div>
      </div>
    </div>
  );
};
