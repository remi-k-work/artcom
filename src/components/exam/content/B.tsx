// components
import Details from "@/components/exam/details";

// assets
import footerImg1 from "@/assets/images/exams/b-footer-1.webp";

export default function B() {
  return (
    <Details>
      <Details.Header>Certificate of Vocational Qualification</Details.Header>
      <Details.Content1>
        <h2>Co to jest certyfikat VCC?</h2>
        <p>
          VCC jest nowym systemem kształcenia i certyfikacji, który powstał z myślą o integracji wiedzy oraz umiejętności zawodowych osób pracujących zarówno na
          ojczystym, jak i międzynarodowym rynku pracy.
        </p>
        <p>
          Certyfikat VCC jest wydawany wyłącznie w języku angielskim i posiada logo Europassu, co gwarantuje jego międzynarodową uznawalność. W tym kontekście
          certyfikat VCC nie tylko potwierdza kompetencje zawodowe, ale także pomaga w oferowaniu tych kompetencji na arenie międzynarodowej.
        </p>
      </Details.Content1>
      <Details.Content2>
        <h2>Co daje certyfikat VCC?</h2>
        <p>
          VCC Certyfikat potwierdza posiadane, wymagane względem pracownika, kwalifikacje, które różnią się w zależności od pełnionej profesji. Zawody, które
          stanowią przedmiot certyfikacji są zgodne z Międzynarodowym Standardem Klasyfikacji Zawodów ISCO-08.
        </p>
        <p>
          Certyfikat VCC potwierdza więc nabycie niezbędnych umiejętności przez pracownika, a jego wydanie może odbyć się jedynie po uzyskaniu pozytywnego
          wyniku z egzaminu teoretycznego i praktycznego.
        </p>
        <p>
          W praktyce, certyfikat VCC jest dowodem na to, że pracownik jest w pełni przygotowany do wykonywania swojej pracy, a jego kwalifikacje są uznawane na
          całym świecie.
        </p>
      </Details.Content2>
      <Details.Footer image1Src={footerImg1}>
        <p>PZI ARTCOM posiada status Akademii Edukacyjnej VCC i jest Partnerem Egzaminacyjnym VCC.</p>
      </Details.Footer>
    </Details>
  );
}
