import { StaticImageData } from "next/image";
import { TextHeader } from "./text-header";
import classNames from "classnames";

export const Page = ({
  img,
  title,
  classNames : cn,
  children,
}: {
  img?: StaticImageData;
  title?: string;
  classNames?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={classNames("flex py-16 w-full flex-col items-center", cn)}>
      <div className="container flex flex-col overflow-clip lg:flex-row">
        <div className="flex w-full flex-col items-center px-8 sm:px-20">
          {title && <TextHeader>{title}</TextHeader>}
          {children}
        </div>
      </div>
    </div>
  );
};
