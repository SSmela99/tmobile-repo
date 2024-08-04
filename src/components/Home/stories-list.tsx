import StoryCell from "@/components/Home/story-cell";

interface StoriesListProps {
  stories: number[];
}

const StoriesList = ({ stories }: StoriesListProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7">
      {stories.map((story) => (
        <StoryCell key={story} story={story} />
      ))}
    </div>
  );
};

export default StoriesList;
