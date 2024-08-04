import Link from "next/link";

interface StoryCellProps {
  story: number;
}

const StoryCell = ({ story }: StoryCellProps) => {
  return (
    <Link
      href={`/story/${story}`}
      key={story}
      className="font-semibold text-lg p-4  text-center hover:bg-blue-400 dark:hover:bg-yellow-500 transition"
    >
      {story}
    </Link>
  );
};

export default StoryCell;
