// component css styles
import styles from "./ContactMap.module.css";

export default function ContactMap() {
  return (
    <article className={styles["contact-map"]}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d164063.39608466913!2d22.019841!3d50.020903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfa5c68194c91%3A0xf406bcb5032a521!2sal.%20Tadeusza%20Rejtana%2053a%2C%2035-328%20Rzesz%C3%B3w%2C%20Polska!5e0!3m2!1spl!2sus!4v1730720373071!5m2!1spl!2sus"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </article>
  );
}
