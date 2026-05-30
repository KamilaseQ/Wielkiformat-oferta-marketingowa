// ──────────────────────────────────────────────────────────────────────────
// Jedno źródło prawdy dla całej oferty. Edytuj treści tutaj.
// PLACEHOLDERY DO UZUPEŁNIENIA są oznaczone komentarzem `TODO:`.
// ──────────────────────────────────────────────────────────────────────────

export type Accent = "brand" | "gold";

export interface MarketStat {
  /** Liczbowa wartość do animacji licznika */
  value: number;
  /** Sufiks pokazany po liczbie (np. "%") */
  suffix?: string;
  /** Liczba miejsc po przecinku */
  decimals?: number;
  title: string;
  description: string;
  source?: string;
  /** Kafelek-wniosek (bez licznika, wyróżniony) */
  conclusion?: boolean;
}

export interface EcosystemNode {
  channel: string;
  role: string;
}

export interface Package {
  id: string;
  tier: 1 | 2 | 3;
  name: string;
  /** Krótkie pozycjonowanie pod nagłówkiem */
  tagline: string;
  price: string;
  priceNote?: string;
  /** Główny cel pakietu — jedno zdanie */
  goal: string;
  /** Punkty na karcie (skrót) */
  highlights: string[];
  /** Opcjonalny nagłówek listy: „Wszystko z poprzedniego pakietu, plus:” */
  buildsOn?: string;
  /** Pełny zakres w modalu */
  scope: string[];
  /** Jak to wspiera Wielki Format */
  supports: string[];
  /** Krótki opis efektu (na karcie) */
  effect: string;
  /** Opcjonalny badge na karcie (niebieski) — np. „Najlepszy balans” */
  tag?: string;
  platforms: string[];
  featured?: boolean;
  accent: Accent;
  /** Schemat ekosystemu — tylko dla najwyższego pakietu */
  ecosystem?: EcosystemNode[];
}

export const MARKET_STATS: MarketStat[] = [
  {
    value: 7.7,
    suffix: "%",
    decimals: 1,
    title: "przychodów na marketing",
    description:
      "Tyle średnio z budżetu firmy idzie na marketing. Standardowa pozycja w każdym poważnym biznesie.",
    source: "Gartner",
  },
  {
    value: 52.3,
    suffix: "%",
    decimals: 1,
    title: "firm B2B zwiększa budżety",
    description:
      "Ponad połowa firm B2B planuje wydawać na marketing więcej, nie mniej. Rynek inwestuje w widoczność.",
    source: "6sense",
  },
  {
    value: 61.1,
    suffix: "%",
    decimals: 1,
    title: "marketingu to kanały cyfrowe",
    description:
      "Większość budżetów marketingowych jest już online. Widoczność nie kończy się na jednym medium — kanały się wzmacniają.",
    source: "Gartner",
  },
  {
    value: 0,
    title: "Wniosek dla Wielkiego Formatu",
    description:
      "Sprzedajesz widoczność innym firmom — a własnej online jeszcze nie zbudowałeś. To jedyny kanał, którego Wielki Format nie zagospodarował. Naturalny kierunek: najpierw mocna pozycja w Mazowieckiem, a z czasem może i w całej Polsce.",
    conclusion: true,
  },
];

export const POTENTIAL_POINTS: { title: string; text: string }[] = [
  {
    title: "Rozpoznawalność w całym województwie",
    text: "Dziś znają Cię ci, którzy mijają tablicę. Online może Cię znać całe Mazowieckie — zanim zadzwoni.",
  },
  {
    title: "Artur jako twarz branży",
    text: "Marka osobista domyka większe rozmowy. Ludzie ufają człowiekowi, nie tylko firmie.",
  },
  {
    title: "Skala i profesjonalizm na ekranie",
    text: "Social media mogą pokazać lokalizacje, realizacje i rozmach — dowód, że Wielki Format gra w innej lidze.",
  },
  {
    title: "Edukacja klienta",
    text: "Treści tłumaczą, dlaczego billboard wciąż działa. Klient przychodzi już przekonany.",
  },
  {
    title: "Google i cytowania",
    text: "Wizytówka i wzmianki w sieci łapią tych, którzy szukają reklamy zewnętrznej z własnej inicjatywy.",
  },
  {
    title: "Fundament już jest",
    text: "Masz procesy, klientów i sprzedaż offline. Nie naprawiamy — skalujemy to, co działa.",
  },
];

export const PACKAGES: Package[] = [
  {
    id: "obecnosc",
    tier: 1,
    name: "Obecność w sieci",
    tagline: "Uporządkowanie widoczności online",
    price: "3 000 zł",
    priceNote: "miesięcznie",
    goal: "Profesjonalna, regularna obecność online.",
    highlights: [
      "12 rolek miesięcznie",
      "12 relacji (story) miesięcznie",
      "Instagram · TikTok · Facebook",
      "Treści budujące zaufanie i profesjonalizm",
    ],
    scope: [
      "12 rolek miesięcznie",
      "12 relacji (story) miesięcznie",
      "Prowadzenie Instagrama, TikToka i Facebooka",
      "Rolki weryfikujące firmę — pokazujące zaufanie i profesjonalizm",
    ],
    supports: [
      "Firma wreszcie istnieje tam, gdzie ludzie sprawdzają zanim zadzwonią.",
      "Regularność buduje wrażenie stabilnej, poważnej marki.",
      "Stały rytm publikacji i spójny przekaz od pierwszego miesiąca.",
    ],
    effect: "Wielki Format zaczyna być obecny i wygląda profesjonalnie.",
    platforms: ["Instagram", "TikTok", "Facebook"],
    accent: "brand",
  },
  {
    id: "ekspansja",
    tier: 2,
    name: "Ekspansja",
    tagline: "Najmocniejszy balans regularności i kosztu",
    price: "6 000 zł",
    priceNote: "miesięcznie",
    goal: "Realne budowanie marki firmy i marki osobistej Artura.",
    tag: "Rozsądny balans",
    buildsOn: "Wszystko z Pakietu 1, plus:",
    highlights: [
      "2× więcej rolek — 24 miesięcznie",
      "Codzienne relacje (30/30 dni)",
      "Treści pod markę osobistą i viralowość",
      "Większy zasięg i rozpoznawalność marki",
      "Bieżąca analiza trendów",
    ],
    scope: [
      "24 rolki miesięcznie",
      "Codzienne relacje (story) — 30 dni w miesiącu",
      "Prowadzenie Instagrama, TikToka i Facebooka",
      "Rolki budujące markę firmy i osobistą: zaufanie, sympatię, rozpoznawalność",
      "Treści pod viralowość i bieżące trendy",
      "Bieżąca analiza trendów",
    ],
    supports: [
      "Codzienna obecność sprawia, że marka żyje w głowach odbiorców między telefonami.",
      "Marka staje się lubiana — a sympatia odbiorców przekłada się na zaufanie do oferty.",
      "Rośnie profesjonalny wizerunek: realizacje, skala i jakość widoczne na co dzień.",
      "Powstaje marka osobista Artura — twarz, której ludzie ufają bardziej niż samemu logo.",
      "Większy zasięg i rozpoznawalność w regionie budowane krok po kroku.",
    ],
    effect: "Marka firmy i Artura realnie rosną — i stają się lubiane.",
    platforms: ["Instagram", "TikTok", "Facebook"],
    accent: "brand",
  },
  {
    id: "pelna-widocznosc",
    tier: 3,
    name: "Pełna Widoczność Króla Artura",
    tagline:
      "Spójny ekosystem, w którym każdy kanał gra inną rolę — razem budują silną pozycję online i markę osobistą.",
    price: "12 000 zł",
    priceNote: "miesięcznie",
    goal: "Pełne pokrycie kanałów i formatów: od codziennych krótkich treści, przez długie filmy, po LinkedIn, X i Google.",
    buildsOn: "Wszystko z Pakietu 2, plus:",
    highlights: [
      "Codzienna rolka „natywna”",
      "Codzienna relacja (story)",
      "Dwa długie filmy miesięcznie",
      "Nowe platformy: YouTube · LinkedIn · X",
      "15 postów LinkedIn + 15 postów X",
      "Spójne treści między platformami (na kanwie długich filmów)",
      "Cytowania SEO — lepsze pozycje w Google",
      "Wizytówka Google wliczona w cenę",
    ],
    scope: [
      "Codzienna rolka „natywna”",
      "Codzienna relacja (story)",
      "Dwa długoformatowe filmy miesięcznie",
      "Recykling długich materiałów na krótkie treści — spójność między platformami",
      "15 postów na LinkedIn",
      "15 postów na X",
      "Pełna obecność: TikTok · Instagram · Facebook · YouTube · LinkedIn · X",
      "Bieżąca analiza trendów",
      "Cytowania SEO — wiele stron wskazujących na Twoją stronę (lepsze pozycje w Google)",
      "Wizytówka Google wliczona w cenę pakietu",
    ],
    supports: [
      "Pełne pokrycie kanałów — gdziekolwiek klient szuka, Wielki Format już tam jest.",
      "Artur staje się rozpoznawalną twarzą i autorytetem branży.",
      "LinkedIn i X budują wizerunek Artura jako eksperta i profesjonalisty w świecie biznesu.",
      "Długie filmy spinają przekaz, więc marka wygląda spójnie i profesjonalnie na każdej platformie.",
      "Google i cytowania łapią klientów spoza social mediów — także tych, którzy dopiero szukają reklamy zewnętrznej.",
      "Codzienny rytm treści buduje zaufanie i sympatię — markę, którą ludzie lubią i polecają.",
      "Mocna pozycja w Mazowieckiem dziś, z przestrzenią na całą Polskę w przyszłości.",
    ],
    effect:
      "Wielki Format wyrasta na lidera widoczności online, a Król Artur — na rozpoznawalną twarz branży.",
    platforms: ["Instagram", "TikTok", "Facebook", "YouTube", "LinkedIn", "X"],
    featured: true,
    accent: "gold",
    ecosystem: [
      { channel: "Rolki natywne (codziennie)", role: "Przyciągają uwagę i dają zasięg w social mediach" },
      { channel: "Relacje (story, codziennie)", role: "Utrzymują codzienny, bezpośredni kontakt z odbiorcą" },
      { channel: "Długie filmy", role: "Budują autorytet i spinają przekaz między platformami" },
      { channel: "LinkedIn", role: "Profesjonalny wizerunek Artura i rozmowy B2B" },
      { channel: "X", role: "Głos ekspercki — komentarze do branży" },
      { channel: "YouTube", role: "Trwała biblioteka dłuższych materiałów" },
      { channel: "Google + cytowania SEO", role: "Widoczność poza social mediami — klienci prosto z wyszukiwarki" },
    ],
  },
];

export interface GlossaryItem {
  term: string;
  definition: string;
  /** Etykieta pod placeholderem mockupu */
  mockupLabel: string;
  image: string;
  imageAlt: string;
}

export const GLOSSARY: GlossaryItem[] = [
  {
    term: "Rolka",
    definition:
      "Krótki, pionowy film (15–60 s). Główny format zasięgowy na Instagramie, TikToku i Facebooku.",
    mockupLabel: "Przykład rolki",
    image: "/images/glossary/reel.png",
    imageAlt: "Podgląd pionowej rolki z przyciskami reakcji po prawej stronie",
  },
  {
    term: "Rolka natywna",
    definition:
      "Rolka zrobiona „pod platformę” — wygląda jak naturalny content, nie jak reklama. Lepiej się rozchodzi.",
    mockupLabel: "Przykład rolki natywnej",
    image: "/images/glossary/native-reel.png",
    imageAlt: "Podgląd naturalnej rolki nagranej na placu montażu billboardu",
  },
  {
    term: "Relacja / story",
    definition:
      "Krótka treść znikająca po 24 h. Buduje codzienny, bezpośredni kontakt z odbiorcą.",
    mockupLabel: "Przykład story",
    image: "/images/glossary/story.png",
    imageAlt: "Podgląd relacji z paskami czasu u góry i polem odpowiedzi na dole",
  },
  {
    term: "Długi format",
    definition:
      "Dłuższy materiał (np. na YouTube). Buduje autorytet i pomaga utrzymać spójny przekaz między platformami.",
    mockupLabel: "Przykład filmu YouTube",
    image: "/images/glossary/long-form-youtube.png",
    imageAlt: "Podgląd strony długiego filmu z odtwarzaczem i listą rekomendacji",
  },
  {
    term: "LinkedIn (marka osobista)",
    definition:
      "Platforma świata biznesu. Buduje profesjonalny wizerunek Artura jako eksperta.",
    mockupLabel: "Przykład posta LinkedIn",
    image: "/images/glossary/linkedin-personal-brand.png",
    imageAlt: "Podgląd profesjonalnego posta z fotografią realizacji billboardowej",
  },
  {
    term: "X (głos ekspercki)",
    definition:
      "Krótkie opinie i komentarze do branży. Buduje obecność ekspercką i osobisty głos.",
    mockupLabel: "Przykład posta na X",
    image: "/images/glossary/x-expert-voice.png",
    imageAlt: "Podgląd krótkiego eksperckiego wpisu w serwisie mikroblogowym",
  },
  {
    term: "Lokalne cytowania",
    definition:
      "Wzmianki o firmie na innych stronach. Im więcej, tym wyżej w Google — także poza social mediami.",
    mockupLabel: "Przykład cytowania",
    image: "/images/glossary/local-citations.png",
    imageAlt: "Podgląd lokalnych wpisów katalogowych wspierających widoczność firmy",
  },
  {
    term: "Wizytówka Google",
    definition:
      "Profil firmy w Google i Mapach. Pierwsze, co widzi klient szukający reklamy zewnętrznej.",
    mockupLabel: "Przykład wizytówki Google",
    image: "/images/glossary/google-business-profile.png",
    imageAlt: "Podgląd wizytówki firmy z oceną, danymi kontaktowymi i mapą",
  },
];

export interface Contact {
  name: string;
  phone: string; // format do tel: (bez spacji)
  phoneDisplay: string;
}

export const CONTACTS: Contact[] = [
  { name: "Kamil", phone: "+48501747490", phoneDisplay: "+48 501 747 490" },
  { name: "Leon", phone: "+48728561373", phoneDisplay: "+48 728 561 373" },
];
