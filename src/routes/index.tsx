import { createFileRoute } from "@tanstack/react-router";
import {
  Audience, Benefits, Bonuses, Dishes, Faq, FinalCta, Footer, Guarantee, Hero, Inside, Offer, Pain, Product, Reviews, Steps, TopBar, Urgency, Video,
} from "@/components/landing/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fome de Mudança | Receitas fitness e low carb" },
      { name: "description", content: "Ebook com receitas fitness e low carb simples + 3 bônus. Coma bem sem complicação." },
      { property: "og:title", content: "Fome de Mudança | Receitas fitness e low carb" },
      { property: "og:description", content: "Ebook com receitas fitness e low carb simples + 3 bônus." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <TopBar />
      <Hero />
      <Inside />
      <Benefits />
      <Video />
      <Pain />
      <Urgency />
      <Audience />
      <Product />
      <Bonuses />
      <Dishes />
      <Reviews />
      <Offer />
      <Guarantee />
      <Steps />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
