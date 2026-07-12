export const GET = async () => {
  const response = await fetch("https://dev.to/api/articles?username=iachilo", {
    cache: "force-cache",
    next: { revalidate: 900 },
  });

  const posts: {
    title: string;
    published_timestamp: string;
    reading_time_minutes: number;
    canonical_url: string;
  }[] = await response.json();

  return Response.json(
    posts.map(
      ({
        title,
        published_timestamp,
        reading_time_minutes,
        canonical_url,
      }) => ({
        title,
        date: published_timestamp,
        minutes: reading_time_minutes,
        link: canonical_url,
      }),
    ),
  );
};
