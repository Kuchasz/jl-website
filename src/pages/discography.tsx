import { Page } from "../components/page";
import p2 from "../../public/photos/PSX_20220527_080900.jpg";
import { gql } from "graphql-request";
import { query } from "../api";

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
    <Page title="Discography" img={p2.src}>
      <div className="grid grid-cols-2">
        <div>
          {groupedDiscography[0].map((d) => (
            <div className="my-2" key={d.releaseDate}>
              <div className="text-xs">{d.releaseDate}</div>
              <div className="text-base">{d.title}</div>
            </div>
          ))}
        </div>
        <div>
          {groupedDiscography[1].map((d) => (
            <div className="my-2" key={d.releaseDate}>
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
  const q = gql`
    query DiscographyEntries {
      discographyEntries(first: 1000, orderBy: releaseDate_DESC) {
        releaseDate
        title
      }
    }
  `;

  const data = (await query(q)) as any;

  return {
    props: {
      discography: data.discographyEntries,
    },
    revalidate: 10,
  };
}

export default Discography;
