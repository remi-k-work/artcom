// next
import type { Metadata } from "next";
import Link from "next/link";

// components
import { Button } from "@/components/ui/custom/button";
import Hero from "@/components/hero-e";
import Secondary from "@/components/secondary";
import Blog, { BlogHeader, BlogContent } from "@/components/blog";
import { DRAW, MotionPath, MotionSvg } from "@/components/AnimComps";

// assets
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import blogHeaderImgA from "@/assets/images/blog/a-header.jpeg";
import blogHeaderImgB from "@/assets/images/blog/b-header.webp";
import blogHeaderImgC from "@/assets/images/blog/c-header.jpeg";
import blogHeaderImgD from "@/assets/images/blog/d-header.webp";

export const metadata: Metadata = {
  title: "ArtCom ► Blog",
};

export default function Page() {
  return (
    <>
      <Hero>
        <Hero.Header>
          <Hero.Header1>Blog</Hero.Header1>
          <Hero.Header2>Lepiej zamówić 2 średnie pizze czy 1 dużą?</Hero.Header2>
        </Hero.Header>
        <Hero.Icon
          icon={
            <MotionSvg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="hsl(var(--accent))"
              fill="currentColor"
              initial="hidden"
              whileInView="visible"
            >
              <MotionPath
                strokeLinecap="round"
                strokeLinejoin="round"
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                clipRule="evenodd"
                variants={DRAW}
              />
            </MotionSvg>
          }
        />
        <Hero.Content imageSrc={blogHeaderImgA}>
          <p>
            Program Excel w wielu sytuacjach życia codziennego ułatwia podejmowanie decyzji biznesowych. Jedną z nich jest dylemat – jaką pizzę lepiej jest
            zamówić – dwie średnie czy jedną dużą? Przykładowo moja ulubiona pizza wiejska kosztuje <b>40 zł</b> za pizzę o średnicy <b>33 cm</b>, lub&nbsp;
            <b>49 zł</b> gdy średnica pizzy wynosi aż <b>50 cm</b>. Pewnie wiele osób w tej sytuacji zamówiłoby dwie średnie pizze płacąc 80 zł. Prawda jest
            natomiast taka, że płacąc <b>„zaledwie” 49 zł</b> dostaniemy więcej ciasta niż jest w dwóch średnich pizzach!
          </p>
        </Hero.Content>
        <Hero.Footer>
          <Hero.Footer1>
            <Button asChild>
              <Link href="/blog/a">
                <InformationCircleIcon width={24} height={24} />
                Czytaj więcej
              </Link>
            </Button>
          </Hero.Footer1>
          <Hero.Footer2>27 grudnia 2023</Hero.Footer2>
        </Hero.Footer>
      </Hero>
      <Secondary header="Podróż w czasie przez nasz Blog">
        <Blog detailsHref="/blog/b" blogDate="18 listopada 2023">
          <BlogHeader>Jestem ekspertem, czyli jak blefować, że znam się na komputerach?</BlogHeader>
          <BlogContent imageSrc={blogHeaderImgB}>
            Temat wydaje się trochę dziwny? Dzisiaj już przecież wszyscy &quot;znają się&quot; na komputerach 😀. No, może nie wszyscy, ale kto się przyzna?
            Dlatego nawet jeśli się znamy, to zawsze w towarzystwie znajdzie się ktoś, kto zna się lepiej. Wtedy dobrze jest zablefować, tak aby WSZYSCY
            zobaczyli że jesteśmy komputerowym ekspertem.
          </BlogContent>
        </Blog>
        <Blog detailsHref="/blog/c" blogDate="26 października 2023">
          <BlogHeader>Czy sztuczna inteligencja zastąpi psa?</BlogHeader>
          <BlogContent imageSrc={blogHeaderImgC}>
            Obserwując rozwój sztucznej inteligencji, zauważam jednocześnie postępujące straszenie nią w postaci różnego rodzaju oświadczeń naukowców, w
            wywiadach i artykułach żądnych sensacji dziennikarzy. Przyszłość podana jest w najczarniejszych barwach. Strach się dobrze sprzedaje, zwłaszcza, że
            jest to nowy strach. Obawy rosną zwłaszcza u tych, którzy oglądali kultowe filmy w rodzaju „Terminatora” „Ja, robot” czy „Laleczka Chucky”.
          </BlogContent>
        </Blog>
        <Blog detailsHref="/blog/d" blogDate="18 października 2023">
          <BlogHeader>Komputery kwantowe - czy już istnieją?</BlogHeader>
          <BlogContent imageSrc={blogHeaderImgD}>
            Komputery kwantowe są uważane za jedną z najbardziej obiecujących technologii. Przetwarzają dane w sposób zdecydowanie szybszy niż obecne
            &quot;tradycyjne&quot; komputery, co oczywiście może mieć ogromne znaczenie w rozwoju nauki, badaniach np. nad nowymi lekami na nieuleczalne dziś
            choroby lub nowymi antybiotykami albo nad nowymi materiałami. Na komputery kwantowe niecierpliwie czeka sztuczna inteligencja, mająca ogromne
            potrzeby jeśli chodzi moc obliczeniową, której zaczyna brakować tradycyjnym komputerom. Jednocześnie mówi się, że to dopiero możliwości komputera
            kwantowego pozwolą stworzyć &quot;prawdziwą&quot; niezwykle zaawansowaną AI, której dzisiaj jeszcze nie ma. Czy AI z komputerem kwantowym zdziała
            więc cuda? Zobaczymy.
          </BlogContent>
        </Blog>
      </Secondary>
    </>
  );
}
