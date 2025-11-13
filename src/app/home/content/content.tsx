import { Hero } from "../hero/hero";
import { WelcomeSection } from "../components/welcome-section";

export function HomeContent() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <WelcomeSection />
    </main>
  );
}
