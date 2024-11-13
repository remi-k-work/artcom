// component css styles
import styles from "./Contact.module.css";

// assets
import { DevicePhoneMobileIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section className={styles["contact"]}>
      <h4 className="max-w-none text-center md:text-start">Zadzwoń lub napisz do nas</h4>
      <table className="mx-auto border-collapse text-start md:mx-0">
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
            <td className="p-2">artcom.rzeszow@wp.pl</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
