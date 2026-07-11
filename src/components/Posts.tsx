"use client";

import { useState } from "react";

import { Post } from "@/components/Post";

export const Posts = () => {
  const [posts, setPosts] = useState<
    { title: string; date: string; minutes: number; link: string }[] | null
  >(null);

  if (posts === null) {
    fetch("/posts").then(async (response) => {
      const data = await response.json();
      setPosts(data);
    });
    return;
  }

  return (
    <div className={"flex flex-col gap-2"}>
      {posts.map(({ title, date, minutes, link }) => (
        <Post
          key={title}
          link={link}
          title={title}
          date={new Date(date)}
          minutes={minutes}
        />
      ))}
    </div>
  );
};
