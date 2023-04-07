import { Page } from "../components/page";
import p2 from "../../public/photos/PSX_20220527_080900.jpg";
import { DiscographyEntryOrderByInput } from "../gql";
import { api } from "../api";

const Discography = ({
  discography,
}: {
  discography: { title: string; releaseDate: string }[];
}) => {
  const groupedDiscography = [
    discography.filter((_, index) => index % 2 === 0),
    discography.filter((_, index) => index % 2 === 1),
  ] as const;

  return (
    <Page title="Discography" img={p2}>
      <div className="grid grid-cols-2">
        <div className="mx-4">
          {groupedDiscography[0].map((d) => (
            <div className="my-2" key={d.releaseDate + d.title}>
              <div className="text-gray-500 text-[0.6rem]">{d.releaseDate}</div>
              <div className="text-base">{d.title}</div>
            </div>
          ))}
        </div>
        <div className="mx-4">
          {groupedDiscography[1].map((d) => (
            <div className="my-2" key={d.releaseDate + d.title}>
              <div className="text-gray-500 text-[0.6rem]">{d.releaseDate}</div>
              <div className="text-base">{d.title}</div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export async function getStaticProps() {
  const { discographyEntries } = await api.discographyEntries({
    orderBy: DiscographyEntryOrderByInput.ReleaseDateDesc,
  });

  return {
    props: {
      discography: discographyEntries,
    },
    revalidate: 10,
  };
}

export default Discography;
