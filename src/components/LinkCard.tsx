type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-center font-medium text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-zinc-300"
    >
      {title}
    </a>
  );
}
