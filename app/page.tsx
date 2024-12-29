import Separator from "./_components/common/Separator";
import About from "./_components/pages/home/About";
import Connect from "./_components/pages/home/Connect";
import Work from "./_components/pages/home/Work/Work";

export default function Home() {
  return (
    <main className="flex flex-col">
      <About />
      <Separator className="my-8" />
      <Work />
      <Separator className="my-8" />
      <Connect />
    </main>
  );
}
