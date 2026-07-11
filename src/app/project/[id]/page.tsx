export default async function ProjectDisplayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <div>Projeto: {id}</div>;
}
