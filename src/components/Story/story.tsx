"use client";

import { useEffect } from "react";
import Link from "next/link";

interface StoryProps {
  story: Story;
}

const getDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toDateString();
};

const Story = ({ story }: StoryProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 mb-4">
        <h2 className="text-3xl font-bold">{story.title}</h2>
        <p>{`(${story.id})`}</p>
      </div>

      <p>Type: {story.type}</p>
      <p>Score: {story.score}</p>
      <p>Author: {story.by}</p>
      <p>Published: {getDate(story.time)}</p>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 mt-12 mb-8">
        <p>Link to full story: </p>
        <Link href={story.url} target="_blank" className="font-bold break-all">
          {story.url}
        </Link>
      </div>
    </>
  );
};

export default Story;
