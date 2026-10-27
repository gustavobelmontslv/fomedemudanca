import { useEffect, useRef, useState } from "react";
import {
  Book, Box, CalendarDays, ChefHat, ChevronLeft, ChevronRight, Leaf, Minus, Play, Plus, Repeat, Salad, Utensils,
} from "lucide-react";
import mega from "@/assets/mega.asset.json";
import bonus1 from "@/assets/bonus-marmitas.asset.json";
import bonus2 from "@/assets/bonus-cafes.asset.json";
import bonus3 from "@/assets/bonus-low-carb.asset.json";
import guaranteeSeal from "@/assets/garantia-7-dias.asset.json";
import page1 from "@/assets/page1.asset.json";
import page2 from "@/assets/page2.asset.json";
import page3 from "@/assets/page3.asset.json";
import page4 from "@/assets/page4.asset.json";
import page5 from "@/assets/page5.asset.json";
import dish1 from "@/assets/dish1.asset.json";
import dish2 from "@/assets/dish2.asset.json";
import dish3 from "@/assets/dish3.asset.json";
import dish4 from "@/assets/dish4.asset.json";
import dish5 from "@/assets/dish5.asset.json";
import dish6 from "@/assets/dish6.asset.json";
import dish7 from "@/assets/dish7.asset.json";
import * as C from "@/content/landing";
import { CheckItem, Cta, Hl, Marquee, Pill, Placeholder, Section, Title, useToday } from "./ui";

const icons = { calendar: CalendarDays, utensils: Utensils, chef: ChefHat, book: Book, leaf: Leaf, box: Box, salad: Salad, repeat: Repeat };
const bonusImgs = [bonus1.url, bonus2.url, bonus3.url];
const pages = [page1, page2, page3, page4, page5].map((p) => p.url);

function IconCircle({ name }: { name: keyof typeof icons }) {
  const I = icons[name];
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pastel text-primary">
      <I className="h-6 w-6" strokeWidth={1.75} />
    </span>
  );
}

export function TopBar() {
  const d = useToday();
  return (
    <div className="sticky top-0 z-50 bg-notice px-4 py-2.5 text-center text-sm font-bold text-notice-foreground">
      Essa oferta acaba hoje! {d}
    </div>
  );
}

export function Hero() {
  const pos = [
    "left-0 top-[8%] [animation-duration:4.5s]",
    "right-0 top-[18%] [animation-duration:5.5s]",
    "left-[2%] bottom-[18%] [animation-duration:6s]",
    "right-[2%] bottom-[8%] [animation-duration:5s]",
  ];
  return (
    <Section bg="white" className="hero-section">
      <div className="text-center">
        <h1 className="mx-auto max-w-[880px] text-3xl leading-tight font-bold text-primary md:text-5xl">
          {C.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-[640px] text-base text-muted-foreground md:text-lg">{C.hero.subtitle}</p>
        <div className="relative mx-auto mt-8 w-[90%] md:w-[60%]">
          <img src={mega.url} alt="Mockup do ebook Fome de Mudança com os 3 bônus" width={1920} height={1920} className="animate-float aspect-square w-full" fetchPriority="high" />
          {C.hero.bubbles.map((b, i) => (
            <span key={b} className={`animate-float absolute rounded-full border border-pastel bg-background px-3 py-1.5 text-[11px] text-foreground shadow-soft md:text-sm ${pos[i]}`}>
              {b}
            </span>
          ))}
        </div>
        <ul className="mx-auto mt-8 inline-flex flex-col gap-3 text-sm md:text-base">
          {C.hero.checks.map((c) => <CheckItem key={c}>{c}</CheckItem>)}
        </ul>
        <div className="mt-8"><Cta>{C.hero.cta}</Cta></div>
        <p className="mt-3 text-xs text-muted-foreground">{C.hero.note}</p>
      </div>
    </Section>
  );
}

export function Inside() {
  return (
    <section className="section-y bg-mint">
      <div className="container-lp"><Title>Veja <Hl>por dentro</Hl> do material</Title></div>
      <div className="mt-10">
        <Marquee
          continuous
          items={pages.map((src, i) => (
            <img key={src} src={src} alt={`Página de receita ${i + 1} do ebook`} loading="lazy" width={1056} height={1489}
              className="aspect-[1056/1489] h-[380px] w-auto rounded-2xl border border-border object-cover md:h-[460px]" />
          ))}
        />
      </div>
      <p className="container-lp mt-6 text-center text-sm text-muted-foreground">
        Receitas com foto, ingredientes e modo de preparo explicado passo a passo.
      </p>
    </section>
  );
}

export function Benefits() {
  return (
    <Section bg="white">
      <Title>O que este ebook vai fazer pela sua <Hl>rotina</Hl></Title>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {C.benefits.map((b) => (
          <div key={b.title} className="card-lp">
            <IconCircle name={b.icon} />
            <h3 className="mt-4 text-base text-primary">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Video() {
  return (
    <Section bg="cream">
      <Title>Assista antes de <Hl>decidir</Hl></Title>
      {/* VSL: substitua este bloco por um <iframe> ou <video> com a URL do vídeo */}
      <div className="relative mx-auto mt-8 aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-[20px] bg-placeholder">
        <span className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-background text-primary">
          <Play className="ml-1 h-7 w-7" />
        </span>
      </div>
    </Section>
  );
}

export function Pain() {
  return (
    <Section bg="peach">
      <div className="card-lp mx-auto max-w-[640px] border-t-4 border-t-pastel md:p-10">
        <h2 className="text-center text-2xl leading-tight font-bold text-primary md:text-3xl">
          Você não precisa de uma dieta complicada, precisa saber <Hl>o que cozinhar</Hl>
        </h2>
        <p className="mt-5 text-base text-muted-foreground">{C.pain.text}</p>
        <ul className="mt-6 flex flex-col gap-3">{C.pain.checks.map((c) => <CheckItem key={c}>{c}</CheckItem>)}</ul>
        <div className="mt-8 text-center"><Cta>Quero as receitas</Cta></div>
      </div>
    </Section>
  );
}

export function Urgency() {
  return (
    <Section bg="deep">
      <div className="mx-auto max-w-[640px] text-center">
        <h2 className="text-2xl leading-tight font-bold uppercase md:text-3xl">{C.urgency.title}</h2>
        <p className="mt-5 text-base opacity-90">{C.urgency.text}</p>
        <div className="mt-8"><Cta inverted>Quero começar hoje</Cta></div>
      </div>
    </Section>
  );
}

export function Audience() {
  return (
    <Section bg="white">
      <Title>Ideal para <Hl>você</Hl> que:</Title>
      <div className="mx-auto mt-10 grid max-w-[760px] gap-4 md:grid-cols-2">
        {C.audience.map((a) => (
          <div key={a.text} className="card-lp flex items-center gap-4">
            <IconCircle name={a.icon} />
            <p className="text-base">{a.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Product() {
  return (
    <Section bg="mint">
      <div className="text-center"><Pill>Produto principal</Pill></div>
      <Title className="mt-4">O que você vai <Hl>receber</Hl></Title>
      <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <img src={mega.url} alt="Ebook Fome de Mudança" loading="lazy" width={1920} height={1920} className="mx-auto aspect-square w-full max-w-[440px]" />
        <div className="card-lp">
          <h3 className="text-2xl text-primary">Fome de Mudança</h3>
          <p className="mt-4 text-sm font-bold text-primary uppercase">Categorias</p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">{C.product.categories.map((c) => <CheckItem key={c}>{c}</CheckItem>)}</ul>
          <p className="mt-6 text-sm font-bold text-primary uppercase">Estrutura</p>
          <ul className="mt-3 flex flex-col gap-3">{C.product.structure.map((c) => <CheckItem key={c}>{c}</CheckItem>)}</ul>
        </div>
      </div>
    </Section>
  );
}

export function Bonuses() {
  return (
    <Section bg="white">
      <Title>Ao garantir hoje, você leva <Hl>3 bônus</Hl> de presente</Title>
      <p className="mt-3 text-center text-sm text-muted-foreground">Disponíveis apenas nesta oferta.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {C.bonuses.map((b, i) => (
          <div key={b.n} className="overflow-hidden rounded-[20px] border border-border bg-card shadow-soft">
            <div>
              <img src={bonusImgs[i]} alt={`Foto do bônus ${b.title}`} loading="lazy" width={678} height={452} className="block aspect-[3/2] w-full object-cover" />
            </div>
            <div className="p-6">
              <Pill tone="peach">Bônus {b.n}</Pill>
              <h3 className="mt-3 text-lg text-primary">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              <p className="mt-4 flex items-baseline gap-3">
                <s className="text-sm text-muted-foreground">{b.price}</s>
                <strong className="text-primary">Hoje: R$ 0,00</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function useVisibleCount() {
  const [n, setN] = useState(1);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const f = () => setN(mq.matches ? 3 : 1);
    f();
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);
  return n;
}

const DISHES = [dish1, dish2, dish3, dish4, dish5, dish6, dish7].map((d) => d.url);
const DISH_ALTS = [
  "Torradas com pasta de abacate",
  "Pão de farinha de arroz fofinho",
  "Bolo de cenoura de frigideira",
  "Lasanha low carb",
  "Biscoitinho saudável de cacau",
  "Prato low carb colorido",
  "Pizza de quinoa sem glúten",
];

export function Dishes() {
  const visible = useVisibleCount();
  const [idx, setIdx] = useState(0);
  const touch = useRef<number | null>(null);
  const total = DISHES.length;
  const go = (d: number) => setIdx((i) => (i + d + total) % total);
  // render a rotated list so the loop is seamless in both directions
  const ordered = DISHES.map((_, k) => (idx + k) % total).slice(0, visible);

  return (
    <Section bg="cream">
      <Title>Pratos que você vai <Hl>aprender a fazer</Hl></Title>
      <div
        className="relative mt-10 px-6 md:px-8"
        onTouchStart={(e) => (touch.current = e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          if (touch.current == null) return;
          const dx = (e.changedTouches[0]?.clientX ?? touch.current) - touch.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touch.current = null;
        }}
      >
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${visible}, minmax(0, 1fr))` }}>
          {ordered.map((d) => (
            // TROCAR PELA FOTO DO PRATO
            <Placeholder key={d} label={`Foto do prato ${d + 1}`} className="aspect-square w-full rounded-[20px] animate-in fade-in duration-300" />
          ))}
        </div>
        {[
          { d: -1, I: ChevronLeft, cls: "left-0", l: "Anterior" },
          { d: 1, I: ChevronRight, cls: "right-0", l: "Próximo" },
        ].map(({ d, I, cls, l }) => (
          <button key={l} aria-label={l} onClick={() => go(d)}
            className={`absolute top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-pastel bg-background text-primary shadow-soft ${cls}`}>
            <I className="h-5 w-5" />
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {DISHES.map((d) => (
          <button key={d} aria-label={`Ir para o prato ${d + 1}`} onClick={() => setIdx(d)}
            className={`h-2.5 rounded-full transition-all ${d === idx ? "w-6 bg-primary" : "w-2.5 bg-pastel"}`} />
        ))}
      </div>
    </Section>
  );
}

export function Reviews() {
  return (
    <section className="section-y bg-background">
      <div className="container-lp"><Title>Quem já testou, <Hl>aprovou</Hl></Title></div>
      <div className="mt-10">
        <Marquee
          items={Array.from({ length: 6 }, (_, i) => (
            // TROCAR PELO PRINT DA AVALIAÇÃO REAL
            <Placeholder key={i} label={`Avaliação ${i + 1}`} className="aspect-[3/4] h-[380px] rounded-2xl md:h-[460px]" />
          ))}
        />
      </div>
    </section>
  );
}

export function Offer() {
  const d = useToday();
  return (
    <Section bg="mint">
      <Title>Oferta válida <Hl>somente hoje</Hl></Title>
      <p className="mt-2 text-center font-bold text-primary">{d}</p>
      <div id={C.OFFER_CARD_ID} className="mx-auto mt-8 max-w-[440px] scroll-mt-16 overflow-hidden rounded-[20px] border-2 border-primary bg-card shadow-soft">
        <div className="bg-pastel py-3 text-center text-sm font-bold text-primary uppercase">Pacote único, tudo incluso</div>
        <div className="p-6 text-center">
          <img src={mega.url} alt="Pacote Fome de Mudança com bônus" loading="lazy" width={1920} height={1920} className="mx-auto aspect-square w-44" />
          <ul className="mt-4 flex flex-col gap-3 text-sm">{C.offerItems.map((o) => <CheckItem key={o}>{o}</CheckItem>)}</ul>
          <p className="mt-6 text-sm text-muted-foreground">de <s>R$ 44,90</s> por</p>
          <p className="text-6xl leading-none font-bold text-primary md:text-7xl">R$ 14,90</p>
          <p className="mt-2 text-sm text-muted-foreground">pagamento único</p>
          <p className="mt-3 font-bold text-primary">Você economiza R$ 30,00</p>
          <div className="mt-6 [&>a]:w-full"><Cta checkout>Quero aproveitar</Cta></div>
          <p className="mt-3 text-xs text-muted-foreground">Compra segura e garantia de 7 dias</p>
        </div>
      </div>
    </Section>
  );
}

function Seal() {
  return (
    <img src={guaranteeSeal.url} alt="Selo 7 dias de garantia" width={554} height={554} loading="lazy" className="mx-auto aspect-square w-40 object-contain md:w-full" />
  );
}

export function Guarantee() {
  return (
    <Section bg="white">
      <div className="grid items-center gap-8 text-center md:grid-cols-[20%_1fr] md:text-left">
        <Seal />
        <div>
          <h2 className="text-2xl font-bold text-primary md:text-4xl">Garantia de <Hl>7 dias</Hl></h2>
          <p className="mt-4 max-w-[640px] text-base text-muted-foreground">
            Se você não gostar do material, é só pedir o reembolso dentro de 7 dias e devolvemos o valor pago, sem burocracia.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Steps() {
  return (
    <Section bg="mint">
      <Title>Como funciona o <Hl>acesso</Hl></Title>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {C.steps.map((s, i) => (
          <div key={s} className="card-lp">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-pastel text-lg font-bold text-primary">{i + 1}</span>
            <p className="mt-4 text-base">{s}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center"><Cta>Quero meu acesso</Cta></div>
    </Section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section bg="cream">
      <Title>Perguntas <Hl>frequentes</Hl></Title>
      <div className="mx-auto mt-10 flex max-w-[640px] flex-col gap-3">
        {C.faq.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="rounded-[20px] border border-border bg-card">
              <button className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-primary"
                aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-pastel">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              {isOpen && <p className="px-5 pb-5 text-base text-muted-foreground">{f.a}</p>}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section bg="white">
      <div className="text-center">
        <Title>Comece hoje a comer bem <Hl>sem complicação</Hl></Title>
        <div className="mt-8"><Cta>Quero meu ebook agora</Cta></div>
      </div>
    </Section>
  );
}

export function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="bg-primary px-5 py-8 text-center text-xs text-primary-foreground">
      <p>Copyright © {year} - Todos os direitos reservados.</p>
      <p className="mx-auto mt-3 max-w-[640px] opacity-80">
        Este site não possui vínculo com Facebook, Instagram, Google ou qualquer outra plataforma.
      </p>
    </footer>
  );
}
