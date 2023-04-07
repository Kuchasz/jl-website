export const TextHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center">
    <div className="text-4xl font-semibold uppercase">{children}</div>
    <div className="my-12 h-[3px] w-12 bg-sky-700"></div>
  </div>
);
