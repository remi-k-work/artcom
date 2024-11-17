// next
import type { Metadata } from "next";

// components
import Hero from "@/components/hero-c";
import Secondary from "@/components/secondary";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
import { DRAW, MotionPath, MotionSvg } from "@/components/AnimComps";

// assets
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
                d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                clipRule="evenodd"
                variants={DRAW}
              />
            </MotionSvg>
          }
        />
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
