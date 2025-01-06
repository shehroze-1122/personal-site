import Separator from "@/components/common/Separator";
import About from "@/components/pages/home/About";
import Connect from "@/components/pages/home/Connect";
import RecentPosts from "@/components/pages/home/RecentPosts/RecentPosts";
import Work from "@/components/pages/home/Work/Work";

export default function Home() {
  return (
    <main className="flex flex-col">
      <About />
      <Separator className="my-8" />
      <RecentPosts />
      <Separator className="my-8" />
      <Work />
      <Separator className="my-8" />
      <Connect />
    </main>
  );
}
