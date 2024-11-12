// next
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// components
import FormModal from "@/components/FormModal";
import Details from "@/components/blog/details";

// assets
import headerImgA from "@/assets/images/blog/a-header.jpeg";
import contentImg1 from "@/assets/images/blog/a-content-1.jpg";
import contentImg2 from "@/assets/images/blog/a-content-2.jpg";

export const metadata: Metadata = {
  title: "ArtCom ► Lepiej zamówić 2 średnie pizze czy 1 dużą?",
};

export default async function Page() {
  return (
    <FormModal>
      <Details>
        <Details.Header imageSrc={headerImgA}>Lepiej zamówić 2 średnie pizze czy 1 dużą?</Details.Header>
        <Details.Content1>
          <p>
            Program Excel w wielu sytuacjach życia codziennego ułatwia podejmowanie decyzji biznesowych. Jedną z nich jest dylemat – jaką pizzę lepiej jest
            zamówić – dwie średnie czy jedną dużą?
          </p>
          <p>
            Przykładowo moja ulubiona pizza wiejska kosztuje <b>40 zł</b> za pizzę o średnicy <b>33 cm</b>, lub <b>49 zł</b> gdy średnica pizzy wynosi aż&nbsp;
            <b>50 cm</b>. Pewnie wiele osób w tej sytuacji zamówiłoby dwie średnie pizze płacąc <b>80 zł</b>. Prawda jest natomiast taka, że płacąc&nbsp;
            <b>„zaledwie” 49 zł</b> dostaniemy więcej ciasta niż jest w dwóch średnich pizzach!
          </p>
          <p>Na początek przypomnijmy sobie wzór na pole koła:</p>
          <h2>P = π ⋅ r²</h2>
          <p>
            Dla przypomnienia <b>π</b> wynosi 3,14 natomiast literą <b>r</b> oznaczamy promień koła (połowa średnicy).
          </p>
          <p>Wprowadźmy nasze dane do Excela:</p>
          <Image src={contentImg1} alt="" />
          <p>
            W komórce <b>D2</b> wpisałem taką oto prostą formułę: <b>=3,14*C2^2</b>. Zamiast pisać z palca <b>3,14</b> równie dobrze mógłbym użyć funkcji&nbsp;
            <b>PI()</b> pisząc <b>=PI()*C2^2</b> ale jest to szczegół techniczny. Skopiujmy tę formułę również do komórki <b>D3</b>. Czyli widzimy, że pole
            powierzchni całkowitej średniej pizzy to <b>854 cm2</b> a dużej to aż <b>1926 cm2</b>!
          </p>
        </Details.Content1>
        <Details.Content2>
          <p>
            W komórce <b>D4</b> wpisałem prostą formułę: <b>=D2/D3</b> i zmieniłem format komórki na procentowy. Dzięki temu już wiem, że pole powierzchni
            całkowitej średniej pizzy to około <b>43,56%</b> pola powierzchni całkowitej pizzy dużej. Mało tego w komórce <b>E2</b> mogę wpisać analogiczną
            formułę: <b>=E2/E3</b> i również użyć formatu procentowego.
          </p>
          <p>
            Wtedy dowiem się, że cena jednej średniej pizzy stanowi aż <b>81,61%</b> ceny pizzy dużej!! Czyli płacę nieco ponad <b>18%</b> więcej a mam
            ponad&nbsp;<b>2</b> razy więcej ciasta!
          </p>
          <p>
            Jeśli chcesz, możesz policzyć również cenę <b>1 cm2</b> każdej z pizz. W tym celu w komórce <b>F2</b> należy wpisać formułę, która podzieli pole
            pizzy przez jej cenę. Czyli w komórce <b>F2</b> wpisuję następującą formułę: <b>=E2/D2</b>. Skopiuj tę formułę też do komórki <b>F3</b>.
          </p>
          <p>
            W efekcie dowiemy się, że <b>1 cm2</b> średniej pizzy kosztuje <b>0,0467 zł</b> a dużej już tylko <b>0,0249 zł!</b>
          </p>
          <Image src={contentImg2} alt="" />
          <h2>Wniosek?</h2>
          <p>
            Zamiast dwóch średnich pizz prawie zawsze opłaca się kupić jedną dużą bo ciasta będzie tyle samo lub nawet więcej a w wielu pizzeriach cena dużej
            pizzy jest tak skalkulowana, że kosztuje ona około <b>20%</b> więcej niż średnia.
          </p>
        </Details.Content2>
        <Details.Footer>
          <Details.Footer1>
            <p>
              Autorem wpisu jest <b>Damian Daszkiewicz</b>. Współautor książki&nbsp;
              <Link href="https://www.testyecdl.pl/ksiazki.php" target="_blank">
                Wiem że zdam ECDL Profile DIGCOMP
              </Link>
              , autor bloga&nbsp;
              <Link href="https://www.officeblog.pl/" target="_blank">
                OfficeBlog.pl
              </Link>
              &nbsp;gdzie znajdziesz więcej wpisów poświęconych programowi Excel. Damian jest również jednym z naszych trenerów szkoleń IT.
            </p>
          </Details.Footer1>
          <Details.Footer2>27 grudnia 2023</Details.Footer2>
        </Details.Footer>
      </Details>
    </FormModal>
  );
}
