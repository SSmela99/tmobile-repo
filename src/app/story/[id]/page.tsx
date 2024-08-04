import Story from "@/components/Story/story";

async function fetchStory<T>(id: string) {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as T;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const story = await fetchStory<Story>(id);

  return (
    <div className="max-w-wrapper mx-auto py-12 px-8 min-h-[800px] h-screen -mt-24 pt-36">
      <Story story={story} />
    </div>
  );
};

export default Page;
