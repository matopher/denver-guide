import { Header } from "@/components/Header";
import { CardGrid } from "@/components/CardGrid";
import { Footer } from "@/components/Footer";
import { places } from "@/data/places";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
        <CardGrid places={places} />
      </main>
      <Footer />
    </>
  );
}
