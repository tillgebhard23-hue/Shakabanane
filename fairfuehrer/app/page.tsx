import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Problem } from "@/components/sections/Problem";
import { How } from "@/components/sections/How";
import { Categories } from "@/components/sections/Categories";
import { Plus } from "@/components/sections/Plus";
import { Partners } from "@/components/sections/Partners";
import { Contribute } from "@/components/sections/Contribute";
import { Trust } from "@/components/sections/Trust";
import { AppDownload } from "@/components/sections/AppDownload";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <How />
        <Categories />
        <Plus />
        <Partners />
        <Contribute />
        <Trust />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}
