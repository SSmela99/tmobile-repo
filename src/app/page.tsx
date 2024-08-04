import StoriesList from "@/components/Home/stories-list";

async function fetchStoriesId<T>() {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as T;
}

const HomePage = async () => {
  const stories = await fetchStoriesId<number[]>();

  return (
    <div className="max-w-wrapper mx-auto py-12 min-h-[calc(100vh-95px)] px-8">
      <h1 className="font-bold text-3xl mb-8">
        Top stories from HackerNews API
      </h1>
      <StoriesList stories={stories} />
    </div>
  );
};

export default HomePage;
