import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// 보여주기용 더미 데이터 (실제 내용으로 교체 예정)
const profile = {
  name: "홍길동",
  bio: "세계 최강의 바이브코더",
  imageSrc: "/profile-placeholder.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com/" },
  { title: "LinkedIn", url: "https://www.linkedin.com/" },
  { title: "Blog", url: "https://example.com/" },
];

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-12 sm:py-16 dark:bg-black">
      <div className="flex w-full max-w-md flex-col items-center">
        <ProfileHeader {...profile} />
        <ul className="mt-10 flex w-full flex-col gap-6">
          {links.map((link) => (
            <li key={link.title}>
              <LinkCard {...link} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
