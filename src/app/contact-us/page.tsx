// next
import type { Metadata } from "next";

// components
import Hero from "@/components/hero-c";
import Secondary from "@/components/secondary";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";

// assets
import { AtSymbolIcon } from "@heroicons/react/24/solid";
import { DevicePhoneMobileIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import heroImg from "@/assets/images/hero/contact-us.webp";

export const metadata: Metadata = {
  title: "ArtCom ► Kontakt",
};

export default function Page() {
  return (
    <>
      <Hero>
        <Hero.Header>
          <Hero.Header1>Kontakt</Hero.Header1>
        </Hero.Header>
        <Hero.Icon icon={<AtSymbolIcon />} />
        <Hero.Image imageSrc={heroImg} />
        <Hero.Content>
          <ul className="border border-surface-1 text-center">
            <li className="bg-surface-1 p-2">
              <p className="m-auto text-text-2">Przedsiębiorstwo Zastosowań Informatyki &quot;ARTCOM&quot;</p>
              <p className="m-auto text-sm text-text-1">Roman Bocheński</p>
            </li>
            <li className="p-2">
              <p className="m-auto">al. Tadeusza Rejtana 53a, lokal 108H</p>
              <p className="m-auto">35-328 Rzeszów, Polska</p>
            </li>
            <li className="p-2">
              <table className="m-auto border-collapse text-start">
                <tbody>
                  <tr>
                    <td className="p-2">
                      <DevicePhoneMobileIcon width={24} height={24} />
                    </td>
                    <td className="p-2">(+48) 509 702 290</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <PhoneIcon width={24} height={24} />
                    </td>
                    <td className="p-2">(+48) 17 852 34 03</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <EnvelopeIcon width={24} height={24} />
                    </td>
                    <td className="p-2">
                      <a href="mailto:artcom.rzeszow@wp.pl" className="hover:underline">
                        artcom.rzeszow@wp.pl
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </Hero.Content>
      </Hero>
      <Secondary header="Skontaktuj się z nami">
        <ContactMap />
        <ContactForm />
      </Secondary>
    </>
  );
}
