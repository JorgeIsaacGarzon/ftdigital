import PageLayout from "../../components/PageLayout";
import Media from "../../components/Media";

export default function Photos({ pictures }) {
  return (
    <PageLayout titlePage="Media">
      <h1 className=" text-center font-bold uppercase my-4 text-lg">
        My Video Games from API
      </h1>

      <div className="w-full flex flex-wrap gap-5 px-12 overflow-hidden justify-between">
        {pictures.slice(1, 13)?.map((picture) => (
          <Media key={picture.id} picture={picture} />
        ))}
      </div>
    </PageLayout>
  );
}

// From static, just one request
export async function getStaticProps() {
  const response = await fetch("https://www.freetogame.com/api/games");
  const pictures = await response.json();
  return {
    props: {
      pictures,
    },
  };
}
