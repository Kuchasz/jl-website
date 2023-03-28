import { TextHeader } from "./text-header";

export const Page = ({
  img,
  title,
  children,
}: {
  img: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="container my-8 flex flex-col">
      <div className="flex flex-col overflow-clip rounded-xl shadow-lg bg-gray-100 text-gray-800 lg:flex-row">
        <img
          className="max-w-none object-cover object-center lg:max-w-lg"
          src={img}
        ></img>
        <div className="flex flex-col p-8 sm:p-20 w-full">
          <TextHeader>{title}</TextHeader>
          {children}
        </div>
      </div>
    </div>
  );
};
