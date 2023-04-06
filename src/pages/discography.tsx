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
        <div>
          {groupedDiscography[0].map((d) => (
            <div className="my-2" key={d.releaseDate + d.title}>
              <div className="text-xs">{d.releaseDate}</div>
              <div className="text-base">{d.title}</div>
            </div>
          ))}
        </div>
        <div>
          {groupedDiscography[1].map((d) => (
            <div className="my-2" key={d.releaseDate + d.title}>
              <div className="text-xs">{d.releaseDate}</div>
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
