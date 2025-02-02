// component css styles
import styles from "./Address.module.css";

// next
import Image from "next/image";

// assets
import logo from "@/assets/logo-artcom.webp";

export default function Address() {
  return (
    <section className={styles["address"]}>
      <h4 className="max-w-none text-center md:text-start">Adres i Siedziba</h4>
      <ul className="flex flex-col text-center md:flex-row md:text-start">
        <li className="flex-none p-2">
          <Image src={logo} alt="ARTCOM" title="ARTCOM" className="mx-auto md:mx-0" />
        </li>
        <li className="flex-1 p-2">
          <p className="mx-auto text-text-2 md:mx-0">Przedsiębiorstwo Zastosowań Informatyki &quot;ARTCOM&quot;</p>
          <p className="mx-auto text-sm text-text-1 md:mx-0">Roman Bocheński</p>
          <p className="mx-auto md:mx-0">al. Tadeusza Rejtana 53a, lokal 108H</p>
          <p className="mx-auto md:mx-0">35-328 Rzeszów, Polska</p>
        </li>
      </ul>
    </section>
  );
}
