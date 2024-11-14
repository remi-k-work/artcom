// component css styles
import styles from "./Contact.module.css";

// assets
import { DevicePhoneMobileIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section className={styles["contact"]}>
      <h4 className="max-w-none text-center md:text-start">Zadzwoń lub napisz do nas</h4>
      <table className="mx-auto border-collapse text-center md:mx-0 md:text-start">
        <tbody>
          <tr>
            <td className="p-1">
              <DevicePhoneMobileIcon width={24} height={24} />
            </td>
            <td className="p-1">(+48) 509 702 290</td>
          </tr>
          <tr>
            <td className="p-1">
              <PhoneIcon width={24} height={24} />
            </td>
            <td className="p-1">(+48) 17 852 34 03</td>
          </tr>
          <tr>
            <td className="p-1">
              <EnvelopeIcon width={24} height={24} />
            </td>
            <td className="p-1">
              <a href="mailto:artcom.rzeszow@wp.pl">artcom.rzeszow@wp.pl</a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
